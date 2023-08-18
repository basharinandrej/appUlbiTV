import {PageHome, PageAbout, PageProfile, Page404} from '@pages/index'

import {AppRouteProps, Routes} from '../types/index'


export const RoutePaths:Record<Routes,string> = {
    [Routes.HOME]: '/',
    [Routes.ABOUT]: '/about',
    [Routes.PROFILE]: '/profile',
    [Routes.NOT_FOUND_PAGE]: '*'
}

export const mapRoutes: Record<Routes, AppRouteProps> = {
    [Routes.HOME]: {
        path: RoutePaths.home,
        element: <PageHome />,
        onlyAuth: false
    },
    [Routes.ABOUT]: {
        path: RoutePaths.about,
        element: <PageAbout />,
        onlyAuth: false
    },
    [Routes.PROFILE]: {
        path: RoutePaths.profile,
        element: <PageProfile />,
        onlyAuth: true
    },

    /*not found page - всегда последний в мапе*/
    [Routes.NOT_FOUND_PAGE]: {
        path: RoutePaths.notFoundPage,
        element: <Page404 />,
        onlyAuth: false
    }
}