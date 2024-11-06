import { createContext, useState, ReactNode } from 'react';

// Define the structure of the context state
interface ImageContextType {
  fetchData: (url: string) => void;
  setSearchedResults: (query: string) => void;
  response: any[]; // You can change 'any[]' to a more specific type if needed
  isLoading: boolean;
  error: string | null;
  searchedResults: string;
}

// Create a context with the default value set to null
export const ImageContext = createContext<ImageContextType | null>(null);

interface ImageProviderProps {
  children: ReactNode;
}

export function ImageProvider({ children }: ImageProviderProps) {
  const [response, setResponse] = useState<any[]>([]); // Typing response as an array of any type
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchedResults, setSearchedResults] = useState<string>("");

  const fetchData = async (url: string): Promise<void> => { // Explicitly specifying the return type as void
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setResponse(data.results);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageContext.Provider
      value={{
        fetchData,
        setSearchedResults,
        response,
        isLoading,
        error,
        searchedResults,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
