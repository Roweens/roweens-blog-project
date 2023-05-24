import { CSSProperties, SVGProps, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    width?: string | number;
    height?: string | number;
    inverted?: boolean;
    'data-testid'?: string;
}

/**
 * *deprecated
 * */

export const Icon = memo((props: IconProps) => {
    const {
        className,
        Svg,
        inverted = false,
        width,
        height,
        'data-testid': dataTestId = 'Text',
    } = props;

    const styles: CSSProperties = {
        width: width || 40,
        height: height || 40,
    };

    return (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.icon, {}, [
                className,
            ])}
            style={styles}
            data-testid={`${dataTestId}.Icon`}
        />
    );
});
