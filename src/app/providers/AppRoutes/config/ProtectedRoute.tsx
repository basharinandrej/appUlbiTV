import {Navigate} from "react-router-dom";
import {RoutePaths} from "./appRoutesConfig";

export const ProtectedRoute = ({children, isAuth}: ProtectedRouteProps): JSX.Element => {

    if(!isAuth) {
        return <Navigate to={RoutePaths.home} replace />
    }

    return children
}

interface ProtectedRouteProps {
    isAuth: boolean,
    children: JSX.Element
}