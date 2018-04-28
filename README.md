<p align="center">
    <img style="display:block;text-align:center" src="https://git.zone24x7.lk/MATRIX24x7/mx24x7-log-viewer/uploads/5b1ae27ad9bf32f10027bbd5cf6fbba0/Matrix24x7-_600x130_.png" alt="MATRIX24x7" />
</p>

# MATRIX24x7 Plugins Boilerplate

This seed repository serves as a starter for developing plugins for MATRIX24x7 dashboards. The project was scaffolded using the [@angular-devkit/schematics](https://www.npmjs.com/package/@angular-devkit/schematics) and the [@angular-devkit/schematics-cli](https://www.npmjs.com/package/@angular-devkit/schematics-cli).

## Quick Start
>Make sure you have Node version >= 6.0 and NPM >= 3

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```bash
# clone the repo
git clone https://git.zone24x7.lk:MATRIX24x7/mx24x7-plugin-boilerplate.git

# change directory
cd mx24x7-plugin-boilerplate

# install the dependencies with npm
npm install
```

## Table of Contents
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Setting Up](#setting-up)
    * [Developer Guide](#developer-guide)
    * [Style Guide](#style-guide)
    * [Running the tests](#running-the-tests)
    * [Build](#build)
* [Built With](#built-with)
* [Contributing](#contributing)
* [License](#license)

## File Structure
We have used the component approach in our MATRIX24x7 dashboards and please follow same when developing your plugins. 
```
mx24x7-plugin-boilerplate/
 ├──src/                                        * our source files that will be compiled to javascript
 │  ├──angular-utils/                           * folder containing the utility functions of the angular schematics.
 │  │                                           * (Note: Will be removed once the library stabilizes)
 │  │                           
 │  └──plugin/                                  * folder containing the custom plugin schematic
 │  │   ├──files/                 
 │  │   │   └──_path_/      
 │  │   │       └──__name@dasherize__/          * PluginApp: folder
 │  │   │           ├──plugin.component.html    * a simple version of the plugin component template
 │  │   │           ├──plugin.component.scss    * a simple version of the plugin component stylesheet
 │  │   │           ├──plugin.component.ts      * a simple version of the plugin component components
 │  │   │           ├──plugin.config.json       * plugin configuration file
 │  │   │           ├──plugin.module.ts         * plugin main module file
 │  │   │           └──plugin.routes.ts         * plugin main routes file
 │  │   │
 │  │   │──index.ts                             * file containing factory for the schematic
 │  │   │──schema.json                          * command line arguments are described using json schema                       
 │  │   └──schema.ts                            * schema as an interface
 │  │    
 │  └──utils/ 
 │  │   │──add-to-module-context.ts             * file to hold the modifying context class
 │  │   └──ng-module-utils.ts                   * file containing the factory functions for rules
 │  │
 │  └──collection.json                          * file containing info to point it to your plugin's schema
 │
 ├──.gitignore                                  * file containing the list to ignore from version control
 ├──CONTRIBUTING.md                             * document which explains the contributing guidelines
 ├──LICENSE                                     * LICENSE agreement
 ├──package.json                                * contains dependencies used by npm
 ├──README.md                                   * documentation file
 ├──sass-lint.yml                               * sass lint config 
 ├──tsconfig.json                               * typescript config
 └──tslint.json                                 * typescript lint config

```

## Getting Started
### Prerequisites

* The generated project have dependencies that require `node` together with `npm`.
* Ensure you're running the latest stable versions Node and NPM.

>Make sure you have `Node` and `NPM` installed by running simple commands on the command line to see what version of each is installed.

* Node - Type `node -v` on the terminal.
* NPM -  Type `npm -v` on the terminal.

### Setting Up
* `clone` the repository
* `cd mx24x7-plugin-boilerplate` to change the directory
* `npm install` to install the dependencies with npm

### Developer Guide

Please read the documentation listed bellow to learn the development procedures and deployment stats.

**Link** - [Developer Guide](https://docs.google.com/document/d/1uqOVrOBhwiyes5ruMal0KTZFRCz6d2Y5VJZw1hF27Wk/edit#)

### Style Guide

Please refer the style guide listed bellow to learn the styling standards and guidelines.

**Link** - [Style Guide](https://docs.google.com/document/d/1wKKewlN_g7OntWZt7eEZvnenPTwAsDHlri1ag2LQOjo/edit)

### Running the tests

Use the following command to run the unit tests for the application.

```shell
npm run test
```

### Build

Use the following command to build the project.

```shell
npm run build
```

## Built With

* [Angular](https://angular.io/) - The web framework used
* [Npm](https://www.npmjs.com/) - Dependency Management
* [Angular Devkit](https://github.com/angular/devkit) - Development tools and libraries specialized for Angular

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
