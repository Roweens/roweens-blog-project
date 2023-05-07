import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { selectArticleCreateData } from '../../selectors/selectArticleCreateData';
import { selectUserAuthData } from '@/entities/User';
import { Article } from '@/entities/Article';
import { ValidateNewArticleError } from '../../consts/consts';
import { validateNewArticleData } from '../validateNewArticle/validateNewArticle';

export const updateArticle = createAsyncThunk<
    Article,
    void,
    ThunkConfig<ValidateNewArticleError[]>
>(
    'ArticleCreateForm/updateArticle',
    async (_, { rejectWithValue, extra, getState }) => {
        const updatedArticle = selectArticleCreateData(getState());
        const authData = selectUserAuthData(getState());

        if (!authData) {
            return rejectWithValue([ValidateNewArticleError.NO_USER]);
        }

        const errors = validateNewArticleData(updatedArticle);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Article>(
                `/articles/${updatedArticle.id}`,
                updatedArticle,
            );

            if (!response.data) throw new Error();
            return response.data;
        } catch (error) {
            return rejectWithValue([ValidateNewArticleError.SERVER_ERROR]);
        }
    },
);
