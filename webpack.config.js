const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    return {
        mode: env.mode ?? 'development',
        entry: [
            path.resolve(__dirname, 'src', 'js', 'index.js'),
            path.resolve(__dirname, 'src', 'styles', 'style.scss'),
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash:8].js',
            clean: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash:8].css',
                chunkFilename: '[name].[contenthash:8].css',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        env.mode === 'development'
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [
                        env.mode === 'development'
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
            ],
        },
        devtool: 'inline-source-map',
        devServer: {
            port: env.port ?? 2025,
            open: true,
        },
    }
}
