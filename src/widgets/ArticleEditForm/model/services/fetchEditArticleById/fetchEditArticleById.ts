import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export const fetchEditArticleById = createAsyncThunk<
    Article,
    number | undefined,
    ThunkConfig<string>
>(
    'ArticleCreateForm/fetchEditArticleById',
    async (articleId, { rejectWithValue, dispatch, extra }) => {
        try {
            if (!articleId) {
                throw new Error('');
            }
            const response = await extra.api.get<Article>(
                `/articles/${articleId}`,
                {
                    params: {
                        _expand: 'user',
                    },
                },
            );

            if (!response.data) throw new Error();

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
