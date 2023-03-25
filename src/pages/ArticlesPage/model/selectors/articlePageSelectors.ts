import { StateSchema } from 'app/providers/StoreProvider';

export const selectArticlesPageIsLoading = (state: StateSchema) => state.articlePage?.isLoading;
export const selectArticlesPageView = (state: StateSchema) => state.articlePage?.view;
export const selectArticlesPageError = (state: StateSchema) => state.articlePage?.error;
export const selectArticlesPageNumber = (state: StateSchema) => state.articlePage?.page || 1;
export const selectArticlesPageLimit = (state: StateSchema) => state.articlePage?.limit || 9;
export const selectArticlesPageHasMore = (state: StateSchema) => state.articlePage?.hasMore;
