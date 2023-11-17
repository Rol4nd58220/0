import React, { useState } from 'react';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = ['Card 1', 'Card 2', 'Card 3'];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? items.length - 1 : newIndex;
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={handlePrev} className="p-2 bg-gray-200 rounded">Prev</button>
      
      <div className="relative w-full max-w-3xl mx-4">
        <div className="flex justify-center items-center">
          {items.map((item, index) => {
            let scale = 1;
            let opacity = 1;
            if (index !== activeIndex) {
              scale = 0.8;
              opacity = 0.5;
            }
            return (
              <div
                key={index}
                style={{
                  transform: `translateX(${(index - activeIndex) * 150}px) scale(${scale})`,
                  opacity: opacity,
                  transition: 'transform 0.5s, opacity 0.5s',
                  position: 'absolute',
                }}
                className="w-64 h-32 p-4 border rounded"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={handleNext} className="p-2 bg-gray-200 rounded">Next</button>
    </div>
  );
};

export default Services;
