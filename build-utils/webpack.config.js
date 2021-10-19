const { merge } = require('webpack-merge');
const { envFiles } = require('./config');
const commonConfig = require('./webpack.common');

/**
 * Main webpack function used to merge dev and prod together.
 *
 * @param {string} env - Webpack environment variable.
 */
module.exports = ({ env }) => merge(commonConfig, envFiles[env]);
