"use client";
import { useState } from 'react';
import { FaRegTimesCircle } from "react-icons/fa";

// Define the ImageType interface here
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

interface ImageCardsProps {
  image: ImageType;
}

export default function ImageCards({ image }: ImageCardsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div
        onClick={toggleModal}
        className="relative cursor-pointer w-full max-w-[30rem] h-[24rem] bg-gray-300 rounded-xl overflow-hidden"
      >
        <img
          src={image.urls.small}
          alt={image.alt_description || 'Gallery image'}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col gap-2 items-end justify-end text-white font-semibold text-lg pb-2 px-2">
          <div className="py-2 px-4 w-full max-w-[16rem] bg-white bg-opacity-30 text-white rounded-full text-end">
            {image.user.name}
          </div>
          <p className="text-md px-4 text-end">{image.description || 'No description available'}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 pt-[10rem]">
          <div className="relative max-w-3xl w-full p-4">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              <FaRegTimesCircle className="text-4xl"/>
            </button>
            <img
              src={image.urls.regular}
              alt={image.alt_description || 'Full gallery image'}
              className="w-full h-auto max-h-screen object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
