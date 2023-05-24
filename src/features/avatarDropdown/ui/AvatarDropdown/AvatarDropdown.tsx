import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    isUserAdmin,
    isUserManager,
    selectUserAuthData,
    userActions,
} from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import {
    getRouteAdmin,
    getRouteProfile,
    getRouteSettings,
} from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown: FC<AvatarDropdownProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const authData = useSelector(selectUserAuthData);

    const dispatch = useAppDispatch();

    const isAdmin = useSelector(isUserAdmin);

    const isManager = useSelector(isUserManager);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) {
        return null;
    }

    const items = [
        ...(isAdminPanelAvailable
            ? [
                  {
                      content: t('Админ'),
                      href: getRouteAdmin(),
                  },
              ]
            : []),

        {
            content: t('Профиль'),
            href: getRouteProfile(authData.id),
        },

        {
            content: t('Настройки'),
            href: getRouteSettings(),
        },
        {
            content: t('Выйти'),
            onClick: onLogout,
        },
    ];

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Dropdown
                    direction="bottom left"
                    className={classNames(cls.avatarDropdown, {}, [className])}
                    data-testid="AvatarDropdown.Dropdown"
                    items={items}
                    trigger={
                        <Avatar
                            size={42}
                            src={authData.avatar}
                            data-testid="AvatarDropdown.trigger"
                        />
                    }
                />
            }
            off={
                <DropdownDeprecated
                    direction="bottom left"
                    className={classNames(cls.avatarDropdown, {}, [className])}
                    data-testid="AvatarDropdown.Dropdown"
                    items={items}
                    trigger={
                        <AvatarDeprecated
                            size={30}
                            src={authData.avatar}
                            fallbackInverted
                            data-testid="AvatarDropdown.trigger"
                        />
                    }
                />
            }
        />
    );
};
