/*
 * @title MinifyHtml
 * @description A task to inject assets into and compress the main index.html
 * @example (cli) gulp minifyHtml
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import sharedPaths  from '../shared/paths.js';
import sharedEvents from '../shared/events.js';
import gulp         from 'gulp';
import htmlmin      from 'gulp-htmlmin';
import gulpif       from 'gulp-if';
import inject       from 'gulp-inject';
import plumber      from 'gulp-plumber';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {
    return gulp
        .src(sharedPaths.srcIndex)
        .pipe(plumber({errorHandler: sharedEvents.onError}))
        .pipe(inject(gulp.src(sharedPaths.stylesOutputFiles.concat(sharedPaths.scriptsOutputFiles), {
            read: false
        }), {
            ignorePath: sharedPaths.outputDir.replace('./',''),
            addRootSlash: false
        }))
        .pipe(gulpif(process.env.GULP_HTMLMIN === 'true', htmlmin({collapseWhitespace: true})))
        .pipe(gulp.dest(sharedPaths.outputDir));
};
