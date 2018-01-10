<p align="center">
    <img width="141" src="http://antonsamper.github.io/gulp-webpack-boilerplate/images/logo-gulp-webpack-pink-fed4617544.svg" />
</p>
#gulp.js + webpack boilerplate for single page apps
A clean and simple front-end ES6 boilerplate for single page applications using gulp.js and webpack.

[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/antonsamper/gulp-webpack-boilerplate/blob/master/LICENSE)
[![Travis](https://img.shields.io/travis/antonsamper/gulp-webpack-boilerplate.svg)](https://travis-ci.org/antonsamper/gulp-webpack-boilerplate)
[![devDependency Status](https://david-dm.org/antonsamper/gulp-webpack-boilerplate/dev-status.svg)](https://david-dm.org/antonsamper/gulp-webpack-boilerplate#info=devDependencies)

## Boilerplate used by
<p>
  <a href="http://signagerocket.com/">
    <img height="100" width="100" src="https://raw.githubusercontent.com/antonsamper/gulp-webpack-boilerplate/master/src/images/logo-signagerocket.png">
  </a>
  <a href="http://www.nowtv.com/">
    <img height="100" width="100" src="https://raw.githubusercontent.com/antonsamper/gulp-webpack-boilerplate/master/src/images/logo-nowtv.png">
  </a>
</p>

## Installation and Usage
To start using the boilerplate, first install all the dependencies and then run one of the gulp tasks, for example:

 ```
 $ npm i
 $ npm start
 ```

If npm install fails, you might need to  

- install [Python 2](https://www.python.org/downloads/release/python-2714/ "Python 2 installers")
- and [Windows 8.1 SDK](https://developer.microsoft.com/en-us/windows/downloads/windows-8-1-sdk "Windows 8.1 SDK")
- change your npm configuration to match your VisualStudio version
`npm config set msvs_version 2015 --global`
- you will also need to add the Python27 installation folder `c:\Python27` to your `PATH` environment variable 
- if you are missing the cl.exe during compilation, change your visual studio installer to add the following: 
[Common Tools For Visual Studio C++ 2015](http://prntscr.com/hyht76) or get the 
[standalone c/c++ compiler](https://blogs.msdn.microsoft.com/vcblog/2015/11/02/announcing-visual-c-build-tools-2015-standalone-c-tools-for-build-environments/)
- then add `c:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\bin` to your `PATH` environment variable

## Npm Tasks

###### Bundle Tasks

Task Name         | Description
----------------- | ---------------------------------------------------------------------
`npm start`       | Generate a development environment with watch and BrowserSync
`npm run dev`     | Same as `npm start`
`npm run prod`    | Compile production code and run unit tests
`npm test`        | Run unit tests

## Gulp Tasks

###### Bundle Tasks

Task Name         | Description
----------------- | ---------------------------------------------------------------------
`gulp`            | Generate a development environment with watch and browsersync
`gulp prod`       | Compile production code and run unit tests

###### Individual Tasks

Task Name         | Description
----------------- | ----------------------------------------------------
`gulp clean`      | Delete the output directory
`gulp svg`        | Combine svgs into a <symbol> element with paths
`gulp imagemin`   | Minify images and svg files
`gulp karma`      | Run unit tests
~~`gulp minifyHtml`~~ | ~~Inject assets into and compress the main index.html~~
`gulp move`       | Move source files to output directory
`gulp server`     | Initialise a local server
`gulp styles`     | Compile Sass to CSS
`gulp webpack`    | Bundle js files


## File Structure
The default working directory for development is `src/`. This directory contains all the styles, scripts, fonts and 
images used to create the front-end of the website.

```
dist/
|- x.x.x/
src/
|- fonts/
	|- examplefont.eot
	|- examplefont.svg
	|- examplefont.ttf
	|- examplefont.woff
|- images/
	|- icons/
        |- icon01.svg
        |- icon02.svg
        |- icon03.svg
|- js/
	|- components/
		|- helloWorld/
			|- helloWorld.js
			|- helloWorld.spec.js
	|- app.js
|- sass/
	|- components/
	|- _variables.scss
	|- main.scss
|- index.html 
```

### Fonts
The `src/fonts/` folder should contain the self hosted fonts for the site. All the fonts directly inside this folder 
will be copied to the `dist/x.x.x/fonts/` folder automatically.

### Icons
The `src/images/icons/` folder should contain all the svg icons that should be combined to then be injected into 
the page. Have a look at the following links to understand the technique adopted by the boilerplate to make use of 
svg icons:

* https://css-tricks.com/icon-fonts-vs-svg/
* https://sarasoueidan.com/blog/icon-fonts-to-svg/
* https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/

(The `<symbol>` element is generated and injected as part of the `minifyHtml` task)

### Images
All images should be placed inside the `src/images/` folder. This is for consistency as opposed to a limitation 
enforced by the `imagemin` task as this task will look for and minify all images inside the `src/` folder that have 
any of the following extensions: `.jpg` `.png` `.gif` `.svg`

### JS
All the scripts should be placed inside the `src/js/` folder. These files will all be linted. The current setup assumes 
`app.js` is the main bundle/manifest file (this is referenced in `paths.js`) and a component based approach for 
features/functionality so that everything is inside of its own folder - this can include 
tests, templates and specific styles if needed. 
For example:

```
|- js/
    |- app.js
	|- components/
		|- helloWorld/
			|- helloWorld.js
			|- helloWorld.spec.js
			|- helloWorld.html
			|- helloWorld.css
```

### Scss (SASS)
This workflow uses, although it's not restricted to, the `scss` format for Sass. All `scss` files should be placed in 
the `src/sass/` folder. The styles manifest is `main.scss`.

### Versioning
The production task outputs versioned folders based on the version in your `package.json` file. For example, if your 
`package.json` version is `1.2.3` and you then run `npm run prod`, the following will be produced:
```
dist/
|- 1.2.3/
	|- index.html
    |- css/
    |- fonts/
    |- images/
    |- js/
```

### Releases
The three main functions of `release-it` have been mapped as custom npm scripts. When creating a release all you have 
to do is run any of the following:
 *  `npm run release-patch`
 *  `npm run release-minor`
 *  `npm run release-major`
