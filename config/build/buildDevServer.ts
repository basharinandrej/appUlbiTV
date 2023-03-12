import {Configuration as DevServerConfiguration} from 'webpack-dev-server'

export const buildDevServer = (PORT: number): DevServerConfiguration => {
    return {
        port: PORT,
        open: true,
        historyApiFallback: true
    }
}