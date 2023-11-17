import { useState } from 'react';

const Services = () => {
  const images = [
    { path: './elementary.jpg', title: 'Elementary' },
    { path: './juniorHighSchool.jpg', title: 'Junior Highschool' },
    { path: './SeniorHighschool.jpg', title: 'Senior Highschool' },
    { path: './belovedMother.png', title: 'Beloved Mother' },
    { path: './greatDad.png', title: 'Beloved Father' },
    { path: './jesseMartinez.jpg', title: 'Jessie Martirez' },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center m-auto w-full">
      <h1 className="flex items-center justify-center text-3xl font-bold mb-4">Achievements</h1>

      <div className="relative w-full h-full object-contain">
        <img
          src={images[currentImage].path}
          alt={images[currentImage].title}
          className="w-full h-full object-cover"
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
    </div>
  );
};

export default Services;
