import { FC, HTMLAttributeAnchorTarget } from 'react';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';
import { ToggleFeatures } from '@/shared/features';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onViewArticle?: (articleIndex: number) => void;
    index?: number;
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticleListItemRedesigned {...props} />}
            off={<ArticleListItemDeprecated {...props} />}
        />
    );
};
