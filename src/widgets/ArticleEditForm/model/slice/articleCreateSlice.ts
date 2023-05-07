import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleCreateSchema } from '../types/articleCreateSchema';
import { Article, ArticleBlock, ArticleType } from '@/entities/Article';
import { createNewArticle } from '../services/createNewArticle/createNewArticle';
import { fetchEditArticleById } from '../services/fetchEditArticleById/fetchEditArticleById';
import { updateArticle } from '../services/updateArticle/updateArticle';

const initialState: ArticleCreateSchema = {
    isLoading: false,
    blockCount: 0,
    newArticle: {
        id: 0,
        blocks: [],
        createdAt: '',
        img: '',
        subtitle: '',
        title: '',
        type: [],
        views: 0,
    },
};

export const articleCreateSlice = createSlice({
    name: 'articleCreateSlice',
    initialState,
    reducers: {
        setNewArticle: (state, action: PayloadAction<Article>) => {
            state.newArticle = {
                ...state.newArticle,
                ...action.payload,
            };
        },
        setNewType: (state, action: PayloadAction<ArticleType[]>) => {
            state.newArticle!.type = action.payload;
        },
        setNewArticleBlock: (state, action: PayloadAction<ArticleBlock>) => {
            state!.newArticle!.blocks = [
                action.payload,
                ...state.newArticle.blocks,
            ];
        },
        increaseBlockCount: (state) => {
            state.blockCount += 1;
        },
        decreaseBlockCount: (state) => {
            state.blockCount -= 1;
        },
    },
    extraReducers(builder) {
        builder.addCase(createNewArticle.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(createNewArticle.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(createNewArticle.rejected, (state, action) => {
            state.isLoading = false;
            state.validateError = action.payload;
        });

        builder.addCase(updateArticle.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(updateArticle.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(updateArticle.rejected, (state, action) => {
            state.isLoading = false;
            state.validateError = action.payload;
        });

        builder.addCase(
            fetchEditArticleById.fulfilled,
            (state, action: PayloadAction<Article>) => {
                state.isLoading = false;
                state.newArticle = action.payload;
                state.blockCount = action.payload.blocks.length;
            },
        );
        builder.addCase(fetchEditArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(fetchEditArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: articleCreateActions } = articleCreateSlice;
export const { reducer: articleCreateReducer } = articleCreateSlice;
