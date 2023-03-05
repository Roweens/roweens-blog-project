import { selectProfileData } from 'entities/Profile/model/selectors/selectProfileData/selectProfileData';
import { selectProfileError } from 'entities/Profile/model/selectors/selectProfileError/selectProfileError';
import { selectProfileIsLoading } from 'entities/Profile/model/selectors/selectProfileIsLoading/selectProfileIsLoading';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const data = useSelector(selectProfileData);
    const isLoading = useSelector(selectProfileIsLoading);
    const error = useSelector(selectProfileError);

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button theme={ThemeButton.OUTLINE} className={cls.editBtn}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input value={data?.first} placeholder={t('Ваше имя')} className={cls.input} />
                <Input value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input} />
            </div>
        </div>
    );
};
