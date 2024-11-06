"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface AxiosResponse {
  results: any[];
}

export default function useAxios(params: string) {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [response, setResponse] = useState<any[]>([]);

  axios.defaults.baseURL = "https://api.unsplash.com";

  const fetchData = async (url: string) => {
    try {
      setIsloading(true);
      const res = await axios.get<AxiosResponse>(url);
      setResponse(res.data.results);
    } catch (error) {
      setError("There was an error loading data.");
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    fetchData(params);
  }, [params]);

  // Return an object instead of separate values
  return {
    response,
    isLoading,
    error,
    fetchData: (url: string) => fetchData(url),
  };
}
