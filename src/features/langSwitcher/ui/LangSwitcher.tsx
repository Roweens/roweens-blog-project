import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/button';
import cls from './LangSwitcher.module.scss';
import { ToggleFeatures } from '@/shared/features';
import { Button } from '@/shared/ui/redesigned/button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button
                    variant="clear"
                    onClick={toggle}
                    className={classNames('', {}, [className])}
                    data-testid="LangSwitcher"
                >
                    {t(short ? 'Короткий язык' : 'Язык')}
                </Button>
            }
            off={
                <ButtonDeprecated
                    theme={ThemeButton.CLEAR}
                    onClick={toggle}
                    className={classNames(cls.langSwitcher, {}, [className])}
                    data-testid="LangSwitcher"
                >
                    {t(short ? 'Короткий язык' : 'Язык')}
                </ButtonDeprecated>
            }
        />
    );
});
