import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWIthTranslation';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
    test('Render test', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        renderWithTranslation(<SidebarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Toggle test', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        renderWithTranslation(<SidebarWithTranslation />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
