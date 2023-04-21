import { FC, MutableRefObject, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import {
    selectArticleViewIndex, selectArticlesPageError, selectArticlesPageIsLoading, selectArticlesPageView,
} from '../../model/selectors/articlePageSelectors';
import { articlesPageActions, getArticles } from '../../model/slices/articlePageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ArticleInfiniteListProps {
   className?: string;
   scrollRef?: MutableRefObject<HTMLDivElement>;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = (props) => {
    const { className, scrollRef } = props;
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(selectArticlesPageIsLoading);
    const error = useSelector(selectArticlesPageError);
    const articleViewIndex = useSelector(selectArticleViewIndex);
    const view = useSelector(selectArticlesPageView);

    const onViewArticle = useCallback((articleIndex: number) => {
        dispatch(articlesPageActions.setArticleViewIndex(articleIndex));
    }, [dispatch]);

    if (error) {
        return <Text title={t('Произошла ошибка при загрузке статей')} />;
    }

    return (
        <ArticleList
            articles={articles}
            view={view}
            isLoading={isLoading}
            className={className}
            scrollRef={scrollRef}
            onViewArticle={onViewArticle}
            articleViewIndex={articleViewIndex}
        />
    );
};
