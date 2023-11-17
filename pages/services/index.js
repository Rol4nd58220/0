import { useState } from 'react';

const Services = () => {
  const images = [
    { path: './elementary.jpg', title: 'Elementary' },
    { path: './juniorHighschool.jpg', title: 'Junior Highschool' },
    { path: './seniorHighschool.jpg', title: 'Senior Highschool' },
    { path: '/path/to/image4.jpg', title: 'Title 4' },
    { path: '/path/to/image5.jpg', title: 'Title 5' },
    { path: '/path/to/image6.jpg', title: 'Title 6' },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Services</h1>

      <div className="relative">
        <img
          src={images[currentImage].path}
          alt={images[currentImage].title}
          className={`w-full h-64 object-cover ${currentImage === 0 ? 'block' : 'hidden'}`}
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-white">
          <h2 className="text-xl font-bold mb-2">{images[currentImage].title}</h2>
          <div className="flex items-center justify-between w-full">
            <button onClick={prevImage} className="text-white text-2xl focus:outline-none ml-4">
              &#8249;
            </button>
            <button onClick={nextImage} className="text-white text-2xl focus:outline-none mr-4">
              &#8250;
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {images.map((image, index) => (
          <div key={index} className={`relative ${index === currentImage ? 'hidden' : 'block'}`}>
            <img src={image.path} alt={image.title} className="w-full h-40 object-cover mb-2" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
              <h3 className="text-sm font-bold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
