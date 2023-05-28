import { FC, useState } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon as IconDeprecated } from '../Icon';
import { ToggleFeatures, toggleFeatures } from '@/shared/features';
import { Icon } from '../../redesigned/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 * *deprecated
 * */
export const StarRating: FC<StarRatingProps> = (props) => {
    const { className, onSelect, selectedStars = 0, size = 30 } = props;

    const [currentStarsCount, setCurrentStartsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStartsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStartsCount(0);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStartsCount(starsCount);
            onSelect?.(starsCount);
            setIsSelected(true);
        }
    };

    const mods: Mods = {
        [cls.selected]: isSelected,
    };

    const rootClassname = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.starRatingRedesigned,
        off: () => cls.starRating,
    });

    return (
        <div
            className={classNames(rootClassname, {}, [className])}
            data-testid="StarRating"
        >
            {stars.map((starNumber) => {
                const iconProps = {
                    Svg: StarIcon,
                    key: starNumber,
                    className: classNames(cls.starIcon, mods, [
                        currentStarsCount >= starNumber
                            ? cls.hovered
                            : cls.normal,
                    ]),
                    height: size,
                    width: 30,
                    onMouseEnter: onHover(starNumber),
                    onMouseLeave: onLeave,
                    onClick: onClick(starNumber),
                    'data-testid': `StarRating.${starNumber}`,
                    'data-selected': currentStarsCount >= starNumber,
                };

                return (
                    <ToggleFeatures
                        key={starNumber}
                        feature="isAppRedesigned"
                        on={<Icon interactive={!isSelected} {...iconProps} />}
                        off={<IconDeprecated {...iconProps} />}
                    />
                );
            })}
        </div>
    );
};
