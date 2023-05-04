import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { selectArticleDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { selectUserAuthData } from '@/entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, { rejectWithValue, dispatch, extra, getState }) => {
        const userData = selectUserAuthData(getState());
        const article = selectArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) throw new Error();

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
