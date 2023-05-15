import { SVGProps, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    inverted?: boolean;
    'data-testid'?: string;
}

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted = false,
        'data-testid': dataTestId = 'Text',
    } = props;

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.icon, {}, [
                className,
            ])}
            data-testid={`${dataTestId}.Icon`}
        />
    );
});
