import { Countries } from 'entities/Country';
import { Currencies } from 'entities/Currency';
import {
    fetchProfileData, profileActions, ProfileCard, profileReducer, selectProfileError, selectProfileIsLoading,
    selectProfileReadonly,
    selectProfileValidateErrors,
    ValidateProfileError,
} from 'entities/Profile';
import { selectProfileForm } from 'entities/Profile/model/selectors/selectProfileForm/selectProfileForm';
import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/ui/Page';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';
// import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const formData = useSelector(selectProfileForm);
    const isLoading = useSelector(selectProfileIsLoading);
    const error = useSelector(selectProfileError);
    const readonly = useSelector(selectProfileReadonly);
    const validateErrors = useSelector(selectProfileValidateErrors);
    const { id } = useParams<{id: string}>();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
        [ValidateProfileError.NO_DATA]: t('Данные отсутствуют'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Фамилия и имя обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currencies) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Countries) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16" max>
                    <ProfilePageHeader />
                    {validateErrors?.length && validateErrors.map((err) => (
                        <Text theme={TextTheme.ERROR} text={validateErrorTranslates[err]} key={err} />
                    ))}
                    <ProfileCard
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeCity={onChangeCity}
                        onChangeAge={onChangeAge}
                        onChangeUsername={onChangeUsername}
                        onChangeAvatar={onChangeAvatar}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                        readonly={readonly}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
