import { FC, HTMLProps, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '../../redesigned/Portal/Portal';
import cls from './Modal.module.scss';
import { Overlay } from '../../redesigned/Overlay';

interface ModalProps extends HTMLProps<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 200;

/**
 * *deprecated
 * */

export const Modal: FC<ModalProps> = (props) => {
    const { className, children, isOpen, onClose, lazy, ...others } = props;

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
                <div className={cls.content} {...others}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
