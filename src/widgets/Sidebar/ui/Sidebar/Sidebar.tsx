import {
    memo, useMemo, useState,
} from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/button/Button';
import { LangSwitcher } from '@/widgets/langSwitcher/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/themeSwitcher';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { selectSidebarItems } from '../../model/selectors/selectSidebarItems';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemList = useSelector(selectSidebarItems);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sidebarItemList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}

        />
    )), [collapsed, sidebarItemList]);

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
                {' '}
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </section>
    );
});
