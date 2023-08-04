import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MobileNavbar.module.scss';
import { LoginModal } from '@/features/AuthByUsername';
import { Button } from '@/shared/ui/redesigned/button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { NotificationButton } from '@/features/notificationButton';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { selectUserAuthData } from '@/entities/User';
// eslint-disable-next-line roweens-plugin/upper-layer-imports
import { Sidebar } from '@/widgets/Sidebar';

interface MobileNavbarProps {
    className?: string;
}

export const MobileNavbar = memo((props: MobileNavbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const authData = useSelector(selectUserAuthData);
    const { className } = props;

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    if (authData) {
        return (
            <header className={classNames(cls.mobileNavbar, {}, [className])}>
                <Sidebar />
                <HStack gap="16" className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );
    }

    return (
        <header className={classNames(cls.mobileNavbar, {}, [className])}>
            <Sidebar />
            <Button
                className={cls.loginBtn}
                variant="filled"
                onClick={onOpenModal}
                data-testid="Navbar.loginBtn"
            >
                {t('Войти')}
            </Button>

            {isAuthOpen && (
                <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
            )}
        </header>
    );
});
