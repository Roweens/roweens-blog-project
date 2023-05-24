import { CSSProperties, FC, useMemo, ImgHTMLAttributes } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
    fallbackInverted?: boolean;
}

/**
 * *deprecated
 * */

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className,
        src,
        alt = '',
        size,
        fallbackInverted = false,
        ...others
    } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size || 100,
            height: size || 100,
        }),
        [size],
    );

    const mods: Mods = {};

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = (
        <Icon
            Svg={UserIcon}
            width={size}
            height={src}
            inverted={fallbackInverted}
        />
    );

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            {...others}
        />
    );
};
