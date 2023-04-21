import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { SortOrder } from '@/shared/types';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlePageSchema } from '../types/articlePageSchema';

const articleAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articleAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articleAdapter.getInitialState()
);

export const articlePageSlice = createSlice({
    name: 'articlePage',
    initialState: articleAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: 'Block',
        page: 1,
        hasMore: true,
        _inited: false,
        sort: ArticleSortField.CREATED,
        search: '',
        order: 'asc',
        type: ArticleType.ALL,
        limit: 9,
        articleViewIndex: 0,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        setArticleViewIndex: (state, action: PayloadAction<number>) => {
            state.articleViewIndex = action.payload;
        },

        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
            state.view = view;
            state.limit = view === 'Block' ? 9 : 4;
            state._inited = true;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
            state.isLoading = false;
            articleAdapter.addMany(state, action.payload);
            state.hasMore = action.payload.length >= state.limit;

            if (action.meta.arg.replace) {
                articleAdapter.setAll(state, action.payload);
            }
        });
        builder.addCase(fetchArticlesList.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;

            if (action.meta.arg.replace) {
                articleAdapter.removeAll(state);
            }
        });
        builder.addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: articlesPageActions } = articlePageSlice;
export const { reducer: articlesPageReducer } = articlePageSlice;
