/*
 * @title Sass Linter
 * @description A task to lint sass(scss) stylesheets
 * @example (cli) gulp sassLint
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths  from '../shared/paths.js';
import gulp         from 'gulp';
import plumber      from 'gulp-plumber';
import sassLint 	from 'gulp-sass-lint';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
    return gulp
        .src(sharedPaths.stylesAllSrcFiles)
        .pipe(sassLint({
			configFile: '../config/.sass-lint.yml'
    	}))
        .pipe(sassLint.format())
    	.pipe(sassLint.failOnError());
};