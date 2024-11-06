"use client";
import { useState, useContext } from "react";
import { ImageContext } from '../../layout';

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState<string>("");

  // Use the context with proper type checking
  const context = useContext(ImageContext);

  // Handle if context is null
  if (!context) {
    throw new Error("ImageContext is not available. Please ensure the provider is set up correctly.");
  }

  const { fetchData, setSearchedResults } = context;

  const InputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim() !== "") {
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.NEXT_PUBLIC_API_ACCESS_KEY}`);
      setSearchValue("");
      setSearchedResults(searchValue);
    }
  };

  return (
    <form onSubmit={handleSearchSubmit} className="max-w-[30rem] h-[2rem] md:h-[2.5rem] w-full border-2 border-gray-400 rounded-full overflow-hidden">
      <input
        type="text"
        placeholder="Search for Image"
        value={searchValue}
        onChange={InputValueChange}
        className="w-full h-full outline-none px-4 text-gray-500"
      />
    </form>
  );
}
