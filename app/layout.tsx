"use client";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import useAxios from './hooks/useAxios';
import { createContext, ReactNode, useState } from 'react';

// Load custom local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define ImageContext with proper types
interface ImageContextType {
  response: any[];
  isLoading: boolean;
  error: string | null;
  fetchData: (url: string) => void;
  searchedResults: string;
  setSearchedResults: React.Dispatch<React.SetStateAction<string>>;
}

export const ImageContext = createContext<ImageContextType | null>(null);

export default function RootLayout({
  children,
}: { children: ReactNode }) {
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=office&client_id=${process.env.NEXT_PUBLIC_API_ACCESS_KEY}`
  );

  const [searchedResults, setSearchedResults] = useState<string>("");

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchedResults,
    setSearchedResults,
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
