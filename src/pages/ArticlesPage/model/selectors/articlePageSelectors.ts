import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';

export const selectArticlesPageIsLoading = (state: StateSchema) => state.articlePage?.isLoading;
export const selectArticlesPageView = (state: StateSchema) => state.articlePage?.view;
export const selectArticlesPageError = (state: StateSchema) => state.articlePage?.error;
export const selectArticleViewIndex = (state: StateSchema) => state.articlePage?.articleViewIndex ?? 0;

export const selectArticlesPageNumber = (state: StateSchema) => state.articlePage?.page || 1;
export const selectArticlesPageLimit = (state: StateSchema) => state.articlePage?.limit || 9;
export const selectArticlesPageHasMore = (state: StateSchema) => state.articlePage?.hasMore;
export const selectArticlesPageInited = (state: StateSchema) => state.articlePage?._inited;

export const selectArticlesPageOrder = (state: StateSchema) => state.articlePage?.order ?? 'asc';
export const selectArticlesPageSort = (state: StateSchema) => state.articlePage?.sort ?? ArticleSortField.CREATED;
export const selectArticlesPageSearch = (state: StateSchema) => state.articlePage?.search ?? '';
export const selectArticlesPageType = (state: StateSchema) => state.articlePage?.type ?? ArticleType.ALL;
