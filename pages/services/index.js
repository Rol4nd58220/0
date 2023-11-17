import React, { useState, useEffect } from 'react';

const Services = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    // Function to fetch data
    const fetchMoreData = (newPage) => {
      // Fetch data and update state
      // This is a mock function, replace with your data fetching logic
      const moreItems = new Array(10).fill(null).map((_, index) => `Item ${newPage * 10 + index + 1}`);
      setItems(moreItems);
    };

    fetchMoreData(page);
  }, [page]); // Dependency array ensures effect runs on page change

  // Function to handle page changes
  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Services</h2>
      <div className="flex items-center justify-center my-4">
        <button onClick={handlePrevPage} className="mr-4 p-2 bg-gray-200 rounded">Prev</button>
        <div className="flex flex-col items-center">
          {items.map((item, index) => (
            <div key={index} className="p-2 m-2 border rounded shadow">{item}</div>
          ))}
        </div>
        <button onClick={handleNextPage} className="ml-4 p-2 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
};

export default Services;
