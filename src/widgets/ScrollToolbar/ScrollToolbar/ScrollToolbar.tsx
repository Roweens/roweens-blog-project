import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar: FC<ScrollToolbarProps> = (props) => {
    const { className } = props;

    return (
        <VStack
            max
            fullHeight
            justify="center"
            align="center"
            className={classNames(cls.scrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
};
