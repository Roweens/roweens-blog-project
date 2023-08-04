import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { Currencies, CurrencySelect } from '@/entities/Currency';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Countries, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Profile } from '../../model/types/profile';
import newCls from './ProfileCard.new.module.scss';
import { ToggleFeatures } from '@/shared/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import {
    TextAlign,
    Text as TextDeprecated,
    TextTheme,
} from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import {
    ProfileCardDeprecated,
    ProfileCardDeprecatedSkeleton,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currencies) => void;
    onChangeCountry?: (country: Countries) => void;
}

const ProfileCardRedesignedSkeleton = () => (
    <Card padding="24" fullWidth border="intermediate">
        <VStack gap="32">
            <HStack max justify="center">
                <Skeleton width={128} height={128} border="100%" />
            </HStack>
            <HStack gap="32" max>
                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </VStack>
                <VStack gap="16" max>
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                    <Skeleton width="100%" height={38} />
                </VStack>
            </HStack>
        </VStack>
    </Card>
);

const ProfileCardRedesignedError = () => {
    const { t } = useTranslation('profile');

    return (
        <HStack
            className={classNames(
                newCls.ProfileCard,
                { [newCls.loading]: true },
                [newCls.error],
            )}
            justify="center"
        >
            <Text
                title={t('Произошла неожиданная ошибка')}
                text={t('Попробуйте обновить страницу')}
                variant="error"
                align="center"
            />
        </HStack>
    );
};

export const ProfileCard = memo((props: ProfileCardProps) => {
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

    const Stack = isMobile ? VStack : HStack;

    if (isLoading) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ProfileCardRedesignedSkeleton />}
                off={<ProfileCardDeprecatedSkeleton />}
            />
        );
    }

    if (error) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ProfileCardRedesignedError />}
                off={
                    <HStack
                        className={classNames(
                            newCls.ProfileCard,
                            { [newCls.loading]: true },
                            [newCls.error],
                        )}
                        justify="center"
                    >
                        <TextDeprecated
                            title={t('Произошла неожиданная ошибка')}
                            text={t('Попробуйте обновить страницу')}
                            theme={TextTheme.ERROR}
                            align={TextAlign.CENTER}
                        />
                    </HStack>
                }
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    fullWidth
                    padding="24"
                    className={classNames(newCls.ProfileCard, {}, [className])}
                    border="intermediate"
                >
                    {data?.avatar && (
                        <HStack
                            className={newCls.avatarWrapper}
                            justify="center"
                            max
                        >
                            <Avatar src={data?.avatar} size={128} />
                        </HStack>
                    )}
                    <Stack gap="24" max>
                        <VStack gap="16" max>
                            {' '}
                            <Input
                                value={data?.firstname}
                                label={t('Имя')}
                                onChange={onChangeFirstname}
                                readonly={readonly}
                                data-testid="ProfileCard.firstname"
                                fullWidth
                            />
                            <Input
                                value={data?.lastname}
                                label={t('Фамилия')}
                                onChange={onChangeLastname}
                                readonly={readonly}
                                data-testid="ProfileCard.lastname"
                                fullWidth
                            />
                            <Input
                                type="number"
                                value={data?.age}
                                label={t('Возраст')}
                                onChange={onChangeAge}
                                readonly={readonly}
                                data-testid="ProfileCard.age"
                                fullWidth
                            />
                            <Input
                                value={data?.city}
                                label={t('Город')}
                                onChange={onChangeCity}
                                readonly={readonly}
                                data-testid="ProfileCard.city"
                                fullWidth
                            />
                        </VStack>
                        <VStack gap="16" max>
                            {' '}
                            <Input
                                value={data?.username}
                                label={t('Имя пользователя')}
                                onChange={onChangeUsername}
                                readonly={readonly}
                                data-testid="ProfileCard.username"
                                fullWidth
                            />
                            <Input
                                value={data?.avatar}
                                label={t('Ссылка на аватар')}
                                onChange={onChangeAvatar}
                                readonly={readonly}
                                data-testid="ProfileCard.avatar"
                                fullWidth
                            />
                            <CurrencySelect
                                value={data?.currency}
                                onChange={onChangeCurrency}
                                readonly={readonly}
                            />
                            <CountrySelect
                                value={data?.country}
                                onChange={onChangeCountry}
                                readonly={readonly}
                            />
                        </VStack>
                    </Stack>
                </Card>
            }
            off={<ProfileCardDeprecated {...props} />}
        />
    );
});
