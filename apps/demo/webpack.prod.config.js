//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const deps = require('./package.json').dependencies;
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/system/Index',
    mode: 'production',
    output: {
        path: path.join(__dirname, 'build_prod'),
        filename: 'host/[name].[chunkhash].js',
        publicPath: '/',
        assetModuleFilename: 'host/resources/[hash][ext][query]',
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        minimizer: [new TerserPlugin({ extractComments: false })],
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
                    presets: [['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.xml$/i,
                use: 'raw-loader',
            },
        ],
    },
    plugins: [
        new Dotenv({}),
        new webpack.DefinePlugin({
            'process.env.environment': JSON.stringify('dev'),
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/robots.txt', to: 'robots.txt' },
                { from: 'public/favicon.ico', to: 'favicon.ico' },
            ],
        }),
        /*new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      generateStatsFile: true,
      statsOptions: { source: false }
    })*/
        /*new CompressionPlugin()*/
    ],
};
