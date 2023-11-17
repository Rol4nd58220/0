import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Services = () => {
  const galleryRef = useRef();
  const nextButtonRef = useRef();
  const prevButtonRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const spacing = 0.1;
    const snap = gsap.utils.snap(spacing);
    const cards = gsap.utils.toArray('.cards li');
    const seamlessLoop = buildSeamlessLoop(cards, spacing);
    const scrub = gsap.to(seamlessLoop, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true
    });

    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        // ... (existing logic)
      },
      end: "+=3000",
      pin: galleryRef.current
    });

    // ... (existing functions: wrapForward, wrapBackward, scrubTo, buildSeamlessLoop)

    nextButtonRef.current.addEventListener("click", () => scrubTo(scrub.vars.totalTime + spacing));
    prevButtonRef.current.addEventListener("click", () => scrubTo(scrub.vars.totalTime - spacing));

    // Cleanup function
    return () => {
      if (nextButtonRef.current && prevButtonRef.current) {
        nextButtonRef.current.removeEventListener("click", scrubTo);
        prevButtonRef.current.removeEventListener("click", scrubTo);
      }
      trigger.kill();
    };

  }, []);

  const cardTitles = ["Elementary", "Junior Highschool", "Senior Highschool", "Mother", "Father", "Jesse Martinez"];

  return (
    <div ref={galleryRef} className="gallery">
      <ul className="cards">
        {cardTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
      <div className="actions">
        <button ref={nextButtonRef} className="next">Next</button>
        <button ref={prevButtonRef} className="prev">Prev</button>
      </div>
    </div>
  );
};

export default Services;
