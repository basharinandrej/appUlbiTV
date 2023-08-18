import {Suspense, useCallback} from 'react'
import { Routes, Route } from 'react-router-dom'
import { mapRoutes } from '../../AppRoutes/index'
import {PageLoader} from '@widgets/index'
import {useSelector} from 'react-redux'
import {getIsAuth} from '@entities/user'
import {ProtectedRoute} from "../config/ProtectedRoute";
import {AppRouteProps} from "../types/index";

export const AppRoutes = () => {
    const isAuth = useSelector(getIsAuth)

    const renderRoutes = useCallback(({element, path, onlyAuth}: AppRouteProps, idx: number) => {
        if(!path) return
        return (
            <Route
                key={path + idx}
                path={path}
                element={
                    onlyAuth
                        ?  <ProtectedRoute isAuth={isAuth} children={element as JSX.Element}/>
                        : element
                }
            />
        )
    }, [isAuth])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(mapRoutes).map(renderRoutes)}
            </Routes>
        </Suspense>
    )
}