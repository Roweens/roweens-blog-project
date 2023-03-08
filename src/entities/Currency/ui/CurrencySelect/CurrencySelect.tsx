import {
    memo, useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Currencies } from '../../model/types/currency';
import cls from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    value?: Currencies
    onChange?: (value:Currencies) => void
    readonly?: boolean
    className?: string
}

const options = [{ value: Currencies.RUB, content: Currencies.RUB },
    { value: Currencies.EUR, content: Currencies.EUR },
    { value: Currencies.USD, content: Currencies.USD }];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        value, onChange, readonly, className,
    } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currencies);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите валюту')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            className={className}
        />
    );
});
