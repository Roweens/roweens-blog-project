import { FC, Suspense, lazy } from 'react';
import { ProfileRatingProps } from './ProfileRating';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export const ProfileRatingLazy = lazy<FC<ProfileRatingProps>>(
    () => import('./ProfileRating'),
);

export const ProfileRatingAsync = (props: ProfileRatingProps) => (
    <Suspense fallback={<Skeleton width="100%" height={120} />}>
        <ProfileRatingLazy {...props} />
    </Suspense>
);
