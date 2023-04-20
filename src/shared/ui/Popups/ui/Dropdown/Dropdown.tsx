import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../../../appLink/AppLink';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popups.module.scss';

export interface DropdownItem {
   content?: ReactNode;
   onClick?: () => void;
   disabled?: boolean;
   href?: string;
}

interface DropdownProps {
   className?: string;
   items: DropdownItem[];
   trigger?: ReactNode;
    direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
    const {
        className, items, trigger, direction = 'bottom right',
    } = props;
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            className={classNames(cls.item, { [popupCls.active]: active }, [])}
                            onClick={item.onClick}
                            disabled={item.disabled}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
}
