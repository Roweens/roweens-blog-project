import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlePageGreeting.module.scss';
import { Modal as ModalDeprecated } from '@/shared/ui/deprecated/Modal';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import { ToggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Modal } from '@/shared/ui/redesigned/Modal';

export const ArticlePageGreeting = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { isArticlesPageWasVisited } = useJsonSettings();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!isArticlesPageWasVisited) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasVisited: true }));
        }
    }, [dispatch, isArticlesPageWasVisited]);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const text = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Text
                    title={t('Добро пожаловать на страницу статей')}
                    text={t(
                        'Здесь вы можете искать и читать статьи на разные темы',
                    )}
                />
            }
            off={
                <TextDeprecated
                    title={t('Добро пожаловать на страницу статей')}
                    text={t(
                        'Здесь вы можете искать и читать статьи на разные темы',
                    )}
                />
            }
        />
    );

    if (isMobile) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Drawer
                        className={classNames(cls.articlePageGreeting, {}, [])}
                        lazy
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        {text}
                    </Drawer>
                }
                off={
                    <DrawerDeprecated
                        className={classNames(cls.articlePageGreeting, {}, [])}
                        lazy
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        {text}
                    </DrawerDeprecated>
                }
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Modal
                    className={classNames(cls.articlePageGreeting, {}, [])}
                    lazy
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    {text}
                </Modal>
            }
            off={
                <ModalDeprecated
                    className={classNames(cls.articlePageGreeting, {}, [])}
                    lazy
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    {text}
                </ModalDeprecated>
            }
        />
    );
};
