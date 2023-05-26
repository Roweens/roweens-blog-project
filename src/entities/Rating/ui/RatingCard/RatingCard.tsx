import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Modal as ModalDeprecated } from '@/shared/ui/deprecated/Modal';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/button';
import { Drawer as DrawerDeprecated } from '@/shared/ui/deprecated/Drawer';
import { ToggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { Card } from '@/shared/ui/redesigned/Card';

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

    const onSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedBack) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedBack, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const popupContent = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack gap="32" max>
                    <Text
                        title={
                            starsCount ? t('Спасибо за оценку') : feedbackTitle
                        }
                    />
                    <Input
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                        data-testid="RatingCard.Input"
                    />
                    <HStack max gap="16">
                        <Button
                            variant="outlined"
                            onClick={cancelHandle}
                            data-testid="RatingCard.CloseBtn"
                        >
                            {t('Закрыть')}
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={acceptHandle}
                            data-testid="RatingCard.SendBtn"
                        >
                            {t('Отправить')}
                        </Button>
                    </HStack>
                </VStack>
            }
            off={
                <VStack gap="32" max>
                    <TextDeprecated
                        title={
                            starsCount ? t('Спасибо за оценку') : feedbackTitle
                        }
                    />
                    <InputDeprecated
                        value={feedback}
                        onChange={setFeedback}
                        placeholder={t('Ваш отзыв')}
                        data-testid="RatingCard.Input"
                    />
                    <HStack max gap="16">
                        <ButtonDeprecated
                            theme={ThemeButton.OUTLINE_RED}
                            onClick={cancelHandle}
                            data-testid="RatingCard.CloseBtn"
                        >
                            {t('Закрыть')}
                        </ButtonDeprecated>
                        <ButtonDeprecated
                            theme={ThemeButton.OUTLINE}
                            onClick={acceptHandle}
                            data-testid="RatingCard.SendBtn"
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                </VStack>
            }
        />
    );

    const content = (
        <>
            <VStack align="center" gap="8">
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text title={title} />}
                    off={<TextDeprecated title={title} />}
                />
                <StarRating
                    size={40}
                    onSelect={onSelectStars}
                    selectedStars={starsCount}
                />
            </VStack>
            <BrowserView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Modal isOpen={isModalOpen} lazy>
                            {popupContent}
                        </Modal>
                    }
                    off={
                        <ModalDeprecated isOpen={isModalOpen} lazy>
                            {popupContent}
                        </ModalDeprecated>
                    }
                />
            </BrowserView>
            <MobileView>
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Drawer
                            isOpen={isModalOpen}
                            lazy
                            onClose={cancelHandle}
                        >
                            {popupContent}
                        </Drawer>
                    }
                    off={
                        <DrawerDeprecated
                            isOpen={isModalOpen}
                            lazy
                            onClose={cancelHandle}
                        >
                            {popupContent}
                        </DrawerDeprecated>
                    }
                />
            </MobileView>
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames('', {}, [className])}
                    fullWidth
                    data-testid="RatingCard"
                    padding="24"
                    border="intermediate"
                >
                    {content}
                </Card>
            }
            off={
                <CardDeprecated
                    className={classNames('', {}, [className])}
                    fullWidth
                    data-testid="RatingCard"
                >
                    {content}
                </CardDeprecated>
            }
        />
    );
};
