import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, []);

    const onOpenModal = useCallback(() => {
        setIsAuthOpen(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                className={cls.links}
                theme={ThemeButton.CLEAR_INVERTED}
                onClick={onOpenModal}
            >
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
        </div>
    );
};
