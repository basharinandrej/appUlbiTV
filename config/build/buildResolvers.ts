import {ResolveOptions} from 'webpack'
import path from 'path';
import {BuildOptions} from './types/config'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    const {paths} = options

    return {
        extensions: ['.ts', '.js', '.tsx', 'json'],
        preferAbsolute: true,
        alias: {
            "@app": path.resolve(paths.src, 'app'),
            "@pages": path.resolve(paths.src, 'pages'),
            "@widgets": path.resolve(paths.src, 'widgets'),
            "@shared": path.resolve(paths.src, 'shared'),
            "@features": path.resolve(paths.src, 'features'),
        }
    }
}