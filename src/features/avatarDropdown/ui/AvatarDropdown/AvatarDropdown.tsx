import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    isUserAdmin, isUserManager, selectUserAuthData, userActions,
} from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import { RoutePath } from '@/shared/const/router';

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

    return (
        <Dropdown
            direction="bottom left"
            className={classNames(cls.avatarDropdown, {}, [className])}
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Админ'),
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    content: t('Выйти'),
                    onClick: onLogout,
                },

                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id,
                },

            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    );
};
