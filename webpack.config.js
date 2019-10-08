const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
    const isProduction = env === 'production'

    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'index_bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|jp(e*)g|svg)$/,  
                    use: [{
                        loader: 'url-loader',
                        options: { 
                            limit: 50000,
                            name: 'images/[hash]-[name].[ext]'
                        } 
                    }]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            })
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}