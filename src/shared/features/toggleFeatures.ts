import { FeatureFlags } from '../types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeatureOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>({
    name,
    off,
    on,
}: ToggleFeatureOptions<T>): T {
    if (getFeatureFlag(name)) {
        return on();
    }

    return off();
}
