import path from 'path';
import { spawn } from 'child_process';

import { PATH } from '@utils/constants';

class ServerService {
    private process;
    private isRunning = false;
    private version = '';

    constructor() {
        // TODO: Set version (get from version file)
    }

    public async start() {
        this.process = spawn(path.join(PATH.srv, 'teeworlds_srv'));
        this.process.stdout.on('data', data => {
            // TODO: Send to logger service
            console.log(data.toString());
        });

        // TODO: Check for process crash (and auto-restart if enabled)

        this.isRunning = true;
    }

    public async stop() {
        // TODO: Check if process has been killed 
        this.process.kill();
        this.isRunning = false;
    }

    public async restart() {
        if (this.isRunning) {
            await this.stop();
        }

        await this.start();
    }
}

export default ServerService;
