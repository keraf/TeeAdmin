import got from 'got';
import { getSystemString } from './os';
import { GITHUB } from './constants';

export type Release = {
    version: string;
    releaseUrl: string;
    downloadUrl: string;
    released: string;
    size: number;
    body: string;
};

export const getLatestReleaseInfo = async (): Promise<Release> => {
    const url = `https://api.github.com/repos/${GITHUB.owner}/${GITHUB.repo}/releases/latest`;
    const response = await got(url);
    const data = JSON.parse(response.body);

    const system = getSystemString();
    const asset = data.assets.find(a => a.name.includes(system));

    if (!asset) {
        throw new Error(`No assets found for ${system}`);
    }

    return {
        version: data.tag_name,
        releaseUrl: data.html_url,
        downloadUrl: asset.browser_download_url,
        released: asset.created_at,
        size: asset.size,
        body: data.body,
    };
};
