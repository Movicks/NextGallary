// types.ts

export interface ImageType {
  id: string;
  alt_description?: string;
  description?: string;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    id: string;
    name: string;
  };
}

export interface ImageContextType {
    response: any[];
  isLoading: boolean;
  error: string | null;
  fetchData: (url: string) => void;
  searchedResults: string;
  setSearchedResults: React.Dispatch<React.SetStateAction<string>>;
}
