import { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MainPageItems.module.scss';
import { useMainPageItems } from '../../model/selectors/useMainPageItems';
import { LoginModal } from '@/features/AuthByUsername';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { selectUserAuthData } from '@/entities/User';

interface MainPageItemsProps {
    className?: string;
}

export const MainPageItems: FC<MainPageItemsProps> = (props) => {
    const { className } = props;

    const authData = useSelector(selectUserAuthData);

    const { mainPageItemsList, isAuthOpen, setIsAuthOpen } = useMainPageItems();

    const onCloseModal = useCallback(() => {
        setIsAuthOpen(false);
    }, [setIsAuthOpen]);

    const onItemClick = useCallback(
        (onClick: () => void, authOnly: boolean) => () => {
            if (authOnly && !authData) {
                setIsAuthOpen(true);
                return;
            }
            onClick();
        },
        [authData, setIsAuthOpen],
    );

    return (
        <HStack
            className={classNames(cls.mainPageItems, {}, [className])}
            gap="32"
            wrap="wrap"
            max
            justify="center"
            align="center"
        >
            {mainPageItemsList.map((item) => {
                return (
                    <Card padding="16" className={cls.card}>
                        <VStack align="center" justify="center" gap="16">
                            <Icon
                                Svg={item.Icon}
                                interactive
                                width={46}
                                height={46}
                                onClick={onItemClick(
                                    item.onClick,
                                    item.authOnly,
                                )}
                            />
                            <Text text={item.text} align="center" />
                        </VStack>
                    </Card>
                );
            })}
            {isAuthOpen && (
                <LoginModal isOpen={isAuthOpen} onClose={onCloseModal} />
            )}
        </HStack>
    );
};
