import React, { useState } from 'react';

const Services = () => {
  const [items, setItems] = useState(['Card 1', 'Card 2', 'Card 3']); // Your items here
  const [activeIndex, setActiveIndex] = useState(0); // Index of the active card

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={handlePrev} className="p-2 bg-gray-200 rounded">Prev</button>
      
      <div className="relative mx-4">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-32 p-4 border rounded transition-all duration-500 ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-50 scale-75'}`}
            style={{
              zIndex: index === activeIndex ? 2 : 1,
              filter: index === activeIndex ? 'none' : 'blur(4px)',
              transitionDelay: index === activeIndex ? '0.1s' : '0s'
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <button onClick={handleNext} className="p-2 bg-gray-200 rounded">Next</button>
    </div>
  );
};

export default Services;