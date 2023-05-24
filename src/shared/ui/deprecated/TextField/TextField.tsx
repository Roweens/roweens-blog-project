import { FC, TextareaHTMLAttributes, ChangeEvent } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './TextField.module.scss';

type HTMLTextAreaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface TextFieldProps extends HTMLTextAreaProps {
    className?: string;
    value: string | number;
    onChange: (value: string) => void;
    readonly?: boolean;
    cols?: number;
    rows?: number;
}

/**
 * *deprecated
 * */

export const TextField: FC<TextFieldProps> = (props) => {
    const {
        className,
        value,
        onChange,
        readonly,
        cols = 30,
        rows = 6,
        ...others
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };

    return (
        <textarea
            className={classNames(cls.textField, mods, [className])}
            value={value}
            onChange={onChangeHandler}
            readOnly={readonly}
            cols={cols}
            rows={rows}
            {...others}
        />
    );
};
