import webpack from "webpack";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export default ({ config }: { config: webpack.Configuration}) => {

    const paths = path.resolve(__dirname, '..', 'src')
    const isDev = true

    config.resolve.alias = {
        ...config.resolve.alias,
        "@app": path.resolve(paths, 'app'),
        "@pages": path.resolve(paths, 'pages'),
        "@widgets": path.resolve(paths, 'widgets'),
        "@shared": path.resolve(paths, 'shared'),
        "@features": path.resolve(paths, 'features'),
    }

    config.module.rules = [
        ...config.module.rules,
        {
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
    ]
    console.log('>>>>> paths', paths);
    console.log('>>>> config', config);

    return config
}