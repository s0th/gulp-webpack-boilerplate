/*
 * @title Karma
 * @description Karma configuration file
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var sharedPaths = require('../shared/paths.js');
var path = require('path');

import webpackKarmaConfig from './webpack.karma.conf';

/*********************************************************************************
 2. TASK
 *********************************************************************************/

module.exports = config => {

    let reporters = ['spec', 'kjhtml', 'karma-remap-istanbul'];
    const basePath = `${__dirname}/../..`;
    const testFiles = `${sharedPaths.scriptsSrcDir}/**/*.spec.ts`;
    
    const singleRun = process.env.GULP_WEBPACK_DEV === 'true' ? false : true;
    
    const filesDefault = [ testFiles ];    
    const filesDev = [ `${sharedPaths.scriptsOutputDir}/libs.js`, testFiles ];    
    // include the libs commonschunk in filesDev to avoid "ReferenceError: Can't find variable: webpackJsonp", 
    // webpack should run before karma, so libs are generated when karma runs (in runSequence order)
    // the libs needs to precede testFiles in the array, so the testfiles have access to the webpack bootstrapper

    const files = process.env.GULP_WEBPACK_DEV === 'true' ? filesDev : filesDefault;


    config.set({
        singleRun: singleRun,
        basePath: basePath,
        frameworks: ['jasmine'],
        files: files,
        browsers: ['Chrome'],
        failOnEmptyTestSuite: false,
        preprocessors: {
            [testFiles] : ['webpack', 'sourcemap']
        },
        webpack: webpackKarmaConfig,
        webpackMiddleware: {
            stats: {
                colors: true
            },
            noInfo: true
        },
        reporters: reporters,
        mime: {
            'text/x-typescript': ['ts']
        },
        remapIstanbulReporter: {
          reports: {
            html: 'dist/coverage',
            'text-summary': null
          }
        }        
    });
};
