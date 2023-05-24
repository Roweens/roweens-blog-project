import { LOCAL_STORAGE_DESIGN_KEY } from '@/shared/const/localstorage';
import { FeatureFlags } from '../../types/featureFlags';

const defaultFeatures: FeatureFlags = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_DESIGN_KEY) === 'new',
};

let featureFlags: FeatureFlags = {
    ...defaultFeatures,
};

if (__PROJECT__ === 'storybook' || __PROJECT__ === 'jest') {
    featureFlags = {
        isProfileRatingEnabled: true,
        isArticleRatingEnabled: true,
        isAppRedesigned: false,
    };
}

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
    return featureFlags[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}
