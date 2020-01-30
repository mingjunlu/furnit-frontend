import { useState, useEffect } from 'react';

const useFetch = (url, options, defaultState = null) => {
    const [result, setResult] = useState(defaultState);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            let fetchedData;

            try {
                const response = await fetch(url, options);
                const { success, message, data } = await response.json();
                if (!success) {
                    const customError = new Error(message);
                    customError.code = response.status;
                    throw customError;
                }
                fetchedData = data;
            } catch (error) {
                setResult(error);
            }

            if (isMounted && fetchedData) {
                setResult(fetchedData);
            }
        };
        fetchData();

        // Prevent setting state after unmounted
        return () => { isMounted = false; };
    }, [url, options]);

    return result;
};

export default useFetch;
