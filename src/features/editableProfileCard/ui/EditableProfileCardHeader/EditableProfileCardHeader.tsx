import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { editableProfileCardActions } from '../../model/slice/editableProfileCardSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { selectProfileReadonly } from '../../model/selectors/selectProfileReadonly/selectProfileReadonly';
import { selectProfileData } from '../../model/selectors/selectProfileData/selectProfileData';

interface EditableProfileHeaderProps {
   className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const readonly = useSelector(selectProfileReadonly);
    const authData = useSelector(selectUserAuthData);
    const profileData = useSelector(selectProfileData);
    const canEdit = authData?.id === profileData?.id;

    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(editableProfileCardActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(editableProfileCardActions.cancelEdit());
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
                        <Button theme={ThemeButton.OUTLINE} onClick={onEdit} data-testid="EditableProfileCardHeader.EditBtn">
                            {t('Редактировать')}
                        </Button>
                    ) : (
                        <HStack gap="8">
                            <Button theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit} data-testid="EditableProfileCardHeader.CancelBtn">
                                {t('Отменить')}
                            </Button>
                            <Button theme={ThemeButton.OUTLINE} onClick={onSave} data-testid="EditableProfileCardHeader.SaveBtn">
                                {t('Сохранить')}
                            </Button>
                        </HStack>
                    ) }
                </>
            )}

        </HStack>
    );
};
