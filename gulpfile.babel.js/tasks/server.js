/*
 * @title Server
 * @description A task to initialise a local server
 * @example (cli) gulp server
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import browserSync from 'browser-sync';
import sharedPaths from '../shared/paths.js';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

    let bs = browserSync.create();

    return bs.init(sharedPaths.outputFiles, {
        server: {
            baseDir: sharedPaths.outputDir
        },
        port: 8080,
        reloadDebounce: 500,
        open: true,
        notify: false,
        scrollProportionally: true
    });

};
