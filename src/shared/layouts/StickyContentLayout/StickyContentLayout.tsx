import { FC, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    right?: ReactElement;
    content?: ReactElement;
}

export const StickyContentLayout: FC<StickyContentLayoutProps> = (props) => {
    const { className, content, left, right } = props;

    return (
        <div className={classNames(cls.stickyContentLayout, {}, [className])}>
            {left && <div className={cls.left}>{left}</div>}
            <div className={cls.content}>{content}</div>
            {right && <div className={cls.right}>{right}</div>}
        </div>
    );
};
