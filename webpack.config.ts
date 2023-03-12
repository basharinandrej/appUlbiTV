import path from 'path';
import {buildWebpackConfig} from './config/build/buildWebpackConfig'
import {BuildPaths, BuildEnv, BuildOptions} from './config/build/types/config'


export default (env: BuildEnv) => {
    const mode = env.mode || 'development'
    const PORT = env.port || 3000

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

    const options: BuildOptions = {
        paths,
        port: PORT,
        mode,
        isDev: mode === 'development'
    }
    
    return buildWebpackConfig(options)
}
