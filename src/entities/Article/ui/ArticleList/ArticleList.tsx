import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
   className?: string;
   articles: Article[]
   isLoading?: boolean;
   view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === 'Block' ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton view={view} className={cls.card} />);

export const ArticleList: FC<ArticleListProps> = (props) => {
    const {
        className, articles, view = 'Block', isLoading,
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => <ArticleListItem key={article.id} article={article} view={view} className={cls.card} />;

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
};
