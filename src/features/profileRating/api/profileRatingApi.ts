import { Rating } from '@/entities/Rating';
import { rtkApi } from '@/shared/api/rtkApi';

interface getProfileUserRatingArgs {
    userId: string;
    profileId: string;
}

interface getProfileRatingArgs {
    profileId: string;
}

interface rateProfileArgs {
    userId: string;
    profileId: string;
    rating: number;
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getProfileUserRating: build.query<Rating[], getProfileUserRatingArgs>({
            query: ({ profileId, userId }) => ({
                url: '/profile-ratings',
                params: {
                    userId,
                    profileId,
                },
            }),
        }),
        getProfileRating: build.query<Rating[], getProfileRatingArgs>({
            query: ({ profileId }) => ({
                url: '/profile-ratings',
                params: {
                    profileId,
                },
            }),
        }),
        rateProfile: build.mutation<void, rateProfileArgs>({
            query: (arg) => ({
                url: '/profile-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetProfileUserRating = articleRatingApi.useGetProfileUserRatingQuery;
export const useGetProfileRating = articleRatingApi.useGetProfileRatingQuery;
export const useRateProfile = articleRatingApi.useRateProfileMutation;
