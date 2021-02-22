const path = require('path');
const child_process = require('child_process');
const esbuild = require('esbuild');
const { watch } = require('chokidar');

const isDev = process.env.NODE_ENV !== 'production';
const isWatch = process.env.WATCH !== undefined;
const root = path.join(__dirname, '..');
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

const build = async (incremental = false) => {
    const result = await esbuild.build({
        entryPoints: [path.join(src, 'app.ts')],
        platform: 'node',
        bundle: true,
        tsconfig: path.join(root, 'tsconfig.json'),
        sourcemap: isDev,
        minify: !isDev,
        outdir: dist,
        incremental,
    });

    return result;
};

const run = async () => {
    // Initial build
    console.log('Starting initial build...');
    console.time('Initial build finished');
    const result = await build(isWatch);
    console.timeEnd(`Initial build finished`);

    // If we're not watching, there's nothing else to do
    if (!isWatch) return;

    // Launch app
    const appPath = path.join(dist, 'app.js');
    let app = child_process.fork(appPath);
    console.log('Running app');

    // Watch for changes in source folder
    const srcPath = path.join(src, '**', '*');
    const watcher = watch(srcPath, { persistent: true });
    console.log(`Watching folder ${srcPath} for changes`);
    
    // If changes are detected
    watcher.on('change', async () => {
        console.log('Changes detected!');

        // Kill app
        app.kill();

        // Incrementally rebuild
        console.log('Rebuilding...');
        console.time('Rebuild finished');
        await result.rebuild();
        console.timeEnd(`Rebuild finished`);

        // Respawn a process
        app = child_process.fork(appPath);
    });
    
    // Clean up
    process.on('beforeExit', () => {
        console.log('Quitting...');
        app.kill();
        result.rebuild.dispose();
        watcher.close();
    });
};

run();
