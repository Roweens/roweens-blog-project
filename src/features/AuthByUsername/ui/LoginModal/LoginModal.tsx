import { FC, Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';
import { Modal as ModalDeprecated } from '@/shared/ui/deprecated/Modal';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import cls from './LoginModal.module.scss';
import { ToggleFeatures } from '@/shared/features';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpen, onClose } = props;

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Modal
                    className={classNames(cls.loginModal, {}, [className])}
                    isOpen={isOpen}
                    onClose={onClose}
                    lazy
                    data-testid="LoginModal"
                >
                    <Suspense fallback={<Loader />}>
                        <LoginFormAsync onSuccess={onClose} />
                    </Suspense>
                </Modal>
            }
            off={
                <ModalDeprecated
                    className={classNames(cls.loginModal, {}, [className])}
                    isOpen={isOpen}
                    onClose={onClose}
                    lazy
                    data-testid="LoginModal"
                >
                    <Suspense fallback={<Loader />}>
                        <LoginFormAsync onSuccess={onClose} />
                    </Suspense>
                </ModalDeprecated>
            }
        />
    );
};
