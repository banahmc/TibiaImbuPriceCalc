const path = require('path');

module.exports = {
    entry: {
        polyfill: 'babel-polyfill',
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                options: {
                    presets: [
                        "@babel/preset-env",
                        '@babel/react',
                        {
                            plugins: [
                              '@babel/plugin-proposal-class-properties',
                              '@babel/plugin-proposal-object-rest-spread'
                            ]
                        },
                    ],
                    plugins: ["emotion"]
                }
            },
            {
                test: /\.js$/,
                loader: "source-map-loader",
                enforce: "pre"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                type: 'javascript/auto',
                test: /\.json$/,
                use: [ 'file-loader' ],
                include: /\.\/config/
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/i,
                    name: "vendors"
                }
            }
        }
    },
    stats: { colors: true }
};