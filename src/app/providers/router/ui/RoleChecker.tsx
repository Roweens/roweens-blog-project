import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { UserRole, selectUserRoles } from '@/entities/User';
import { getRouteForbidden } from '@/shared/const/router';

interface RoleCheckerProps {
  children: JSX.Element,
  requiredRoles?: UserRole[]
}

export function RoleChecker(props: RoleCheckerProps) {
    const { children, requiredRoles } = props;

    const location = useLocation();
    const userRoles = useSelector(selectUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!requiredRoles) {
            return true;
        }

        return requiredRoles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [requiredRoles, userRoles]);

    if (!hasRequiredRoles) {
        return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
    }

    return children;
}
