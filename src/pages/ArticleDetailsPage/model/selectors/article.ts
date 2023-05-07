import { createSelector } from '@reduxjs/toolkit';
import { selectArticleDetailsData } from '@/entities/Article';
import { selectUserAuthData } from '@/entities/User';

export const selectUserIsAuthor = createSelector(
    selectArticleDetailsData,
    selectUserAuthData,
    (article, user) => {
        if (!article || !user) {
            return false;
        }
        return article?.user?.id === user?.id;
    },
);
