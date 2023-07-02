import webpack from "webpack";
import path from "path";
import {getStyleLoader} from "../build/loaders/getStyleLoader";
import {getAliases} from "../build/aliases/getAliases";


export default ({ config }: { config: webpack.Configuration}) => {

    const pathsSrc = path.resolve(__dirname, '..', '..', 'src')
    const isDev = true

    config.resolve.alias = {
        ...config.resolve.alias,
        ...getAliases(pathsSrc)
    }

    config.module.rules.push(getStyleLoader(isDev))

    const plugins = [
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        })
    ]
    config.plugins.push(...plugins)

    return config
}