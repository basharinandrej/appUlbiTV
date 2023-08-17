import {FC, lazy} from 'react'
import {FormAuthProps} from './FormAuth'

const factory = (): Promise<{default: FC<FormAuthProps>}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(import('./FormAuth'))
        }, 500)
    })
}

export default lazy(factory)