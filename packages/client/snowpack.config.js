/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
	mount: {
		public: {
            url: '/',
            static: true,
        },
		src: {
            url: '/dist',
        },
	},
	plugins: [
		'@snowpack/plugin-react-refresh',
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-typescript',
	],
	routes: [
		{
            match: 'routes',
            src: '.*',
            dest: '/index.html',
        },
	],
	optimize: {
		bundle: true,
        minify: true,
        treeshake: true,
        target: 'es2018',
	},
	devOptions: {
		open: 'none',
	},
	packageOptions: {},
	buildOptions: {},
};
