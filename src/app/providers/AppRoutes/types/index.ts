import {RouteProps} from "react-router-dom";

export const enum Routes {
    HOME = 'home',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND_PAGE = 'notFoundPage'
}

export interface AppRouteProps extends RouteProps{
    onlyAuth: boolean
}