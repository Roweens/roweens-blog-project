import { StateSchema } from '@/app/providers/StoreProvider';

export const selectArticleCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments.isLoading;

export const selectArticleCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments.error;
