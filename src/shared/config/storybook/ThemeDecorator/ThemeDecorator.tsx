import { Story } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
