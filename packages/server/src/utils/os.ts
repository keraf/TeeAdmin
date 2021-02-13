export const getInfo = () => {
    const { arch, platform } = process;
    return {
        arch,
        platform,
    };
};

/**
 * Only Linux (x86/x64) is support
 */
export const isSupported = () => {
    const { arch, platform } = getInfo();
    switch (platform) {
        case 'linux':
            return ['x64', 'x32'].includes(arch);
        default:
            return false;
    }
};

export const getSystemString = () => {
    const { arch, platform } = getInfo();
    switch (platform) {
        case 'linux':
            return `linux_${arch === 'x32' ? 'x86' : 'x86_64'}`;
        case 'win32':
            return `win${arch === 'x32' ? '32' : '64'}`;
        case 'darwin':
            return 'osx';
        default:
            return 'src';
    }
};
