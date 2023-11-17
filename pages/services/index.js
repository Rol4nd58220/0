import React, { useState } from 'react';

const Services = () => {
  const [items, setItems] = useState(['Card 1', 'Card 2', 'Card 3']); // Your items
  const [activeIndex, setActiveIndex] = useState(0); // Index of the active card

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="flex items-center justify-between h-screen px-4">
      <button onClick={handlePrev} className="p-2 bg-gray-200 justify-end rounded">Prev</button>
      
      <div className="flex overflow-hidden relative mx-4" style={{ height: '200px', width: 'calc(100% - 8rem)' }}>
        {items.map((item, index) => (
          <div 
            key={index}
            className={`absolute w-64 h-full p-4 border rounded transition-all duration-500 ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-50 scale-75'}`}
            style={{
              zIndex: index === activeIndex ? 2 : 1,
              filter: index === activeIndex ? 'none' : 'blur(4px)',
              left: `${index * 70}%`, // Adjust this value for spacing between cards
              transform: 'translateX(-50%)'
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <button onClick={handleNext} className="p-2 bg-gray-200 justify-start rounded">Next</button>
    </div>
  );
};

export default Services;
