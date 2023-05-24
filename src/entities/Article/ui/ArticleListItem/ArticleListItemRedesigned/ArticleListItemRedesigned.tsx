import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/button';
import { AppLink } from '@/shared/ui/redesigned/appLink';
import cls from './ArticleListItem.module.scss';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { ArticleTextBlock } from '../../../model/types/article';
import { ArticleBlockType } from '../../../model/consts/articleConsts';
import { ArticleListItemProps } from '../ArticleListItem';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

export const ArticleListItemRedesigned: FC<ArticleListItemProps> = (props) => {
    const { className, article, view, target, onViewArticle, index } = props;
    const { t } = useTranslation();

    const userInfo = (
        <>
            <Avatar
                size={32}
                src={article.user?.avatar}
                className={cls.avatar}
            />
            <Text bold text={article.user?.username} className={cls.username} />
        </>
    );

    const views = (
        <HStack gap="8">
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} className={cls.views} />
        </HStack>
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
            <Card
                padding="24"
                fullWidth
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem.List"
            >
                <VStack max gap="16">
                    <HStack gap="8" max>
                        {userInfo}
                        <Text text={article.createdAt} className={cls.date} />
                    </HStack>
                    <Text title={article.title} className={cls.title} bold />
                    <Text title={article.subtitle} size="s" />
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            text={textBlock.paragraphs.slice(0, 2).join('')}
                            className={cls.textBlock}
                        />
                    )}
                    <HStack max justify="between">
                        <AppLink
                            to={getRouteArticleDetails(article.id)}
                            target={target}
                        >
                            <Button
                                onClick={onViewHandle(index ?? 0)}
                                variant="outlined"
                            >
                                {t('Читать далее')}
                            </Button>
                        </AppLink>
                        {views}
                    </HStack>
                </VStack>
            </Card>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
        >
            <Card className={cls.card} border="round" padding="0">
                <AppImage
                    fallback={<Skeleton width="100%" height={200} />}
                    src={article.img}
                    className={cls.img}
                    alt={article.title}
                />
                <VStack gap="4" className={cls.info}>
                    <Text title={article.title} className={cls.title} />
                    <VStack gap="4" className={cls.footer} max>
                        <HStack max justify="between">
                            <Text
                                text={article.createdAt}
                                className={cls.date}
                            />
                            {views}
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
};
