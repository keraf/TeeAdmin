> This is absolutely not in a useable state and currently in early development. I hope to have an MVP ready by April 2021.

# TeeAdmin
TeeAdmin is a web panel for managing your Teeworlds server!

At the moment, ony Linux (x86_64 & x86) is supported. If you run on any other OS, you can use the Docker image.

## Features
- [ ] Installs latest Teeworlds server on first launch
- [ ] Server updater (& notifies when update is available)
- [ ] Start/Stop/Restart server
- [ ] Auto-restarter if the server crashes
- [ ] View/Download journaled server log
- [ ] Read chat and post messages
- [ ] Send commands to the server
- [ ] Change parameters of the server (in config and live)
- [ ] View/Kick/Ban players
- And more!

## Screenshots
_WIP_

## Getting started
_WIP_

## Development
This section is only inteded if you plan to contribute to TeeAdmin. If you simply want to use the tool, please refer to the _Getting started_ guide above.

### Environment
#### Using Nix (recommended)
If you are on Linux or using WSL on Windows, the easiest way to get started with setting up the TeeAdmin development environment is to [install Nix](https://nixos.org/download.html#nix-quick-install).

Once installed, you can simply run the `nix-shell` command at the root of the project. All necessary dependencies will be downloaded the first time and the `node_modules\.bin` directory of the project will be added to the PATH environment variable while using the shell.

#### Manual setup
If you wish to manually setup the development environment, you need to install [NodeJS](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads). As of now, these are the only dependencies. But this might change in the future! Keep an eye on this README or simply choose the Nix way 😉

### Building & Debugging
_WIP_ 
#### Server
- Watch & rebuild: `npm run dev`
- Build for distribution: `npm run build`

#### Client
_WIP_ 

### Tests
_WIP_