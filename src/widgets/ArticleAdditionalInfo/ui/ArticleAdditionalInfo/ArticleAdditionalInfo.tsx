import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { User } from '@/entities/User';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleEditButton } from '@/features/articleEditButton';

interface ArticleAdditionalInfoProps {
    className?: string;
    author?: User;
    createdAt: string;
    views: number;
    articleId: number;
}

export const ArticleAdditionalInfo: FC<ArticleAdditionalInfoProps> = (
    props,
) => {
    const { className, author, createdAt, views, articleId } = props;
    const { t } = useTranslation('article-details');

    return (
        <VStack gap="32" className={classNames('', {}, [className])}>
            <HStack gap="8">
                <Avatar src={author?.avatar} size={32} />
                <Text text={author?.username} bold />
                <Text text={createdAt} />
            </HStack>

            <ArticleEditButton articleId={articleId} />
            <Text text={t('{{count}} просмотров', { count: views })} />
        </VStack>
    );
};
