import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { ListBox } from '@/shared/ui/Popups';
import { Currencies } from '../../model/types/currency';

interface CurrencySelectProps {
    value?: Currencies;
    onChange?: (value: Currencies) => void;
    readonly?: boolean;
    className?: string;
}

const options = [
    { value: Currencies.RUB, content: Currencies.RUB },
    { value: Currencies.EUR, content: Currencies.EUR },
    { value: Currencies.USD, content: Currencies.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { value, onChange, readonly, className } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currencies);
        },
        [onChange],
    );

    return (
        <ListBox
            onChange={onChangeHandler}
            value={value}
            items={options}
            defaultValue={t('Укажите валюту')}
            label={t('Укажите валюту')}
            className={className}
            readonly={readonly}
            direction="bottom right"
        />
    );
});
