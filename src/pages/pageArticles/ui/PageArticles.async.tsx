
import { lazy } from 'react'
export const PageArticlesAsync =  lazy(() => new Promise((resolve) => {
    //@ts-ignore
    setTimeout(() => resolve(import('./PageArticles')), 100)
}))