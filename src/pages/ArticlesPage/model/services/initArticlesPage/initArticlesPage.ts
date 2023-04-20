import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { selectArticlesPageInited } from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, { getState, dispatch }) => {
        const inited = selectArticlesPageInited(getState());

        if (!inited) {
            dispatch(articlesPageActions.setOrder((searchParams.get('order') as SortOrder) ?? ''));
            dispatch(articlesPageActions.setSort((searchParams.get('sort') as ArticleSortField) ?? ''));
            dispatch(articlesPageActions.setSearch(searchParams.get('search') ?? ''));
            dispatch(articlesPageActions.setType(searchParams.get('type') as ArticleType ?? undefined));

            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    },
);
