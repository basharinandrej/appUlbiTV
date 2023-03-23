import {RuleSetRule} from 'webpack';
import {BuildOptions} from './types/config'
import {getStyleLoader} from "./loaders/getStyleLoader";


export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const {isDev} = options

    const styleLoader = getStyleLoader(isDev)
    const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }
      
    return [
      styleLoader,
      tsLoader
    ]
}