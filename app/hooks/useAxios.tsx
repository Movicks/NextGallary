import axios from 'axios';
import { useEffect, useState } from 'react';

interface ImageType {
    id: string;
    alt_description?: string;
    urls: {
        regular: string;
        small: string;
    };
}

interface UseAxiosReturnType {
    response: ImageType[];
    isLoading: boolean;
    error: string | null;
    fetchData: (url: string) => void;
}

export default function useAxios(params: string): UseAxiosReturnType {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsloading] = useState<boolean>(false);
    const [response, setResponse] = useState<ImageType[]>([]);

    axios.defaults.baseURL = 'https://api.unsplash.com';

    const fetchData = async (url: string) => {
        try {
            setIsloading(true);
            const res = await axios(url);
            setResponse(res.data.results);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setIsloading(false);
        }
    };

    useEffect(() => {
        fetchData(params);
    }, [params]);

    return { response, isLoading, error, fetchData };
}
