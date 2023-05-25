import { Story } from '@storybook/react';
import { setFeatureFlags } from '@/shared/features';
import { getAllFeatureFlags } from '@/shared/features/lib/setGetFeatures';

export const ThemeDecorator = (StoryComponent: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });

    return (
        <div className="app_redesigned">
            <StoryComponent />
        </div>
    );
};
