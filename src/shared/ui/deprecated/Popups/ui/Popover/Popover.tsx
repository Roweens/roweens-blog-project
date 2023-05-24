import { ReactNode } from 'react';
import { Popover as PopoverComponent } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popups.module.scss';

interface PopoverProps {
    className?: string;
    trigger?: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

/**
 * *deprecated
 * */

export function Popover(props: PopoverProps) {
    const { className, direction = 'bottom right', trigger, children } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <PopoverComponent
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <PopoverComponent.Button className={popupCls.trigger} as="div">
                {trigger}
            </PopoverComponent.Button>
            <PopoverComponent.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </PopoverComponent.Panel>
        </PopoverComponent>
    );
}
