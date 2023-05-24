import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { StateSchema } from '@/app/providers/StoreProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInifiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { selectScrollSaveByPath } from '../model/selectors/ScrollSaveSelectors';
import { scrollSaveActions } from '../model/slice/ScrollSaveSlice';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';
import { toggleFeatures } from '@/shared/features';

interface PageProps extends TestProps {
    className?: string;
    scrollRef?: MutableRefObject<HTMLDivElement>;
    children: ReactNode;
    onScrollEnd?: () => void;
    allowOverflow?: boolean;
}

export const PAGE_ID = 'PAGE_ID';

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd, scrollRef, allowOverflow } =
        props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        selectScrollSaveByPath(state, pathname),
    );

    useInifiniteScroll({
        triggerRef,
        wrapperRef: toggleFeatures({
            name: 'isAppRedesigned',
            on: () => undefined,
            off: () => wrapperRef,
        }),
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle<UIEvent<HTMLDivElement>>(
        (e: UIEvent<HTMLDivElement>) => {
            dispatch(
                scrollSaveActions.setScrollPosition({
                    position: e.currentTarget.scrollTop,
                    path: pathname,
                }),
            );
        },
        550,
    );

    const pageClass = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => cls.pageRedesigned,
        off: () => cls.page,
    });

    return (
        <main
            ref={(el: HTMLDivElement) => {
                wrapperRef.current = el;
                if (scrollRef) {
                    scrollRef.current = el;
                }
            }}
            className={classNames(
                pageClass,
                {
                    [cls.allowOverflow]: allowOverflow,
                },
                [className],
            )}
            onScroll={onScroll}
            id={PAGE_ID}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div ref={triggerRef} className={cls.trigger} />
            ) : null}
        </main>
    );
};
