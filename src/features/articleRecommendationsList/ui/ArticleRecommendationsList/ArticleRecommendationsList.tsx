import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
   className?: string;
}

export const ArticleRecommendationsList: FC<ArticleRecommendationsListProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading, error } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
        return null;
    }

    return (
        <VStack className={classNames('', {}, [className])} gap="8">
            <Text text={t('Рекомендуем')} size={TextSize.L} />
            <ArticleList
                articles={articles}
                isLoading={isLoading}
                target="_blank"
                virtualized={false}
            />
        </VStack>
    );
};
