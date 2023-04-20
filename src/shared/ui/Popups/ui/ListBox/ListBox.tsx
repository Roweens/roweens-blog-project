import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../../../button/Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popups.module.scss';

export interface ListBoxItem <T extends string> {
   value: T;
   content: ReactNode;
   disabled?: boolean;
}

interface ListBoxProps<T extends string> {
   items?: ListBoxItem<T>[] ;
   className?: string;
   value?: T;
    defaultValue?: string;
   onChange: (value: T) => void;
   readonly?: boolean;
   direction?: DropdownDirection;
   label?: string;
}

export const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className, items, defaultValue, onChange, value, readonly, direction = 'bottom right', label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="4">
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button className={popupCls.trigger} disabled={readonly}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, { [popupCls.active]: true, [popupCls.disabled]: item.disabled }, [])}>
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
