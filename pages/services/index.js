import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  const [items, setItems] = useState([]); // State to store your items
  const [page, setPage] = useState(0);    // State to track the current page
  const loader = useRef(null);

  useEffect(() => {
    // Function to fetch data
    const fetchMoreData = () => {
      // Fetch data and update state
      // This is a mock function, replace with your data fetching logic
      const moreItems = new Array(10).fill(null).map((_, index) => `Item ${(page * 10) + index + 1}`);
      setItems(prevItems => [...prevItems, ...moreItems]);
      setPage(prevPage => prevPage + 1);
    };

    // IntersectionObserver callback
    const handleObserver = (entities) => {
      const target = entities[0];
      if (target.isIntersecting) {
        fetchMoreData();
      }
    };

    // Creating an IntersectionObserver
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, option);

    // Observing the 'loader' element
    if (loader && loader.current) {
      observer.observe(loader.current);
    }

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []); // Empty array ensures effect runs only once on mount

  return (
    <div>
      <h2>Services</h2>
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
      {/* Loader element at the bottom */}
      <div ref={loader} />
    </div>
  );
};

export default Services;
