
import { lazy } from 'react'
export default lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./PageAbout')), 1000)
})) 