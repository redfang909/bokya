const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {        
        main:['src/app/Main.tsx']
    },   
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.html?$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(jpg|png)$/,        
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',                            
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ]
            },         
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
       // new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin([
            {from:'src/images',to:'images'} 
        ]),   
    ],
    resolve: {
        modules: [
            path.join(__dirname),
            'node_modules'
        ],
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
    }
};