const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const mode = isProd ? 'production' : 'development';

module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Portfolio',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            filename: 'index.html',
            template: './src/index.ejs'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        stats: 'errors-only',
        open: true
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        // options: {
                        //     publicPath: './dist'
                        // }
                    },
                    "css-loader",
                    "sass-loader"
                ]
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"  
            },
            { 
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader?name=[name].[ext]&outputPath=img/"  
            }
        ]
    }
}