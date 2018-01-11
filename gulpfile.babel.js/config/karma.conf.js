/*
 * @title Karma
 * @description Karma configuration file
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

var sharedPaths = require('../shared/paths.js');
var path = require('path');

import webpackConfig from './webpack.conf';

/*********************************************************************************
 2. TASK
 *********************************************************************************/

module.exports = config => {

    let reporters = ['spec'];
    const basePath = `${__dirname}/../..`;
    const testFiles = `${sharedPaths.scriptsSrcDir}/**/*.spec.js`;

    config.set({
        singleRun: true,
        basePath: basePath,
        frameworks: ['jasmine'],
        files: [testFiles],
        browsers: ['Chrome'],
        failOnEmptyTestSuite: false,
        preprocessors: {
            [testFiles]: ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: {
                colors: true
            },
            noInfo: true
        },
        reporters: reporters
    });
};
