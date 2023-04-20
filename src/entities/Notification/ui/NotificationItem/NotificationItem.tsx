import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { AppLink } from '@/shared/ui/appLink/AppLink';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notifications';

interface NotificationItemProps {
   className?: string;
   item: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
    const { className, item } = props;

    const content = (
        <Card className={classNames(cls.notificationItem, {}, [className])} theme={CardTheme.OUTLINED}>
            <Text title={item.title} text={item.description} />
        </Card>
    );

    if (item.href) {
        return (
            <AppLink target="_blank" to={item.href} className={cls.link}>
                {content}
            </AppLink>
        );
    }

    return content;
};
