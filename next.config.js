const { LoaderOptionsPlugin } = require('webpack');
const compose = require('next-compose');
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

global.fetch = require('isomorphic-unfetch');

const sass = {
	cssModules: true,
	cssLoaderOptions: {
		importLoaders: 1,
		localIdentName: '[name]-[local]-[hash:base64:5]',
	},
};

const css = {
    cssModules: false,
    cssLoaderOptions: {
    	importLoaders: 1,
    	localIdentName: '[local]',
    },
};

// const isProd = process.env.NODE_ENV === 'production';

module.exports = Object.assign(
	compose([
		[withSass, sass],
		[withCSS, css],
		{
			webpack: (config, options) => {

				//plugins
				config.plugins.push(new LodashModuleReplacementPlugin({
					shorthands: true,
				}));

				//modules
				config.module.rules.unshift({
					test: /\.scss$/,
					use: ['classnames-loader'],
				});

				return config;
			}
		}
	]),
	{
		target: 'serverless'
	}
);
