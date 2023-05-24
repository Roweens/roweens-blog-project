import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currencies } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

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

    const listBoxProps = {
        className,
        value,
        items: options,
        defaultValue: t('Укажите валюту'),
        label: t('Укажите валюту'),
        direction: 'bottom right' as const,
        readonly,
        onChange: onChangeHandler,
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ListBox {...listBoxProps} />}
            off={<ListBoxDeprecated {...listBoxProps} />}
        />
    );
});
