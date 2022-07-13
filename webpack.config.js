const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { LoaderOptionsPlugin } = require('webpack');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: {
        index: './src/js/index.js',
        city: './src/js/city.js',
        showcity: './src/js/showcity.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'imgs/[hash][ext][query]',
        clean: true,
    },
    // optimization: {
    //     minimizer: [
    //       new CssMinimizerPlugin()
    //     ],
    // },
    module: { rules:[
            {
            test: /\.html$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'html-loader',
                options: { minimize: true },
              }]
            },
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },          
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties', 
                                        '@babel/plugin-transform-runtime'],
                    }
                },
            }

    ]},
    plugins: [
        new MiniCssExtractPlugin({filename:"[name].[contenthash].css"}),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer:{
        port: 5000,
        open: {
            app: {
                name: 'firefox'
            }
        },
        static: path.resolve(__dirname, 'dist')
    },

    mode: "production"
}