import { memo, useMemo, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/deprecated/button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { useSidebarItems } from '../../model/selectors/useSidebarItems';
import cls from './Sidebar.module.scss';
import newCls from './Sidebar.new.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { LangSwitcher } from '@/features/langSwitcher';
import { ToggleFeatures } from '@/shared/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import BurgerIcon from '@/shared/assets/icons/burger-menu.svg';
import { Drawer } from '@/shared/ui/redesigned/Drawer';

interface SidebarProps {
    className?: string;
}

const DeprecatedSidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemList = useSidebarItems();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemList],
    );

    return (
        <section
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                type="button"
                onClick={onToggle}
                data-testid="sidebar-toggle"
                className={cls.collapsedBtn}
                theme={ThemeButton.BACKGROUND}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <VStack className={cls.items} gap="8" role="navigation">
                {itemsList}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </section>
    );
};

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const sidebarItemList = useSidebarItems();

    // const mainClass = isMobile ? newCls.mobileSidebar : newCls.Sidebar;

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(
        () =>
            sidebarItemList.map((item) => (
                <SidebarItem
                    item={item}
                    collapsed={collapsed}
                    key={item.path}
                />
            )),
        [collapsed, sidebarItemList],
    );

    const content = (
        <section
            data-testid="sidebar"
            className={classNames(
                newCls.Sidebar,
                { [newCls.collapsed]: collapsed },
                [className],
            )}
        >
            <AppLogo size={collapsed ? 36 : 80} className={newCls.appLogo} />
            <VStack className={newCls.items} gap="8" role="navigation">
                {itemsList}
            </VStack>
            <BrowserView>
                <Icon
                    Svg={ArrowIcon}
                    interactive
                    onClick={onToggle}
                    data-testid="sidebar-toggle"
                    className={newCls.collapsedBtn}
                />
            </BrowserView>
            <HStack className={newCls.switchers} max gap="8" justify="center">
                <ThemeSwitcher />
                <LangSwitcher className={newCls.lang} short={collapsed} />
            </HStack>
        </section>
    );

    const trigger = (
        <Icon interactive Svg={BurgerIcon} onClick={() => setIsOpen(true)} />
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <MobileView>
                        {trigger}
                        <Drawer
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                        >
                            {content}
                        </Drawer>
                    </MobileView>
                    <BrowserView renderWithFragment>{content}</BrowserView>
                </>
            }
            off={<DeprecatedSidebar {...props} />}
        />
    );
});
