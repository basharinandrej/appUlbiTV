import {Navigate} from "react-router-dom";
import {RoutePaths} from "./appRoutesConfig";
import {useSelector} from "react-redux";
import {getIsAuth, getIsInitUser} from "@entities/user";

export const ProtectedRoute = ({children}: ProtectedRouteProps): JSX.Element => {
    const isAuth = useSelector(getIsAuth)
    const isInitUser = useSelector(getIsInitUser)

    if(!isInitUser) return children

    if(!isAuth) {
        return <Navigate to={RoutePaths.home} replace />
    }

    return children
}

interface ProtectedRouteProps {
    children: JSX.Element
}