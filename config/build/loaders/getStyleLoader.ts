import MiniCssExtractPlugin from "mini-css-extract-plugin";


export const getStyleLoader = (isDev: boolean) => {
    return {
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
}