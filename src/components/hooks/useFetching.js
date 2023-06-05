import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
        } catch (e) {
            console.log(e)
            setError(e.message);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}

/*
const useFetching = (fetchCallback) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetchCallback();
                const result = await response.json();
                setData(result);
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [fetchCallback]);

    return { data, isLoading, error };
};*/
