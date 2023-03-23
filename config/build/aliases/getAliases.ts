import path from "path";

export const getAliases = (pathSrc: string) => {
    return {
        "@app": path.resolve(pathSrc, 'app'),
        "@pages": path.resolve(pathSrc, 'pages'),
        "@widgets": path.resolve(pathSrc, 'widgets'),
        "@shared": path.resolve(pathSrc, 'shared'),
        "@features": path.resolve(pathSrc, 'features'),
    }
}