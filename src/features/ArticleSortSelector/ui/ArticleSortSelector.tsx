import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import {
    ListBox as ListBoxDeprecated,
    ListBoxItem,
} from '@/shared/ui/deprecated/Popups';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props;
    const { t } = useTranslation('articles');

    const orderOptions = useMemo<ListBoxItem<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<ListBoxItem<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('количеству просмотров'),
            },
        ],
        [t],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack
                    className={classNames(
                        cls.articleSortSelectorRedesigned,
                        {},
                        [className],
                    )}
                    gap="8"
                >
                    <Text text={t('Сортировать по:')} />
                    <ListBox
                        items={sortFieldOptions}
                        value={sort}
                        onChange={onChangeSort}
                        testid="SortField"
                        defaultValue={t('дате создания')}
                    />
                    <ListBox
                        items={orderOptions}
                        value={order}
                        onChange={onChangeOrder}
                        testid="SortOrder"
                        defaultValue={t('убыванию')}
                    />
                </VStack>
            }
            off={
                <div
                    className={classNames(cls.articleSortSelector, {}, [
                        className,
                    ])}
                >
                    <ListBoxDeprecated
                        items={sortFieldOptions}
                        label={t('Сортировать по')}
                        value={sort}
                        onChange={onChangeSort}
                        testid="SortField"
                        defaultValue={t('дате создания')}
                    />
                    <ListBoxDeprecated
                        items={orderOptions}
                        label={t('по')}
                        value={order}
                        onChange={onChangeOrder}
                        className={cls.order}
                        testid="SortOrder"
                        defaultValue={t('убыванию')}
                    />
                </div>
            }
        />
    );
};
