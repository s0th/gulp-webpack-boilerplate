import sharedPaths from '../shared/paths.js';
import path        from 'path';

const vendorChunkFilename = 'libs';

const base = () => {
	return {
	    output: {
	        filename: '[name].js'
	    },
	    resolve: {
	        extensions: ['.ts', '.js']
	    },        
	    module: {
	        rules: [
	            {
	                test: /\.ts$/,  
	                    loader: 'tslint-loader',
	                    options: {
	                        enforce: 'pre',
	                        project: 'tsconfig.json',
	                        configFile: 'tslint.json',
	                        emitErrors: true,
	                        failOnHint: false,
	                        typeCheck: true                        
	                    }                                    
	            },
	            {
	                test: /\.ts$/,
	                loader: 'ts-loader',
	                exclude: /node_modules/
	            }
	        ]            
	    },
	    plugins: []		
	};
};

const sourceMapIstanbulInstrumenterLoader = () => {
	return {        
		module: {
			rules: [
				{
					test: /\.ts$/,
					exclude: /(node_modules|\.spec\.ts$)/,
					loader: 'sourcemap-istanbul-instrumenter-loader?force-sourcemap=true',
					enforce: 'post'
				}
			]            
		}
	};
};

const UglifyJsPluginConf = () => {
	return {
		sourceMap: false,
		mangle: true,
		comments: false
    };
};

const commonsChunkPluginConf = () => {
	return {
		name: `${vendorChunkFilename}`,
		minChunks: function (module, count) {
		    return module.resource && module.resource.indexOf(path.resolve(sharedPaths.srcDir)) === -1;
		}		
	};
};

const SourceMapDevToolPluginConf = () => {
	return {
		filename: null,
		test: /\.(ts|js)($|\?)/i,
		exclude: `${vendorChunkFilename}.js`
	};
};

export default {
	base, 
	sourceMapIstanbulInstrumenterLoader,
	UglifyJsPluginConf, 
	commonsChunkPluginConf, 
	SourceMapDevToolPluginConf
};
