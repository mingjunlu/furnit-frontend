import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
    const [result, setResult] = useState({});

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            let jsonResponse;

            try {
                const response = await fetch(url, options);
                jsonResponse = await response.json();
            } catch (error) {
                setResult({
                    success: false,
                    message: error.message,
                });
            }

            if (isMounted && jsonResponse) {
                setResult(jsonResponse);
            }
        };
        fetchData();

        // Prevent setting state after unmounted
        return () => { isMounted = false; };
    }, [url, options]);

    return result;
};

export default useFetch;
