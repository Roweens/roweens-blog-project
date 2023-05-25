import { Story } from '@storybook/react';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { setFeatureFlags } from '@/shared/features';

export const FeatureFlagsDecorator =
    (features: FeatureFlags) => (StoryComponent: Story) => {
        setFeatureFlags(features);
        return <StoryComponent />;
    };
