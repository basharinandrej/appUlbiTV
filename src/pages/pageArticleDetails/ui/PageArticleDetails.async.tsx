
import { lazy } from 'react'
export const PageArticleDetailsAsync =  lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./PageArticleDetails')), 100)
}))