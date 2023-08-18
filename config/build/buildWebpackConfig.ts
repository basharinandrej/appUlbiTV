import {Configuration} from 'webpack';
import {BuildOptions} from './types/config'
import {buildPlugins} from './buildPlugins'
import {buildLoaders} from './buildLoaders'
import {buildResolvers} from './buildResolvers'
import {buildDevServer} from './buildDevServer'

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const {paths, mode} = options

    const config: Configuration = {
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash:9].js',
            path: paths.output,
            clean: true,
            publicPath: '/'
        },
        mode,
        module: {
            rules: buildLoaders(options),
        },
        devServer: buildDevServer(options.port),
        resolve: buildResolvers(options),
        plugins: buildPlugins(options)
    };

    return config
}