import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSearch: (newOrder: string) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters: FC<ArticlesFiltersProps> = (props) => {
    const {
        className,
        sort,
        order,
        type,
        search,
        onChangeOrder,
        onChangeSearch,
        onChangeSort,
        onChangeType,
    } = props;
    const { t } = useTranslation();

    return (
        <Card
            className={classNames(cls.articlesFilters, {}, [className])}
            padding="24"
        >
            <VStack gap="32">
                <Input
                    addonLeft={<Icon Svg={SearchIcon} className={cls.icon} />}
                    placeholder={t('Поиск')}
                    onChange={onChangeSearch}
                    value={search}
                    size="s"
                    data-testid="ArticlesPageFilters.Search"
                />
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />

                <ArticleTypeTabs
                    onChangeType={onChangeType}
                    value={type}
                    className={cls.tabs}
                />
            </VStack>
        </Card>
    );
};
