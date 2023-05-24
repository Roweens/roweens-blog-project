import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import { ToggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = (
    props,
) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const {
        data: articles,
        isLoading,
        error,
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack
            className={classNames('', {}, [className])}
            gap="8"
            data-testid="ArticleRecommendationsList"
        >
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text text={t('Рекомендуем')} size="l" />}
                off={
                    <TextDeprecated text={t('Рекомендуем')} size={TextSize.L} />
                }
            />

            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target="_blank"
                virtualized={false}
            />
        </VStack>
    );
};
