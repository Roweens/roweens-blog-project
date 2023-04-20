import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
   className?: string;
   Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
   inverted?: boolean
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg, inverted = false } = props;

    return (
        <Svg className={classNames(inverted ? cls.inverted : cls.icon, {}, [className])} />
    );
});
