import { memo, ReactNode } from 'react';
import { LinkProps, NavLink } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
    className?: string;
    variant?: AppLinkVariant;
    children: ReactNode;
    activeClassname?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        variant = 'primary',
        activeClassname = '',
        ...others
    } = props;

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                classNames(cls.appLink, { [activeClassname]: isActive }, [
                    className,
                    cls[variant],
                ])
            }
            {...others}
        >
            {children}
        </NavLink>
    );
});
