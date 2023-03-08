import {
    memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Countries } from '../../model/types/Country';
import cls from './CurrencySelect.module.scss';

interface CountrySelectProps {
    value?: Countries
    onChange?: (value:Countries) => void
    readonly?: boolean
    className?: string
}

const options = [{ value: Countries.Germany, content: Countries.Germany },
    { value: Countries.Kazahstan, content: Countries.Kazahstan },
    { value: Countries.Russia, content: Countries.Russia },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        value, onChange, readonly, className,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Countries);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите страну')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            className={className}
        />
    );
});
