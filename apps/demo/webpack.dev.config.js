const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: './src/system/Index',
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        static: './',
        compress: true,
        port: 5001,
        hot: true,
        historyApiFallback: true,
        open: true,
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[chunkhash].js',
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|woff)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.xml$/i,
                use: 'raw-loader',
            },
        ],
    },
    plugins: [
        // new Dotenv({}),
        // new webpack.DefinePlugin({
        //     'process.env.environment': JSON.stringify('dev'),
        // }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                build: true,
                memoryLimit: 4096,
            },
        }),
    ],
};
