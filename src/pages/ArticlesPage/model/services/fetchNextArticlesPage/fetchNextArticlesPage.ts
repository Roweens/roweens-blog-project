import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    selectArticlesPageHasMore,
    selectArticlesPageIsLoading,
    selectArticlesPageNumber,
} from '../../selectors/articlePageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, { getState, dispatch }) => {
        const hasMore = selectArticlesPageHasMore(getState());
        const page = selectArticlesPageNumber(getState());
        const isLoading = selectArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({}));
        }
    },
);
