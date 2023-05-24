import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/features';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton: FC<ArticleListItemSkeletonProps> = (
    props,
) => {
    const { className, view } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    const Card = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => CardRedesigned,
        off: () => CardDeprecated,
    });

    if (view === 'List') {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        className={classNames(
                            cls.articleListItemRedesigned,
                            {},
                            [className, cls[view]],
                        )}
                    >
                        <Card>
                            <VStack gap="16">
                                <HStack gap="16">
                                    <Skeleton
                                        height={30}
                                        width={30}
                                        border="50%"
                                    />
                                    <Skeleton
                                        width={65}
                                        height={16}
                                        border="4px"
                                    />
                                    <Skeleton
                                        width={80}
                                        height={16}
                                        border="4px"
                                    />
                                </HStack>
                                <Skeleton
                                    width={250}
                                    height={24}
                                    border="4px"
                                />
                                <Skeleton
                                    width={300}
                                    height={24}
                                    border="4px"
                                />
                                <Skeleton height={420} border="8px" />
                                <Skeleton
                                    height={72}
                                    width="100%"
                                    border="8px"
                                />
                                <HStack max justify="between">
                                    <Skeleton
                                        height={40}
                                        width={135}
                                        border="30px"
                                    />
                                    <Skeleton
                                        height={40}
                                        width={80}
                                        border="30px"
                                    />
                                </HStack>
                            </VStack>
                        </Card>
                    </div>
                }
                off={
                    <div
                        className={classNames(cls.articleListItem, {}, [
                            className,
                            cls[view],
                        ])}
                    >
                        <Card>
                            <HStack>
                                <Skeleton height={30} width={30} border="50%" />
                                <Skeleton
                                    className={cls.username}
                                    width={150}
                                    height={16}
                                />
                                <Skeleton
                                    className={cls.date}
                                    width={150}
                                    height={16}
                                />
                            </HStack>
                            <Skeleton
                                className={cls.title}
                                width={250}
                                height={24}
                            />
                            <Skeleton className={cls.img} height={200} />
                            <HStack>
                                <Skeleton height={36} width={200} />
                            </HStack>
                        </Card>
                    </div>
                }
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div
                    className={classNames(cls.articleListItemRedesigned, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card padding="16" fullWidth fullHeight border="round">
                        <VStack gap="16" justify="between" max fullHeight>
                            <Skeleton width="100%" height={240} border="16px" />
                            <VStack fullHeight justify="between" max>
                                <Skeleton
                                    width={150}
                                    height={30}
                                    border="6px"
                                />
                                <HStack max justify="between">
                                    <Skeleton
                                        width={100}
                                        height={24}
                                        border="6px"
                                    />
                                    <Skeleton
                                        width={80}
                                        height={24}
                                        border="6px"
                                    />
                                </HStack>
                            </VStack>
                        </VStack>
                    </Card>
                </div>
            }
            off={
                <div
                    className={classNames(cls.articleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card>
                        <div className={cls.imageWrapper}>
                            <Skeleton
                                className={cls.img}
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className={cls.infoWrapper}>
                            <Skeleton width={130} height={16} />
                        </div>
                        <Skeleton
                            width={150}
                            className={cls.title}
                            height={16}
                        />
                    </Card>
                </div>
            }
        />
    );
};
