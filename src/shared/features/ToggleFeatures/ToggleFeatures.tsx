import { ReactElement } from 'react';
import { FeatureFlags } from '../../types/featureFlags';
import { getFeatureFlag } from '../setGetFeatures';

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeatures = (props: ToggleFeaturesProps) => {
    const { off, on, feature } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
