import { createAsyncThunk } from '@reduxjs/toolkit';
import { format } from 'fecha';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { selectArticleCreateData } from '../../selectors/selectArticleCreateData/selectArticleCreateData';
import { selectUserAuthData } from '@/entities/User';
import { Article } from '@/entities/Article';
import { ValidateNewArticleError } from '../../consts/consts';
import { validateNewArticleData } from '../validateNewArticle/validateNewArticle';

export const createNewArticle = createAsyncThunk<
    Article,
    void,
    ThunkConfig<ValidateNewArticleError[]>
>(
    'ArticleCreateForm/createNewArticle',
    async (_, { rejectWithValue, extra, getState }) => {
        const newArticle = selectArticleCreateData(getState());
        const authData = selectUserAuthData(getState());

        if (!authData) {
            return rejectWithValue([ValidateNewArticleError.NO_USER]);
        }

        const errors = validateNewArticleData(newArticle);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        const article = {
            ...newArticle,
            userId: authData.id,
            views: 0,
            createdAt: format(new Date(), 'DD.MM.YYYY'),
        };

        try {
            const response = await extra.api.post<Article>(
                `/articles`,
                article,
            );
            if (!response.data) throw new Error();
            return response.data;
        } catch (error) {
            return rejectWithValue([ValidateNewArticleError.SERVER_ERROR]);
        }
    },
);
