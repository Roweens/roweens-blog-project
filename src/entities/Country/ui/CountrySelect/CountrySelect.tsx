import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Countries } from '../../model/types/Country';
import { ToggleFeatures } from '@/shared/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CountrySelectProps {
    value?: Countries;
    onChange?: (value: Countries) => void;
    readonly?: boolean;
    className?: string;
}

const options = [
    { value: Countries.Germany, content: Countries.Germany },
    { value: Countries.Kazahstan, content: Countries.Kazahstan },
    { value: Countries.Russia, content: Countries.Russia },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { value, onChange, readonly, className } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Countries);
        },
        [onChange],
    );

    const listBoxProps = {
        className,
        value,
        items: options,
        defaultValue: t('Укажите страну'),
        label: t('Укажите страну'),
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
