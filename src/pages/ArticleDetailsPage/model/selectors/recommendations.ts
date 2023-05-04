import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleRecommendationsIsLoading = (state: StateSchema) =>
    state.articleDetailsPage?.recommendations.isLoading;

export const selectArticleRecommendationsError = (state: StateSchema) =>
    state.articleDetailsPage?.comments.error;
