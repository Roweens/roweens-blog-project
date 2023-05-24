import { FC, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import cls from './NotificationButton.module.scss';
import NotificationIconDeprecated from '../../../../shared/assets/icons/notification-20-20.svg';
import NotificationIcon from '../../../../shared/assets/icons/notification.svg';
import { ToggleFeatures } from '@/shared/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton: FC<NotificationButtonProps> = (props) => {
    const { className } = props;

    const [isOpen, setIsOpen] = useState(false);

    const onOpenHandle = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseHandle = useCallback(() => {
        setIsOpen(false);
    }, []);

    const trigger = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    Svg={NotificationIcon}
                    interactive
                    onClick={onOpenHandle}
                    data-testid="NotificationButton.trigger"
                />
            }
            off={
                <ButtonDeprecated
                    theme={ThemeButton.CLEAR}
                    onClick={onOpenHandle}
                    data-testid="NotificationButton.trigger"
                >
                    <IconDeprecated Svg={NotificationIconDeprecated} inverted />
                </ButtonDeprecated>
            }
        />
    );

    return (
        <div>
            <MobileView>
                {trigger}

                <Drawer isOpen={isOpen} onClose={onCloseHandle}>
                    <NotificationList className={cls.notifications} />
                </Drawer>
            </MobileView>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Popover
                            trigger={trigger}
                            direction="bottom left"
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                        >
                            <NotificationList className={cls.notifications} />
                        </Popover>
                    }
                    off={
                        <PopoverDeprecated
                            trigger={trigger}
                            direction="bottom left"
                            className={classNames(cls.NotificationButton, {}, [
                                className,
                            ])}
                        >
                            <NotificationList className={cls.notifications} />
                        </PopoverDeprecated>
                    }
                />
            </BrowserView>
        </div>
    );
};
