import { FC, ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './MobileLayout.module.scss';

interface MobileLayoutProps {
    className?: string;
    header?: ReactElement;
    content: ReactElement;
}

export const MobileLayout: FC<MobileLayoutProps> = (props) => {
    const { className, content, header } = props;

    return (
        <div className={classNames(cls.mobileLayout, {}, [className])}>
            <div className={cls.header}>{header}</div>
            <div className={cls.content}>{content}</div>
        </div>
    );
};
