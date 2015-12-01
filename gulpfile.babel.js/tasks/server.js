/*
 * @title Server
 * @description A task to initialise a local server
 * @example (cli) gulp server
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import browserSync from 'browser-sync';


/*********************************************************************************
 2. TASK
 *********************************************************************************/

export default () => {

  let bs = browserSync.create();

  return bs.init([`${sharedPaths.outputDir}/**/*.{html,css,js}`], {
    server: {
      baseDir: sharedPaths.outputDir
    },
    open: true,
    notify: false,
    scrollProportionally: true
  });

};