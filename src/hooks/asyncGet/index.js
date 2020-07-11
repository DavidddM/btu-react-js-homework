import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import settings from "../../settings";

const lazyGet = (url) => {
    console.log(settings.API_KEY);
    return axios.get(url, {
        headers: { "X-Auth-Token": settings.API_KEY },
    });
};

export const useAsyncGet = (customGet = lazyGet) => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    const asyncExecution = useCallback(
        (url, dataModifier = (data) => data) => {
            if (!url) {
                return;
            }
            setIsLoading(true);
            setData(null);
            setError(null);

            return customGet(url)
                .then((resp) => setData(dataModifier(resp.data)))
                .catch((err) => setError(err))
                .finally(() => setIsLoading(false));
        },
        [customGet]
    );

    useEffect(() => {
        asyncExecution();
    }, [asyncExecution]);

    return {
        asyncExecution,
        isLoading,
        data,
        error,
    };
};
