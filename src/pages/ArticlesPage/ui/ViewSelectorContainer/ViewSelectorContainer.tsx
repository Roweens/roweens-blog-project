import { FC } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ViewSelectorContainerProps {
    className?: string;
}

export const ViewSelectorContainer: FC<ViewSelectorContainerProps> = (
    props,
) => {
    const { className } = props;

    const { view, onChangeView } = useArticleFilters();

    return (
        <ArticleViewSelector
            view={view}
            onViewClick={onChangeView}
            className={className}
        />
    );
};
