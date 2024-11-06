"use client";
import { useContext } from 'react';
import { ImageContext } from '../../layout';
import ImageCards from './ImageCards';
import Skeleton from '../Skeleton/Skeleton';

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

export default function Imagegallery() {
  // Use the context safely, assuming it will not be null.
  const context = useContext(ImageContext);

  // Handle if context is null
  if (!context) {
    throw new Error("ImageContext is not available. Please ensure the provider is set up correctly.");
  }

  const { response, isLoading, error, searchedResults } = context;

  if (isLoading) return <Skeleton item={10} />;
  if (error) return <p>There was an error loading the images.</p>;

  return (
    <section className="w-full flex flex-col items-center gap-5 justify-center h-full">
      <b className="w-full max-w-[30rem] text-lg md:text-2xl text-center">
        Showing results for {searchedResults || "Office"}
      </b>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 px-2 md:px-4 py-4 w-full">
        {response && response.length > 0 ? (
          response.map((image) => (
            <ImageCards key={image.id} image={image} />
          ))
        ) : (
          <p>No images found.</p>
        )}
      </section>
    </section>
  );
}
