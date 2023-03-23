import {ResolveOptions} from 'webpack'
import {BuildOptions} from './types/config'
import {getAliases} from "./aliases/getAliases";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    const {paths} = options

    return {
        extensions: ['.ts', '.js', '.tsx', 'json'],
        preferAbsolute: true,
        alias: getAliases(paths.src)
    }
}