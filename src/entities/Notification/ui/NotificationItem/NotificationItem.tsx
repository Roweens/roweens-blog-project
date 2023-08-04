import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated, CardTheme } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/deprecated/appLink';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notifications';
import { ToggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem: FC<NotificationItemProps> = (props) => {
    const { className, item } = props;

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(cls.notificationItem, {}, [
                        className,
                    ])}
                    data-testid="NotificationItem"
                    border="intermediate"
                    fullWidth
                >
                    <Text title={item.title} text={item.description} />
                </Card>
            }
            off={
                <CardDeprecated
                    className={classNames(cls.notificationItem, {}, [
                        className,
                    ])}
                    theme={CardTheme.OUTLINED}
                    data-testid="NotificationItem"
                >
                    <TextDeprecated
                        title={item.title}
                        text={item.description}
                    />
                </CardDeprecated>
            }
        />
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
