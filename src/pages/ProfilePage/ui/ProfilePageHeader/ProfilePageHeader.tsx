import { profileActions, selectProfileReadonly, updateProfileData } from 'entities/Profile';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const readonly = useSelector(selectProfileReadonly);
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
        <div className={classNames(cls.ProfilePageHeader, {}, [className])}>

            <Text title={t('Профиль')} />
            { readonly ? (
                <Button theme={ThemeButton.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button theme={ThemeButton.OUTLINE_RED} className={cls.editBtn} onClick={onCancelEdit}>
                        {t('Отменить')}
                    </Button>
                    <Button theme={ThemeButton.OUTLINE} className={cls.saveBtn} onClick={onSave}>
                        {t('Сохранить')}
                    </Button>
                </>
            ) }

        </div>
    );
};
