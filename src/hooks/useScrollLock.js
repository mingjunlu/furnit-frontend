import { useLayoutEffect } from 'react';

const useScrollLock = () => {
    useLayoutEffect(() => {
        // Reserve original overflow value
        const { overflow: originalValue } = window.getComputedStyle(document.body);

        // Prevent scrolling on mount
        document.body.style.overflow = 'hidden';

        return () => {
            // Enable scrolling on unmount
            document.body.style.overflow = originalValue;
        };
    }, []);
};

export default useScrollLock;
