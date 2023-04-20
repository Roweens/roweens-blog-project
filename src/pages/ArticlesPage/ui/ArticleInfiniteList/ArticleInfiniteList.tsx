import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text/Text';
import { selectArticlesPageError, selectArticlesPageIsLoading, selectArticlesPageView } from '../../model/selectors/articlePageSelectors';
import { getArticles } from '../../model/slices/articlePageSlice';

interface ArticleInfiniteListProps {
   className?: string;
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(selectArticlesPageIsLoading);
    const error = useSelector(selectArticlesPageError);

    const view = useSelector(selectArticlesPageView);

    if (error) {
        return <Text title={t('Произошла ошибка при загрузке статей')} />;
    }

    return (

        <ArticleList
            articles={articles}
            view={view}
            isLoading={isLoading}
            className={className}
        />

    );
};
