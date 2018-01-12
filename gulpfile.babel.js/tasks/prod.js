/*
 * @title Prod
 * @description A bundle task that generates production ready code
 * @example (cli) gulp prod
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import runSequence from 'run-sequence';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

    process.env.GULP_IGNORE_ERRORS = 'false';
    process.env.GULP_CSSO = 'true';
    process.env.GULP_HTMLMIN = 'true';
    process.env.GULP_UGLIFY = 'true';

    runSequence(
        'clean',
        'webpack',
        'sassLint',
        'styles',
        /*['minifyHtml', 'imagemin'],*/
        'imagemin',
        'move'
    );

};
