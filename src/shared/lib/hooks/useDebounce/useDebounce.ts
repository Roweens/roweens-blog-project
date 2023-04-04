import {
    MutableRefObject, useCallback, useEffect, useRef,
} from 'react';

export function useDebounce<T>(callback: (...args: T[]) => void, delay: number) {
    const timeoutRef = useRef(null) as MutableRefObject<any>;

    useEffect(() => clearTimeout(timeoutRef.current), []);

    return useCallback(
        (...args: T[]) => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
}
