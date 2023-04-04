import { StateSchema } from 'app/providers/StoreProvider';
import {
    FC, MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInifiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import { selectScrollSaveByPath } from '../model/selectors/ScrollSaveSelectors';
import { scrollSaveActions } from '../model/slice/ScrollSaveSlice';
import cls from './Page.module.scss';

interface PageProps {
   className?: string;
   children: ReactNode
   onScrollEnd?: () => void;
}

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => selectScrollSaveByPath(state, pathname));

    useInifiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle<UIEvent<HTMLDivElement>>((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 550);

    return (
        <section ref={wrapperRef} className={classNames(cls.page, {}, [className])} onScroll={onScroll}>
            {children}
            {onScrollEnd ? <div ref={triggerRef} className={cls.trigger} /> : null}
        </section>
    );
};
