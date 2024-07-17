// src/components/Lightbox.js
import React, { useState } from "react";

const Lightbox = ({ images, imgName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(imgName);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const showNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const showPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="lg:grid lg:grid-cols-1">
        <button
          className="absolute left-0 top-1/3 w-1 bg-white rounded-full transform -translate-y-1/2 text-xl font-[900]  lg:hidden"
          onClick={showPrevious}
        >
          &lsaquo;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Thumbnail 0`}
          className=" cursor-pointer lg:w-5/6 h-3/4 lg:rounded-lg"
          onClick={() => openLightbox(imgName)}
        />
        <button
          className="absolute right-0 top-1/3 w-1  bg-white rounded-full transform -translate-y-1/2 text-xl font-[900] lg:hidden"
          onClick={showNext}
        >
          &rsaquo;
        </button>
      </div>

      {isOpen && (
        <div className="hidden fixed inset-0 lg:flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              className="absolute top-0 bg-transparent right-0 mt-4 mr-4 text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <button
              className="absolute left-0 top-1/2  bg-transparent transform -translate-y-1/2 text-3xl"
              onClick={showPrevious}
            >
              &lsaquo;
            </button>
            <img
              src={images[currentIndex]}
              alt={`Lightbox ${currentIndex}`}
              className="max-h-screen max-w-screen"
            />
            <button
              className="absolute right-0 top-1/2  bg-transparent transform -translate-y-1/2 text-3xl"
              onClick={showNext}
            >
              &rsaquo;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
