import { FeatureFlags } from '../types/featureFlags';

let featureFlags: FeatureFlags;

if (__PROJECT__ === 'storybook' || __PROJECT__ === 'jest') {
    featureFlags = {
        isProfileRatingEnabled: true,
        isArticleRatingEnabled: true,
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
