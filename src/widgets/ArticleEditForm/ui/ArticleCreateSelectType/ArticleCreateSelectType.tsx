import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { ArticleType } from '@/entities/Article';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ToggleFeatures } from '@/shared/features';

interface ArticleCreateSelectTypeProps {
    className?: string;
    types?: ArticleType[];
    onTypeSelect: (type: ArticleType[]) => void;
}

export const ArticleCreateSelectType: FC<ArticleCreateSelectTypeProps> = (
    props,
) => {
    const { className, onTypeSelect, types } = props;
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

    const typeOptions = useMemo<TabItem<ArticleType>[]>(
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

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div className={classNames('', {}, [className])}>
                    <ListBox
                        // @ts-ignore
                        value={types}
                        items={typeOptions}
                        multiple
                        label={t('Выберите категории статьи')}
                        defaultValue={t('Выберите категории статьи')}
                        testid="ArticleCreateSelectType"
                        // @ts-ignore
                        onChange={onTypeSelect}
                    />
                </div>
            }
            off={
                <div className={classNames('', {}, [className])}>
                    <ListBoxDeprecated
                        // @ts-ignore
                        value={types}
                        items={typeOptions}
                        multiple
                        label={t('Выберите категории статьи')}
                        defaultValue={t('Выберите категории статьи')}
                        testid="ArticleCreateSelectType"
                        // @ts-ignore
                        onChange={onTypeSelect}
                    />
                </div>
            }
        />
    );
};
