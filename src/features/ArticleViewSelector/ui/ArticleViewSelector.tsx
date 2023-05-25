import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/list-24-24.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TiledIcon from '@/shared/assets/icons/tile.svg';
import {
    Button as ButtonDeprecated,
    ThemeButton,
} from '@/shared/ui/deprecated/button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/shared/features';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleViewSelectorProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

interface viewType {
    view: ArticleView;
    icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const viewTypes: viewType[] = [
    {
        view: 'Block',
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => TiledIcon,
            off: () => TiledIconDeprecated,
        }),
    },
    {
        view: 'List',
        icon: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ListIcon,
            off: () => ListIconDeprecated,
        }),
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    className={classNames(
                        cls.articleViewSelectorRedesigned,
                        {},
                        [className],
                    )}
                >
                    <HStack gap="8">
                        {viewTypes.map((viewType) => (
                            <Icon
                                key={viewType.view}
                                Svg={viewType.icon}
                                width={26}
                                height={26}
                                interactive
                                onClick={onClick(viewType.view)}
                                data-testid={`ArticleViewSelector.${viewType.view}`}
                                className={classNames(
                                    '',
                                    {
                                        [cls.notSelected]:
                                            viewType.view !== view,
                                    },
                                    [],
                                )}
                            />
                        ))}
                    </HStack>
                </Card>
            }
            off={
                <div
                    className={classNames(cls.articleViewSelector, {}, [
                        className,
                    ])}
                >
                    {viewTypes.map((viewType) => (
                        <ButtonDeprecated
                            key={viewType.view}
                            theme={ThemeButton.CLEAR}
                            onClick={onClick(viewType.view)}
                            data-testid={`ArticleViewSelector.${viewType.view}`}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                width={26}
                                height={26}
                                className={classNames(
                                    '',
                                    {
                                        [cls.notSelected]:
                                            viewType.view !== view,
                                    },
                                    [],
                                )}
                            />
                        </ButtonDeprecated>
                    ))}
                </div>
            }
        />
    );
});
