import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUsername';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import {
    selectUserAuthData,
} from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/appLink/AppLink';
import { Button, ThemeButton } from '@/shared/ui/button/Button';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { HStack } from '@/shared/ui/Stack';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const authData = useSelector(selectUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Text className={cls.appName} title={t('Cognus app')} theme={TextTheme.INVERTED} />
                <AppLink to={RoutePath.article_create} theme={AppLinkTheme.SECONDARY}>
                    {t('Создать статью')}
                </AppLink>
                <HStack gap="16" className={cls.actions}>

                    <NotificationButton />
                    <AvatarDropdown />

                </HStack>

            </div>
        );
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>

            <Button
                className={cls.links}
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>
            { isAuthOpen && <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />}
        </header>
    );
});
