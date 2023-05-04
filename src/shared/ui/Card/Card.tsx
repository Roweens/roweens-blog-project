import { FC, HTMLAttributes, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    fullWidth?: boolean;
}

export const Card: FC<CardProps> = (props) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        fullWidth,
        ...otherProps
    } = props;
    const { t } = useTranslation();

    const mods: Mods = {
        [cls.max]: fullWidth,
    };

    return (
        <div
            className={classNames(cls.card, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
