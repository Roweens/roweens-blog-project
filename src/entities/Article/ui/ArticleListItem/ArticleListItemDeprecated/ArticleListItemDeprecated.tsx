import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Text } from '@/shared/ui/deprecated/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button } from '@/shared/ui/deprecated/button/';
import { AppLink } from '@/shared/ui/deprecated/appLink';
import cls from './ArticleListItemDeprecated.module.scss';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleBlockType } from '../../../model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleListItemProps } from '../ArticleListItem';

export const ArticleListItemDeprecated: FC<ArticleListItemProps> = (props) => {
    const { className, article, view, target, onViewArticle, index } = props;
    const { t } = useTranslation();

    const types = <Text text={article.type.join(',')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    const onViewHandle = useCallback(
        (index: number) => () => {
            if (onViewArticle) {
                onViewArticle(index);
            }
        },
        [onViewArticle],
    );

    if (view === 'List') {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem.List"
            >
                <Card>
                    <div className={cls.header}>
                        <Avatar size={40} src={article.user?.avatar} />
                        <Text
                            text={article.user?.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button onClick={onViewHandle(index ?? 0)}>
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.articleListItem, {}, [
                className,
                cls[view],
            ])}
            target={target}
            onClick={onViewHandle(index ?? 0)}
            data-testid="ArticleListItem.Block"
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
};
