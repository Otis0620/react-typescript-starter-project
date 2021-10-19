const developWebpackFile = require('./webpack.dev');
const productionWebpackFile = require('./webpack.prod');

const envFiles = {
  prod: productionWebpackFile,
  dev: developWebpackFile,
};

module.exports = {
  envFiles,
};
