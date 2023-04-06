import {
    profileActions, selectProfileData, selectProfileReadonly, updateProfileData,
} from 'entities/Profile';
import { selectUserAuthData } from 'entities/User';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { Text } from 'shared/ui/Text/Text';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const readonly = useSelector(selectProfileReadonly);
    const authData = useSelector(selectUserAuthData);
    const profileData = useSelector(selectProfileData);
    const canEdit = authData?.id === profileData?.id;

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack className={classNames('', {}, [className])} justify="between" max>
            <Text title={t('Профиль')} />
            {canEdit && (
                <>
                    { readonly ? (
                        <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit}>
                                {t('Отменить')}
                            </Button>
                            <Button theme={ThemeButton.OUTLINE} onClick={onSave}>
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    ) }
                </>
            )}

        </HStack>
    );
};
