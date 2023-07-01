import {FC, lazy} from "react";

const factory = (): Promise<{default: FC}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('./FormAuth'));
        }, 1000)
    })
}

export default lazy(factory)