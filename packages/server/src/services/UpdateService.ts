import path from 'path';
import stream from 'stream';
import { promisify } from 'util';
import fs from 'fs-extra';
import got from 'got';
import tar from 'tar';

import { PATH } from '@utils/constants';
import { getLatestReleaseInfo, Release } from '@utils/github';
import { getSystemString } from '@utils/os';

class UpdateService {
    private update: Release;

    constructor() {
        this.check();
    }

    /**
     * Check if there are any new updates available
     */
    public async check() {
        this.update = await getLatestReleaseInfo();
        // If this.update.version !== this.server.version

        return true; // True = new update available
    }

    public async downloadLatestRelease() {
        if (!this.update.downloadUrl) {
            return;
        }

        // Create temp folder if it doesn't exist
        if (!(await fs.pathExists(PATH.tmp))) {
            await fs.mkdirs(PATH.tmp);
        }
        
        // Download release
        const archiveName = path.join(PATH.tmp, `${this.getReleaseName()}.tar.gz`)
        await promisify(stream.pipeline)(
            got.stream(this.update.downloadUrl),
            fs.createWriteStream(archiveName)
        );

        // Extract archive
        await tar.extract({
            file: archiveName,
            cwd: PATH.tmp,
        });

        // Remove archive
        await fs.remove(archiveName);
    }

    public async applyLatestRelease() {
        // Make sure server is off
        /// TODO

        const releaseName = this.getReleaseName();

        // Copy files from downloaded folder
        await fs.copy(path.join(PATH.tmp, releaseName), PATH.srv);
    
        // Write version file
        await fs.outputFile(path.join(PATH.srv, 'VERSION'), this.update.version);
        
        // Clean up
        await fs.remove(path.join(PATH.tmp, releaseName));
    }

    private getReleaseName() {
        return `teeworlds-${this.update.version}-${getSystemString()}`
    }

}

export default UpdateService;
