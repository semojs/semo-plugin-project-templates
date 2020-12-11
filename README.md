YOUR_AWESOME_PLUGIN_NAME
------------------------

THIS IS A PLUGIN TEMPLATE
****
## Requirements

* Node v10.0+
* Yarn
* @semo/cli installed globally

## Usage

1. Clone or download this repo, (Or use `semo new PLUGIN_NAME --select`)
2. Run `yarn install`.
3. At root directory, run `yarn watch`.
4. At another window and same directory, run `semo hi`, an example command.
5. Change the package name and version of package.json.
6. Change that command or delete it, and use `semo generate command NAME` to generate a new one.
7. Change this readme file also.
8. Publish or share with your friends.

## Publish

If you use the Travis as your CI/CD tool, this template has already include the config file. you don't need to change it, just get token from npm and set it to Travis the env variable `NPM_TOKEN`, then trigger the build when you tag and push your package or trigger it on Travis backend manually.
