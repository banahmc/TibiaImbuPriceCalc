var path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        publicPath: path.join(__dirname, 'public'),
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        hot: true,
        open: true
    }
});