import { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} className="w-full h-64 object-cover" />

      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between">
        <button onClick={prevImage} className="text-white text-2xl focus:outline-none ml-4">
          &#8249;
        </button>
        <button onClick={nextImage} className="text-white text-2xl focus:outline-none mr-4">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
