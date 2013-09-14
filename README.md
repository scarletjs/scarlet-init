scarlet-init
============

> Scarlet-init is a scaffolding tool used to automate Scarlet plugin creation.

[![Build Status](https://travis-ci.org/scarletjs/scarlet-init.png?branch=master)](https://travis-ci.org/scarletjs/scarlet-init)

## Installation

Install globally so you can run from the command line

```
npm install scarlet-init -g
```

## Purpose/Description

Provides a way to create a project scaffolding for [Scarlet](https://github.com/scarletjs/scarlet) using a cli.

Simply type scarlet-init in the directory you want to create the new plugin, answer the questions...and *boom* project setup with mocha, grunt, and ready for you to start building.

Inspired by `grunt-init` and `npm init`

## Example

Create a new plugin

```
$ cd ~/newPluginDir
$ scarlet-init
//--> answer all questions for your project; project name, license, description, keywords
//--> now your directory is setup and good to go

$ npm test
//--> tests are setup to work with mocha and run out of the box
```

List help 
```
$ scarlet-init -h
//--> lists the help for scarlet-init cli
```

## Templates

Currently there are two templates:
* grunt-mocha|default - Gives you a scarlet plugin project with: grunt, grunt-contrib-jshint, mocha ,scarlet, lib and test directories, and package.json
* full - Gives you a scarlet plugin project with: grunt, grunt-contrib-jshint, grunt-release, grunt-contrib-watch, mocha, scarlet, lib and test directories, and package.json
* lite - Gives you a scarlet plugin project with: index.js, package.json

To use a non-default template use the `-t` paramater

## Credits/Other Frameworks

* [init-package-json](https://github.com/isaacs/init-package-json) - Issacs npm to setup an npm
* [grunt-init](https://github.com/gruntjs/grunt-init) - The plugin scaffolding cli for grunt