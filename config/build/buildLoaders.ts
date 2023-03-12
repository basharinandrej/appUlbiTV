import {RuleSetRule} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from './types/config'


export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const {isDev} = options

    const styleLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: isDev ? '[name]-[local]__[hash]' : '[hash:base64]',
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            },
          },
        },
        "sass-loader",
      ],
    }
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