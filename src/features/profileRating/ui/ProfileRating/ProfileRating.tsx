import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { selectUserAuthData } from '@/entities/User';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import {
    useGetProfileRating,
    useGetProfileUserRating,
    useRateProfile,
} from '../../api/profileRatingApi';
import { Card } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/deprecated/Text';
import { toggleFeatures } from '@/shared/features';

export interface ProfileRatingProps {
    className?: string;
    profileId: number;
}

const ProfileRating: FC<ProfileRatingProps> = (props) => {
    const { className, profileId } = props;
    const { t } = useTranslation('profile');

    const authData = useSelector(selectUserAuthData);

    const isOwner = authData?.id === profileId;

    const { data: profileRatingData, isLoading: profileRatingIsLoading } =
        useGetProfileRating({ profileId });

    const averageProfileRating = useMemo(() => {
        if (profileRatingData) {
            return (
                profileRatingData?.reduce(
                    (acc, rating) => acc + rating.rating,
                    0,
                ) / profileRatingData?.length
            );
        }
        return 0;
    }, [profileRatingData]);

    const {
        data: profileUserRatingData,
        isLoading: profileUserRatingIsLoading,
    } = useGetProfileUserRating({ profileId, userId: Number(authData?.id) });

    const [rateProfileQuery] = useRateProfile();

    const currentRating = profileUserRatingData?.[0];

    const handleProfileRate = useCallback(
        (starsCount: number, feedback?: string) => {
            try {
                rateProfileQuery({
                    userId: Number(authData?.id),
                    profileId,
                    rating: starsCount,
                    feedback,
                });
            } catch (error) {
                console.log(error);
            }
        },
        [profileId, authData?.id, rateProfileQuery],
    );

    const onAccept = useCallback(
        (starsCount: number, feedback?: string) => {
            handleProfileRate(starsCount, feedback);
        },
        [handleProfileRate],
    );

    const onCancel = useCallback(
        (starsCount: number) => {
            handleProfileRate(starsCount);
        },
        [handleProfileRate],
    );

    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    if (profileUserRatingIsLoading || profileRatingIsLoading) {
        return <Skeleton width="100%" height={120} border="16px" />;
    }

    return (
        <>
            {isOwner ? (
                <Card>
                    <Text
                        title={t('Средняя оценка вашего профиля')}
                        text={String(averageProfileRating)}
                    />
                </Card>
            ) : (
                <RatingCard
                    onAccept={onAccept}
                    onCancel={onCancel}
                    rating={currentRating?.rating}
                    className={classNames('', {}, [className])}
                    title={t('Оцените профиль пользователя')}
                    feedbackTitle={t('Пожалуйста, оставьте свой отзыв')}
                    hasFeedBack
                />
            )}
        </>
    );
};

export default ProfileRating;
