"use client";

import { useEffect, useRef, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    author: "Sunil Paudyal",
  },
  {
    id: 2,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    author: "Bijay Sexy",
  },
  {
    id: 3,
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
    author: "Arun sama",
  },
];

const CARD_WIDTH = 400; // width of one testimonial card (adjust as needed)
const GAP = 0; // no gap since single card visible

export default function Testimonial() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${CARD_WIDTH + GAP}px)`;

    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";

      // Move first testimonial to the end for infinite loop
      track.appendChild(track.children[0]);

      setCurrentIndex((prev) => (prev + 1) % totalSlides);
      setIsAnimating(false);
    }, 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const track = trackRef.current;
    if (!track) return;

    // Move last testimonial to the front for infinite loop
    track.insertBefore(track.lastElementChild!, track.firstElementChild);

    track.style.transition = "none";
    track.style.transform = `translateX(-${CARD_WIDTH + GAP}px)`;

    requestAnimationFrame(() => {
      track.style.transition = "transform 0.6s ease";
      track.style.transform = "translateX(0)";
    });

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      setIsAnimating(false);
    }, 600);
  };

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;

    const diff = (index - currentIndex + totalSlides) % totalSlides;
    for (let i = 0; i < diff; i++) handleNext();
  };

  return (
    <div
      className="flex flex-col items-center justify-center text-white p-10 bg-cover bg-center relative mx-auto"
      style={{ backgroundImage: "url('/images/bgi.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-blue/80"></div>

      {/* Content viewport */}
      <div className="relative z-10 w-120 pt-16 pb-7.5 overflow-hidden flex justify-center">
        <div
          ref={trackRef}
          className="flex"
          style={{
            width: `${(CARD_WIDTH + GAP) * testimonials.length}px`,
            willChange: "transform",
          }}
        >
          {[...testimonials].map((t) => (
            <div
              key={t.id}
              className="shrink-0 w-100 px-8 text-accent-blue flex flex-col items-center"
            >
              <div className="text-4xl pb-10 flex justify-center text-accent-blue"><FaQuoteRight /></div>
              <p className="text-center max-w-md text-lg font-work-sans font-normal">{t.text}</p>
              <div className="w-30 border my-4 mx-auto"></div>
              <div className="text-lg font-normal font-work-sans text-center">{t.author}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="relative z-10 flex space-x-2 pb-16">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-accent-blue scale-110" : "bg-white"
              }`}
          />
        ))}
      </div>

      {/* Controls
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
        <button
          onClick={handlePrev}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          aria-label="Previous testimonial"
        >
          ‹
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20">
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div> */}
    </div>
  );
}
