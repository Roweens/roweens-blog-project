import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Navbar } from './Navbar';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';

const options = {
    initialState: {
        user: {
            authData: {
                id: 1,
                username: 'admin',
            },
        },
    },
};

describe('widgets/Navbar', () => {
    test('No auth login button renders', async () => {
        ComponentRender(<Navbar />);
        expect(screen.getByTestId('Navbar.loginBtn')).toBeInTheDocument();
    });
    test('Auth user create article button renders', async () => {
        ComponentRender(<Navbar />, options);
        expect(
            screen.getByTestId('Navbar.createArticleBtn'),
        ).toBeInTheDocument();
    });
    test('Login modal opens', async () => {
        ComponentRender(<Navbar />);
        await userEvent.click(screen.getByTestId('Navbar.loginBtn'));
        expect(screen.getByTestId('LoginModal')).toBeInTheDocument();
    });
    test('Notification buttons works', async () => {
        ComponentRender(<Navbar />, options);
        await userEvent.click(screen.getByTestId('NotificationButton.trigger'));
        expect(screen.getByTestId('NotificationList')).toBeInTheDocument();
    });
});
