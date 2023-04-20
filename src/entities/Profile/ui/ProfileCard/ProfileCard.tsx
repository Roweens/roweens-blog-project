import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Currencies, CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';

import { Countries, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
  data?:Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?:(value?: string) => void;
  onChangeAvatar?:(value?: string) => void;
  onChangeCurrency?:(currency: Currencies) => void;
  onChangeCountry?:(country: Countries) => void;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    const {
        className,
        data,
        isLoading,
        error,
        onChangeLastname,
        onChangeFirstname,
        readonly,
        onChangeCity,
        onChangeAge,
        onChangeAvatar,
        onChangeUsername,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <HStack className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])} justify="center" max>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className, cls.error])} justify="center">
                <Text
                    title={t('Произошла неожиданная ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack className={classNames(cls.ProfileCard, mods, [className])} gap="16" max>

            {data?.avatar && (
                <HStack className={cls.avatarWrapper} justify="center" max>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}

            <Input
                value={data?.firstname}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
                data-testid="ProfileCard.lastname"
            />

            <Input
                type="number"
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
                data-testid="ProfileCard.age"
            />
            <Input
                value={data?.city}
                placeholder={t('Ваш город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
                data-testid="ProfileCard.city"
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
                data-testid="ProfileCard.username"
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
                data-testid="ProfileCard.avatar"
            />
            <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readonly={readonly} className={cls.input} />
            <CountrySelect value={data?.country} onChange={onChangeCountry} readonly={readonly} className={cls.input} />

        </VStack>
    );
};
