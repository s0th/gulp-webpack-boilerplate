/*
 * @title Webpack.Karma
 * @description Webpack configuration file to use with Karma
 */


/*********************************************************************************
 1. DEPENDENCIES
 *********************************************************************************/

import webpack      from 'webpack';
import parts        from './webpack.parts.js';
import merge        from 'webpack-merge';


/*********************************************************************************
 2. EXPORTS
 *********************************************************************************/

export default (() => {

    let config = merge([
        parts.base(),
        parts.sourceMapIstanbulInstrumenterLoader()
    ]);

    config.plugins.push(new webpack.optimize.CommonsChunkPlugin(parts.commonsChunkPluginConf()));
    config.plugins.push(new webpack.SourceMapDevToolPlugin(parts.SourceMapDevToolPluginConf()));    

    return config;

})();
