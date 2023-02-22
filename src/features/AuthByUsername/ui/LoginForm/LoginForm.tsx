import { loginActions } from 'features/AuthByUsername';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/LoginByUsername/loginByUsername';
import { selectLoginState } from '../../model/selectors/selectLoginState/selectLoginState';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

// enum LoginErrors {
//     INCORRECT_DATA = '';
//     SERVER_ERROR = ''
// }

export const LoginForm = memo((props:LoginFormProps) => {
    const { className } = props;

    const dispatch = useDispatch();
    const {
        password, username, isLoading, error,
    } = useSelector(selectLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text theme={TextTheme.ERROR} text={t('Вы ввели неверный логин или пароль')} />}
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите логин')}
                autofocus
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button className={cls.loginBtn} onClick={onLoginClick} disabled={isLoading}>
                {t('Войти')}
            </Button>
        </div>
    );
});
