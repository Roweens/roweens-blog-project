import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';
import { selectUserAuthData } from '@/entities/User';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { toggleFeatures } from '@/shared/features';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = (props) => {
    const { className, articleId } = props;
    const { t } = useTranslation();

    const authData = useSelector(selectUserAuthData);

    const { data, isLoading } = useGetArticleRating({
        articleId,
        userId: Number(authData?.id),
    });
    const [rateArticleQuery] = useRateArticle();

    const currentRating = data?.[0];

    const handleArticleRate = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateArticleQuery({
                    userId: Number(authData?.id),
                    articleId,
                    rating: starsCount,
                    feedback,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [articleId, authData?.id, rateArticleQuery],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleArticleRate(starsCount, feedback);
        },
        [handleArticleRate],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleArticleRate(starsCount);
        },
        [handleArticleRate],
    );

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (isLoading) {
        return <Skeleton width="100%" height={120} border="16px" />;
    }

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rating={currentRating?.rating}
            className={classNames('', {}, [className])}
            title={t('Оцените статью')}
            feedbackTitle={t('Пожалуйста, оставьте свой отзыв')}
            hasFeedBack
        />
    );
};

export default ArticleRating;
