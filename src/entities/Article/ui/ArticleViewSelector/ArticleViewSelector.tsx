import {
    memo,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleViewSelectorProps {
   className?: string;
   view?: ArticleView;
   onViewClick?: (view: ArticleView) => void
}

interface viewType {
   view: ArticleView,
   icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

const viewTypes: viewType[] = [
    {
        view: 'Block',
        icon: TiledIcon,
    },
    {
        view: 'List',
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    key={viewType.view}
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                >
                    <Icon Svg={viewType.icon} className={classNames('', { [cls.notSelected]: viewType.view !== view }, [])} />
                </Button>
            ))}

        </div>
    );
});
