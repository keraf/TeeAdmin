with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "teeadmin-dev";
  buildInputs = [
    nodejs
    git
  ];
  shellHook = ''
    export PATH="$PATH:$(pwd)/node_modules/.bin"
  '';
}