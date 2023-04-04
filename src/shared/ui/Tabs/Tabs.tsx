import { FC, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
   value: string,
   content: ReactNode;
}

interface TabsProps {
   className?: string;
   tabs: TabItem[];
   value: string;
   onTabClick: (tab: TabItem) => void;
}

export const Tabs: FC<TabsProps> = (props) => {
    const {
        className, onTabClick, tabs, value,
    } = props;

    const clickHandle = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    className={cls.tab}
                    key={tab.value}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
