import { Routes, Route } from 'react-router-dom'
import { mapRoutes } from '@app/providers/AppRoutes'
import {PageLoader} from '@widgets/PageLoader/ui/PageLoader'
import { Suspense, useMemo } from 'react'
import {useSelector} from 'react-redux'
import {getIsAuth} from '@entities/user'

export const AppRoutes = () => {
    const isAuth = useSelector(getIsAuth)

    const prepareRoutes = useMemo(() => Object.values(mapRoutes).filter((route) => {
        if(isAuth) {
            return route
        } else {
            return !route.onlyAuth
        }
    }), [isAuth])

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(prepareRoutes).map(({element, path}, idx) => {
                    if(!path) return
                    return <Route key={path+idx} path={path} element={element} />
                })}
            </Routes>
        </Suspense>
    )
}