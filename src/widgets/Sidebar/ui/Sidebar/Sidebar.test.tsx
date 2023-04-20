import { fireEvent, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { ComponentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('Render test', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        ComponentRender(<SidebarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Toggle test', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        ComponentRender(<SidebarWithTranslation />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
