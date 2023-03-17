import { CSSProperties, FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className, src, alt = '', size,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        heigth: size || 100,
    }), [size]);

    const mods: Mods = {};

    return (
        <img src={src} alt={alt} style={styles} className={classNames(cls.Avatar, mods, [className])} />
    );
};
