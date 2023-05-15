import { FC, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover } from '@/shared/ui/Popups';
import { Button, ThemeButton } from '@/shared/ui/button';
import { Icon } from '@/shared/ui/Icon';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';
import NotificationIcon from '../../../../shared/assets/icons/notification-20-20.svg';

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
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onOpenHandle}
            data-testid="NotificationButton.trigger"
        >
            <Icon Svg={NotificationIcon} inverted />
        </Button>
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
                <Popover
                    trigger={trigger}
                    direction="bottom left"
                    className={classNames(cls.NotificationButton, {}, [
                        className,
                    ])}
                >
                    <NotificationList className={cls.notifications} />
                </Popover>
            </BrowserView>
        </div>
    );
};
