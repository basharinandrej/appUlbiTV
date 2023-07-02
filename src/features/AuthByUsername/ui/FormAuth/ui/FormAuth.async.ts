import {FC, lazy} from "react";

const factory = (): Promise<{default: FC}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('./FormAuth'));
        }, 500)
    })
}

export default lazy(factory)