import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ThemeButton } from '@/shared/ui/button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedBack?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rating?: number;
}

export const RatingCard: FC<RatingCardProps> = (props) => {
    const {
        className,
        feedbackTitle,
        hasFeedBack,
        onAccept,
        onCancel,
        title,
        rating = 0,
    } = props;
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rating);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedBack) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedBack, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const popupContent = (
        <VStack gap="32" max>
            <Text title={starsCount ? t('Спасибо за оценку') : feedbackTitle} />
            <Input value={feedback} onChange={setFeedback} placeholder={t('Ваш отзыв')} />
            <HStack max gap="16">
                <Button theme={ThemeButton.OUTLINE_RED} onClick={cancelHandle}>
                    {t('Закрыть')}
                </Button>
                <Button theme={ThemeButton.OUTLINE} onClick={acceptHandle}>
                    {t('Отправить')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card className={classNames(cls.ratingCard, {}, [className])} fullWidth>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    {popupContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    {popupContent}
                </Drawer>
            </MobileView>
        </Card>
    );
};
