import { FC, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UiDesignSwitcher.module.scss';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import {
    ToggleFeatures,
    getFeatureFlag,
    updateFeatureFlag,
} from '@/shared/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { selectUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

interface UiDesignSwitcherProps {
    className?: string;
}

export const UiDesignSwitcher: FC<UiDesignSwitcherProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('settings');
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useSelector(selectUserAuthData);
    const [isLoading, setIsLoading] = useState(false);
    const forceUpdate = useForceUpdate();

    const items = useMemo(
        () => [
            {
                content: t('Новый'),
                value: 'new',
            },
            {
                content: t('Старый'),
                value: 'old',
            },
        ],
        [t],
    );

    const onChange = useCallback(
        async (value: string) => {
            if (authData) {
                setIsLoading(true);
                await dispatch(
                    updateFeatureFlag({
                        newFeatures: {
                            isAppRedesigned: value === 'new',
                        },
                        userId: authData?.id,
                    }),
                ).unwrap();
                setIsLoading(false);
                forceUpdate();
            }
        },
        [authData, dispatch, forceUpdate],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack gap="16">
                    <Text text={t('Вариант интерфейса')} />
                    {isLoading ? (
                        <Skeleton width={100} height={40} />
                    ) : (
                        <ListBox
                            className={classNames(cls.uiDesignSwitcher, {}, [
                                className,
                            ])}
                            items={items}
                            value={isAppRedesigned ? 'new' : 'old'}
                            onChange={onChange}
                        />
                    )}
                </HStack>
            }
            off={
                <HStack gap="16">
                    <TextDeprecated text={t('Вариант интерфейса')} />
                    {isLoading ? (
                        <SkeletonDeprecated width={100} height={40} />
                    ) : (
                        <ListBoxDeprecated
                            className={classNames(cls.uiDesignSwitcher, {}, [
                                className,
                            ])}
                            items={items}
                            value={isAppRedesigned ? 'new' : 'old'}
                            onChange={onChange}
                        />
                    )}
                </HStack>
            }
        />
    );
};
