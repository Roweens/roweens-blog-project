import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCreateSelectType.module.scss';
import { TabItem } from '@/shared/ui/Tabs';
import { ArticleType } from '@/entities/Article';
import { ListBox } from '@/shared/ui/Popups';

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

    const typeOptions = useMemo<TabItem<ArticleType>[]>(
        () =>
            Object.values(ArticleType).reduce(
                (acc: TabItem<ArticleType>[], type) => [
                    ...acc,
                    { value: type, content: t(type, { ns: 'articles' }) },
                ],
                [],
            ),
        [t],
    );

    return (
        <div
            className={classNames(cls.articleCreateSelectType, {}, [className])}
        >
            <ListBox
                // @ts-ignore
                value={types}
                items={typeOptions}
                multiple
                label={t('Выберите категории статьи')}
                defaultValue={t('Выберите категории статьи')}
                // @ts-ignore
                onChange={onTypeSelect}
            />
        </div>
    );
};
