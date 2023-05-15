import { FC, useState } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '../Icon/Icon';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

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

    return (
        <div
            className={classNames(cls.starRating, {}, [className])}
            data-testid="StarRating"
        >
            {stars.map((starNumber) => (
                <Icon
                    Svg={StarIcon}
                    key={starNumber}
                    className={classNames(cls.starIcon, mods, [
                        currentStarsCount >= starNumber
                            ? cls.hovered
                            : cls.normal,
                    ])}
                    height={size}
                    width={30}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onClick(starNumber)}
                    data-testid={`StarRating.${starNumber}`}
                    data-selected={currentStarsCount >= starNumber}
                />
            ))}
        </div>
    );
};
