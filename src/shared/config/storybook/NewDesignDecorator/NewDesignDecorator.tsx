import { Story } from '@storybook/react';
import { setFeatureFlags } from '@/shared/features';
import { getAllFeatureFlags } from '@/shared/features/lib/setGetFeatures';

export const NewDesignDecorator = (StoryComponent: Story) => {
    setFeatureFlags({ ...getAllFeatureFlags(), isAppRedesigned: true });

    return (
        <div className="app_redesigned">
            <StoryComponent />
        </div>
    );
};
