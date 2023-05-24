import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = (props) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const getTypeTranslation = useCallback(
        (type: ArticleType) =>
            ({
                [ArticleType.ALL]: t('Все статьи'),
                [ArticleType.ECONOMICS]: t('Экономика'),
                [ArticleType.IT]: t('Айти'),
                [ArticleType.SCIENCE]: t('Наука'),
            }[type]),
        [t],
    );

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () =>
            Object.values(ArticleType).reduce(
                (acc: TabItem<ArticleType>[], type) => [
                    ...acc,
                    { value: type, content: getTypeTranslation(type) },
                ],
                [],
            ),
        [getTypeTranslation],
    );

    const onTabClick = useCallback(
        (tab: TabItem<ArticleType>) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Tabs
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                    direction="column"
                />
            }
            off={
                <TabsDeprecated
                    tabs={typeTabs}
                    value={value}
                    onTabClick={onTabClick}
                    className={classNames('', {}, [className])}
                />
            }
        />
    );
};
