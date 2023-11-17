import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


const cardData = [
  { title: 'Elementary', image: './elementary.png' },
  { title: 'Junior Highschool', image: './junior-highschool.png' },
  // ... Add more cards with titles and images
  { title: 'Jesse Martinez', image: './jesse-martinez.png' }
];

const Services = () => {
  const galleryRef = useRef();
  const nextButtonRef = useRef();
  const prevButtonRef = useRef();
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current;

    // Create a simple horizontal scroll effect
    gsap.to(cards, {
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: galleryRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (cards.length - 1),
        end: () => "+=" + galleryRef.current.offsetWidth
      }
    });

    // Button event listeners for additional control
    nextButtonRef.current.addEventListener('click', () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.scroll(trigger.scroll() + window.innerWidth));
    });

    prevButtonRef.current.addEventListener('click', () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.scroll(trigger.scroll() - window.innerWidth));
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const cardTitles = ["Elementary", "Junior Highschool", "Senior Highschool", "Mother", "Father", "Jesse Martinez"];

  return (
    <div ref={galleryRef} className="gallery w-full h-screen overflow-hidden">
    <ul className="cards flex">
      {cardData.map((card, index) => (
        <li key={index} ref={el => cardsRef.current[index] = el} className="card bg-purple-500 text-white p-4 rounded-lg shadow-lg m-2 flex flex-col items-center">
          <img src={card.image} alt={card.title} className="w-24 h-24 object-cover rounded-full mb-4" />
          <span>{card.title}</span>
        </li>
      ))}
    </ul>
    <div className="actions absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <button ref={nextButtonRef} className="next bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg mr-2">Next</button>
      <button ref={prevButtonRef} className="prev bg-gray-500 hover:bg-gray-600 text-white p-2 rounded-lg">Prev</button>
    </div>
  </div>
);

export default services;