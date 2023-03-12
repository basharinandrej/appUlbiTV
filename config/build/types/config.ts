
export type BuildMode = 'development' | 'production'


export interface BuildEnv {
    mode: BuildMode
    port: number
}

export interface BuildPaths {
    entry: string,
    output: string,
    html: string
    src: string
}

export interface BuildOptions {
    port: number
    paths: BuildPaths
    mode: BuildMode
    isDev: boolean
}