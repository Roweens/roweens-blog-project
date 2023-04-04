import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';
import { ArticleDetailsRecommendationsReducer } from './ArticleDetailsPageRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: ArticleDetailsRecommendationsReducer,
});
