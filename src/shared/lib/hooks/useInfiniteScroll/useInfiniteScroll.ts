import { MutableRefObject, useEffect } from 'react';

export interface UseInifiniteScrollProps {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef?: MutableRefObject<HTMLElement>;
}

export function useInifiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: UseInifiniteScrollProps) {
    useEffect(() => {
        let observer: IntersectionObserver | null = null;
        const wrapperElement = wrapperRef?.current || null;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElement);
        }

        return () => {
            if (observer && triggerElement) {
                if (wrapperElement) {
                    observer.unobserve(wrapperElement);
                }
            }
        };
    }, [wrapperRef, triggerRef, callback]);
}
