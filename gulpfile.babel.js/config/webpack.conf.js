/*
 * @title Webpack
 * @description Webpack configuration file
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import webpack      from 'webpack';
import parts        from './webpack.parts.js';


/*********************************************************************************
 2. EXPORTS
 *********************************************************************************/

export default (() => {

    let config = parts.base();

    if (process.env.GULP_UGLIFY === 'true') {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin(parts.UglifyJsPluginConf()));
    }

    // Development extras
    if (process.env.GULP_WEBPACK_DEV === 'true') {
        config.plugins.push(new webpack.optimize.CommonsChunkPlugin(parts.commonsChunkPluginConf()));
        config.plugins.push(new webpack.SourceMapDevToolPlugin(parts.SourceMapDevToolPluginConf()));
    }

    return config;

})();
