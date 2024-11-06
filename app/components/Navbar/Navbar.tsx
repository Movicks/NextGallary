"use client"
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Searchbar from "../Searchbar/Searchbar"

const linkClasses = "flex items-center hover:text-gray-400 space-x-2";

export default function Navbar() {
  // State to handle the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-black border-b-2 sticky top-0 left-0 z-[100]">
      <div className="h-[3.5rem] gap-3 md:h-[4.3rem] mx-auto px-4 lg:px-[4rem] flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-2xl md:text-2xl font-bold h-[4.3rem] flex items-center">
          <b className="text-black">
            <span className="bg-black text-white px-2 rounded-md">N</span>extGallery
          </b>
        </div>
        {/* Searchbar*/}
        <Searchbar/>

        {/* Navigation links for larger screens */}
        <nav className="hidden lg:flex space-x-6">
          {/* Add actual links here if needed */}
          <Link href="/" className={linkClasses}>
            Home
          </Link>
          <Link href="#" className={linkClasses}>
            About
          </Link>
          <Link href="#" className={linkClasses}>
            Contact
          </Link>
        </nav>

        {/* Hamburger menu for smaller screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <AiOutlineMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-90 bg-white transform overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden w-3/4 max-w-sm`}
      >
        <nav className="pl-4 flex flex-col justify-between h-full gap-1">
          <div className="text-2xl font-bold h-[4.3rem] flex items-center">
            <b className="text-black">
                <span className="bg-black text-white px-2 rounded-md">N</span>extGallery
            </b>
          </div>
          <div className="flex flex-col items-start space-y-4 gap-3 border-r-2 h-full max-h-[40rem] pt-3 pb-9 pr-4">
            {/* Add actual links here if needed */}
            <Link href="/" className={linkClasses}>
              Home
            </Link>
            <Link href="#" className={linkClasses}>
              About
            </Link>
            <Link href="#" className={linkClasses}>
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-center w-full h-full max-h-[5rem] border-r-2 pr-4">
            <Link
              href="tel:+12702902019"
              className="text-white bg-black px-4 py-2 rounded w-full max-w-[20rem] font-semibold text-center"
              aria-label="Contact"
            >
              +1 270-290-2019
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
