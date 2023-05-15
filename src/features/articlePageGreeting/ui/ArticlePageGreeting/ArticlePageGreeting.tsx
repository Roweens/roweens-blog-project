import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlePageGreeting.module.scss';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';

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
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t('Здесь вы можете искать и читать статьи на разные темы')}
        />
    );

    if (isMobile) {
        return (
            <Drawer
                className={classNames(cls.articlePageGreeting, {}, [])}
                lazy
                isOpen={isOpen}
                onClose={onClose}
            >
                {text}
            </Drawer>
        );
    }

    return (
        <Modal
            className={classNames(cls.articlePageGreeting, {}, [])}
            lazy
            isOpen={isOpen}
            onClose={onClose}
        >
            {text}
        </Modal>
    );
};
