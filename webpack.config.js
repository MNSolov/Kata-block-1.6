const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const { SplitChunksPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCSSWebpackPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
console.log('isDev: ', isDev);

const optimization = () => {
    const config = {
        splitChunks: {
        chunks: 'all',
    }
    }

    if (!isDev) {
        config.minimizer = [
            new OptimizeCSSWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = additons => {
    const loaders = [MiniCssExtractPlugin.loader, 
        'css-loader', 'postcss-loader'];
        
    if (additons) {
        loaders.push(additons);
    }

    return loaders;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: ['@babel/polyfill', './js/index.js'],
    },
    output: {
        clean: true,
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            minify: {
                collapseWhitespace: !isDev,
            }
        }),
        //new CleanWebpackPlugin() 
        new MiniCssExtractPlugin({
            filename: filename('css'),
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: path.resolve(__dirname, 'src/img/expand.svg'), 
                to: path.resolve(__dirname, 'dist') },
              
              { from: path.resolve(__dirname, 'src/img/expand-reverse.svg'), 
                to: path.resolve(__dirname, 'dist') },
            ],
          }),
       
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                //use: ['file-loader'],
                type: 'asset/resource',
                
            },
            {
                test: /\.css$/,
                use: cssLoaders(),
            },
           /* {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            browsers:['ie >= 8', 'last 4 version']
                        })
                    ],
                    sourceMap: true
                }
            },*/
            {
                test: /\.less$/,
                use: cssLoaders('less-loader'), 
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader'),
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                type: 'asset/resource',
                //use: ['file-loader']
            },
            
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    }
};