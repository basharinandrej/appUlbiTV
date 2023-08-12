import { RouteProps } from 'react-router-dom'
import {PageHome, PageAbout, PageProfile, Page404} from '@pages/index'

import {Routes} from '../types/index'


const RoutePaths:Record<Routes,string> = {
    [Routes.HOME]: '/',
    [Routes.ABOUT]: '/about',
    [Routes.PROFILE]: '/profile',
    [Routes.NOT_FOUND_PAGE]: '*'
}

export const mapRoutes: Record<Routes, RouteProps> = {
    [Routes.HOME]: {
        path: RoutePaths.home,
        element: <PageHome />
    },
    [Routes.ABOUT]: {
        path: RoutePaths.about,
        element: <PageAbout />
    },
    [Routes.PROFILE]: {
        path: RoutePaths.profile,
        element: <PageProfile />
    },

    /*not found page - всегда последний в мапе*/
    [Routes.NOT_FOUND_PAGE]: {
        path: RoutePaths.notFoundPage,
        element: <Page404 />
    }
}