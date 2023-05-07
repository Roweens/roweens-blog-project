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
import { Skeleton } from '@/shared/ui/Skeleton';

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

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
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
