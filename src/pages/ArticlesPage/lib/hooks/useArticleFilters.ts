import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
    selectArticlesPageOrder,
    selectArticlesPageSearch,
    selectArticlesPageSort,
    selectArticlesPageType,
    selectArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageActions } from '../../model/slices/articlePageSlice';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { SortOrder } from '@/shared/types/sort';

export function useArticleFilters() {
    const dispatch = useAppDispatch();

    const sort = useSelector(selectArticlesPageSort);
    const order = useSelector(selectArticlesPageOrder);
    const search = useSelector(selectArticlesPageSearch);
    const type = useSelector(selectArticlesPageType);
    const view = useSelector(selectArticlesPageView);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlesPageActions.setSort(newSort));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlesPageActions.setOrder(newOrder));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlesPageActions.setSearch(search));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        },
        [dispatch, debouncedFetchData],
    );

    const onChangeType = useCallback(
        (value: ArticleType) => {
            dispatch(articlesPageActions.setType(value));
            dispatch(articlesPageActions.setPage(1));
            fetchData();
        },
        [dispatch, fetchData],
    );

    return {
        sort,
        order,
        search,
        type,
        view,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onChangeType,
        onChangeView,
    };
}
