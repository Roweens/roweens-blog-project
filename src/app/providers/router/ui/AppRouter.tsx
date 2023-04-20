import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, RouteConfig } from '@/shared/config/routeConfig/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { RoleChecker } from './RoleChecker';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth><RoleChecker requiredRoles={route.roles}>{element}</RoleChecker></RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(RouteConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
