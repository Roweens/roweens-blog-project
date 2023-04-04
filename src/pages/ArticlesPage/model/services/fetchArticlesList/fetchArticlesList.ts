import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
    selectArticlesPageLimit,
    selectArticlesPageNumber,
    selectArticlesPageOrder,
    selectArticlesPageSearch,
    selectArticlesPageSort,
    selectArticlesPageType,
} from '../../selectors/articlePageSelectors';

interface FetchArticleListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticleListProps,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, { rejectWithValue, extra, getState }) => {
    const limit = selectArticlesPageLimit(getState());
    const sort = selectArticlesPageSort(getState());
    const order = selectArticlesPageOrder(getState());
    const search = selectArticlesPageSearch(getState());
    const page = selectArticlesPageNumber(getState());
    const type = selectArticlesPageType(getState());

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        });
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
            },
        });

        if (!response.data) throw new Error();

        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
