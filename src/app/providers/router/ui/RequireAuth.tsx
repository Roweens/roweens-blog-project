import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectUserAuthData } from '@/entities/User';
import { getRouteMain } from '@/shared/const/router';

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useSelector(selectUserAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
    }

    return children;
}
