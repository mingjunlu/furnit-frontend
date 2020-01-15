import { useState, useEffect } from 'react';

const useFetch = (url, options, defaultState = null) => {
    const [result, setResult] = useState(defaultState);

    useEffect(() => {
        const fetchData = async () => {
            let fetchedData;

            try {
                const response = await fetch(url, options);
                const { success, message, data } = await response.json();
                if (!success) {
                    throw new Error(message);
                }
                fetchedData = data;
            } catch (error) {
                setResult(error);
            }

            if (fetchedData) {
                setResult(fetchedData);
            }
        };
        fetchData();
    }, [url, options]);

    return result;
};

export default useFetch;
