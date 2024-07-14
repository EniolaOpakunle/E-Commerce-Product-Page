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
      <div className="grid grid-cols-1 gap-4">
        <img
          src={images[imgName]}
          alt={`Thumbnail 0`}
          className="cursor-pointer w-[540px] h-[350px] rounded-lg"
          onClick={() => openLightbox(imgName)}
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
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
