const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV = process.env.APP_ENV;
const isTest = ENV === 'test';
const isProd = ENV === 'prod';
function setDevTool() {
    if(isTest) {
        return 'inline-source-map';
    } else if(isProd) {
        return 'source-map';
    } else {
        return 'eval-source-map';
    }
}

module.exports = {
    entry: __dirname + "/src/app/index.js",
    output: {
        path: __dirname + "/public",
        filename: 'bundle.js',
        publicPath: '/',
        pathinfo: true
    },
    mode: 'development',
    devtool: setDevTool(),
    module: {
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'es2015'],
                        plugins: ['babel-plugin-transform-es2015-destructuring', 'transform-object-rest-spread']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'fonts/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'fonts/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'fonts/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'images/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'images/[name].[hash].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/public/index.html",
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: './src/public', //source of static assets
        port: 9001, //port to run devserver,
        open: true
    }
}