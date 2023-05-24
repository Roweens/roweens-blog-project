import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/button';
import { editableProfileCardActions } from '../../model/slice/editableProfileCardSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { selectProfileReadonly } from '../../model/selectors/selectProfileReadonly/selectProfileReadonly';
import { selectProfileData } from '../../model/selectors/selectProfileData/selectProfileData';
import { ToggleFeatures } from '@/shared/features';
import { Button } from '@/shared/ui/redesigned/button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface EditableProfileHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileHeaderProps> = (
    props,
) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const readonly = useSelector(selectProfileReadonly);
    const authData = useSelector(selectUserAuthData);
    const profileData = useSelector(selectProfileData);
    const canEdit = Number(authData?.id) === Number(profileData?.id);

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card padding="24" fullWidth border="intermediate">
                    <HStack
                        className={classNames('', {}, [className])}
                        justify="between"
                        max
                    >
                        <Text title={t('Профиль')} />
                        {canEdit && (
                            <>
                                {readonly ? (
                                    <Button
                                        variant="outlined"
                                        onClick={onEdit}
                                        data-testid="EditableProfileCardHeader.EditBtn"
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                ) : (
                                    <HStack gap="8">
                                        <Button
                                            variant="outlined"
                                            onClick={onCancelEdit}
                                            data-testid="EditableProfileCardHeader.CancelBtn"
                                            color="error"
                                        >
                                            {t('Отменить')}
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            onClick={onSave}
                                            data-testid="EditableProfileCardHeader.SaveBtn"
                                            color="success"
                                        >
                                            {t('Сохранить')}
                                        </Button>
                                    </HStack>
                                )}
                            </>
                        )}
                    </HStack>
                </Card>
            }
            off={
                <HStack
                    className={classNames('', {}, [className])}
                    justify="between"
                    max
                >
                    <TextDeprecated title={t('Профиль')} />
                    {canEdit && (
                        <>
                            {readonly ? (
                                <ButtonDeprecated
                                    theme={ThemeButton.OUTLINE}
                                    onClick={onEdit}
                                    data-testid="EditableProfileCardHeader.EditBtn"
                                >
                                    {t('Редактировать')}
                                </ButtonDeprecated>
                            ) : (
                                <HStack gap="8">
                                    <ButtonDeprecated
                                        theme={ThemeButton.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                        data-testid="EditableProfileCardHeader.CancelBtn"
                                    >
                                        {t('Отменить')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        theme={ThemeButton.OUTLINE}
                                        onClick={onSave}
                                        data-testid="EditableProfileCardHeader.SaveBtn"
                                    >
                                        {t('Сохранить')}
                                    </ButtonDeprecated>
                                </HStack>
                            )}
                        </>
                    )}
                </HStack>
            }
        />
    );
};
