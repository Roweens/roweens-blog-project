import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { ThemeSwitcher } from './ThemeSwitcher';

describe('features/ThemeSwitcher', () => {
    test('Toggle theme', async () => {
        ComponentRender(<ThemeSwitcher />);
        expect(screen.getByTestId('ThemeSwitcher')).toBeInTheDocument();
        expect(document.querySelector('body')).toHaveClass('app_light_theme');
        await userEvent.click(screen.getByTestId('ThemeSwitcher'));
        expect(document.querySelector('body')).toHaveClass('app_red_theme');
        await userEvent.click(screen.getByTestId('ThemeSwitcher'));
        expect(document.querySelector('body')).toHaveClass('app_dark_theme');
        await userEvent.click(screen.getByTestId('ThemeSwitcher'));
        expect(document.querySelector('body')).toHaveClass('app_light_theme');
    });
});
