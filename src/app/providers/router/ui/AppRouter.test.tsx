import { screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import {
    getRouteAbout,
    getRouteAdmin,
    getRouteProfile,
} from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/AppRoute', () => {
    test('Page renders', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });

    test('Page nout found', async () => {
        ComponentRender(<AppRouter />, {
            route: '/ewr12312',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect not authorized', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('Auth user access to private page', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _mounted: true,
                    authData: { id: '1', username: 'Cognus' },
                },
            },
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });

    test('Forbidden page (no role)', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _mounted: true, authData: {} },
            },
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });

    test('Admin page access with role', async () => {
        ComponentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: { _mounted: true, authData: { roles: [UserRole.ADMIN] } },
            },
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
