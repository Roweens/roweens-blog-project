import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/types/sidebar';
import cls from './SidebarItem.module.scss';
import newCls from './SidebarItem.new.module.scss';
import {
    AppLink as AppLinkDeprecated,
    AppLinkTheme,
} from '@/shared/ui/deprecated/appLink';
import { ToggleFeatures } from '@/shared/features';
import { AppLink } from '@/shared/ui/redesigned/appLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { collapsed, item } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(selectUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <AppLink
                    variant="primary"
                    to={item.path}
                    activeClassname={newCls.active}
                    className={classNames(newCls.item, {
                        [newCls.collapsed]: collapsed,
                    })}
                >
                    <Icon Svg={item.Icon} />
                    <span className={newCls.link}> {t(item.text)}</span>
                </AppLink>
            }
            off={
                <AppLinkDeprecated
                    theme={AppLinkTheme.SECONDARY}
                    to={item.path}
                    className={classNames(cls.item, {
                        [cls.collapsed]: collapsed,
                    })}
                >
                    <item.Icon className={cls.icon} />
                    <span className={cls.link}> {t(item.text)}</span>
                </AppLinkDeprecated>
            }
        />
    );
});
