import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, {WebpackPluginInstance} from 'webpack';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {BuildOptions} from './types/config';


export const buildPlugins = (options: BuildOptions): WebpackPluginInstance[] => {
    const {paths, isDev} = options

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerPort: 4201
        })
    ]
}