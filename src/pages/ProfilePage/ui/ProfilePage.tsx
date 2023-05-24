import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { EditableProfileCard } from '@/features/editableProfileCard';
import { ProfileRating } from '@/features/profileRating';

import { getFeatureFlag } from '@/shared/features';
import { Text } from '@/shared/ui/deprecated/Text';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const { t } = useTranslation('profile');
    const isProfileRatingEnabled = getFeatureFlag('isProfileRatingEnabled');

    if (!id) {
        return <Text title={t('Профиль не найден')} />;
    }

    return (
        <Page
            className={classNames('', {}, [className])}
            data-testid="ProfilePage"
            allowOverflow
        >
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
                {isProfileRatingEnabled && (
                    <ProfileRating profileId={Number(id)} />
                )}
            </VStack>
        </Page>
    );
};

export default ProfilePage;
