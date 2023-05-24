import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button, ThemeButton } from '@/shared/ui/deprecated/button';
import cls from './ThemeSwitcher.module.scss';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme: Theme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [dispatch, toggleTheme]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    Svg={ThemeIcon}
                    width={50}
                    height={50}
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                    data-testid="ThemeSwitcher"
                />
            }
            off={
                <Button
                    theme={ThemeButton.CLEAR}
                    className={classNames(cls.ThemeSwitcher, {}, [className])}
                    onClick={onToggleHandler}
                    data-testid="ThemeSwitcher"
                >
                    <IconDeprecated
                        Svg={ThemeIconDeprecated}
                        width={50}
                        height={50}
                        inverted
                    />
                </Button>
            }
        />
    );
});
