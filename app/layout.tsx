"use client";
// import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import useAxios from './hooks/useAxios';
import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';

// Define ImageType once
interface ImageType {
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

// Define ImageContextType
interface ImageContextType {
  response: ImageType[];
  isLoading: boolean;
  error: string | null;
  fetchData: (url: string) => void;
  searchedResults: string;
  setSearchedResults: Dispatch<SetStateAction<string>>;
}

export const ImageContext = createContext<ImageContextType | null>(null);

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Type the response explicitly as ImageType[]
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=office&client_id=${process.env.NEXT_PUBLIC_API_ACCESS_KEY}`
  );

  const [searchedResults, setSearchedResults] = useState<string>("");

  const value = {
    response: response as ImageType[],
    isLoading,
    error,
    fetchData,
    searchedResults,
    setSearchedResults,
  };

  return (
    <html lang="en">
      <body className="antialiased">
        <ImageContext.Provider value={value}>
          <Navbar />
          <main>{children}</main>
          <footer className="row-start-3 flex flex-col gap-4 flex-wrap items-center justify-center w-full pt-9 pb-4 px-2">
            <div className="border-b-2 w-full border-gray-400"></div>
            <div className=" flex items-center justify-between w-full px-5">
              <div className="text-lg md:text-2xl font-bold h-[4.3rem] flex items-center">
                <b className="text-black">
                  <span className="bg-black text-white px-2 rounded-md">N</span>extGallery
                </b>
              </div>
              <p className="text-gray-500">Unsplash CopyRight &copy; 2024</p>
              <p>Unsplash</p>
            </div>
          </footer>
        </ImageContext.Provider>
      </body>
    </html>
  );
}
