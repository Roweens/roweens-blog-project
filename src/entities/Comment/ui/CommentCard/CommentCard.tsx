import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/appLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures, toggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppLink } from '@/shared/ui/redesigned/appLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return (
            <VStack
                className={classNames(cls.commentCard, {}, [
                    className,
                    cls.loading,
                ])}
                max
                gap="8"
                data-testid="CommentCard.Loading"
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton
                        className={cls.username}
                        height={16}
                        width={100}
                    />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card padding="24" border="intermediate" fullWidth>
                    <VStack
                        className={classNames(cls.commentCardRedesigned, {}, [
                            className,
                        ])}
                        max
                        gap="8"
                        data-testid="CommentCard.Content"
                    >
                        <AppLink to={getRouteProfile(comment.user.id)}>
                            <HStack gap="8">
                                {comment.user.avatar && (
                                    <Avatar
                                        size={30}
                                        src={comment.user.avatar}
                                    />
                                )}
                                <Text
                                    className={cls.username}
                                    text={comment.user.username}
                                    bold
                                />
                            </HStack>
                        </AppLink>
                        <Text className={cls.text} text={comment.text} />
                    </VStack>
                </Card>
            }
            off={
                <VStack
                    className={classNames(cls.commentCard, {}, [className])}
                    max
                    gap="8"
                    data-testid="CommentCard.Content"
                >
                    <AppLinkDeprecated to={getRouteProfile(comment.user.id)}>
                        <HStack gap="8">
                            {comment.user.avatar && (
                                <AvatarDeprecated
                                    size={30}
                                    src={comment.user.avatar}
                                />
                            )}
                            <TextDeprecated
                                className={cls.username}
                                title={comment.user.username}
                            />
                        </HStack>
                    </AppLinkDeprecated>
                    <TextDeprecated className={cls.text} text={comment.text} />
                </VStack>
            }
        />
    );
});
