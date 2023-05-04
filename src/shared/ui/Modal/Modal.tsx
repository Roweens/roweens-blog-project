import { FC, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../Overlay/Overlay';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 200;

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { isClosing, isMounted, close } = useModal({
        onClose,
        isOpen,
        animationDelay: ANIMATION_DELAY,
    });

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
