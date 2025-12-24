"use client";

import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const doctors = [
  { id: 1, name: "Dr. John Doe", image: "/images/doctor1.jpg" },
  { id: 2, name: "Dr. Alex Smith", image: "/images/doctor2.jpg" },
  { id: 3, name: "Dr. Maria Lee", image: "/images/doctor3.jpg" },
];

const CARD_WIDTH = 372;

export default function DoctorCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [paused, currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "transform 0.5s ease";
    track.style.transform = `translateX(-${CARD_WIDTH}px)`;

    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      track.appendChild(track.children[0]);
      setCurrentIndex((prev) => (prev + 1) % doctors.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "none";
    track.insertBefore(track.lastElementChild!, track.firstElementChild);
    track.style.transform = `translateX(-${CARD_WIDTH + 40}px)`;

    requestAnimationFrame(() => {
      track.style.transition = "transform 0.5s ease";
      track.style.transform = "translateX(0)";
    });

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Carousel */}
      <div className="relative flex items-center gap-4">
        {/* Prev */}
        <button
          onClick={handlePrev}
          className="z-10 flex h-10 w-10 items-center justify-center bg-primary-blue text-white hover:bg-secondary-blue"
        >
          ‹
        </button>

        {/* Viewport */}
        <div className="overflow-hidden w-full">
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{ width: "max-content" }}
          >
            {[...doctors, ...doctors].map((doc, i) => (
              <div
                key={i}
                className="w-93 shrink-0 overflow-hidden border bg-white shadow-md"
              >
                {/* Image */}
                <div className="h-88 w-full">
                  <img
                    src={doc.image}
                    alt="Doctor"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Info */}
                <div className="bg-accent-blue px-5 py-4 text-center">
                  <h3 className="text-lg font-normal font-work-sans text-blue-900">
                    {doc.name}
                  </h3>
                  <p className="mt-1 text-xl font-bold tracking-widest text-primary-blue">
                    NEUROLOGY
                  </p>

                  <div className="mt-4 flex justify-center gap-4">
                    {[FaLinkedinIn, FaFacebookF, FaInstagram].map(
                      (Icon, idx) => (
                        <span
                          key={idx}
                          className="flex h-9 w-9 items-center justify-center bg-primary-blue text-accent-blue rounded-full hover:bg-accent-blue cursor-pointer hover:text-primary-blue"
                        >
                          <Icon size={18} />
                        </span>
                      )
                    )}
                  </div>
                </div>

                <button className="w-full bg-primary-blue py-3 text-base font-work-sans text-accent-blue tracking-wider hover:text-white transition-all duration-200 ease-in cursor-pointer hover:bg-secondary-blue">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          className="z-10 flex h-10 w-10 items-center justify-center bg-primary-blue text-white hover:bg-secondary-blue"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-3">
        {doctors.map((_, i) => (
          <button
            title="dots"
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-4 w-4 rounded-full transition-all ${
              currentIndex === i
                ? "bg-primary-blue scale-110"
                : "bg-accent-blue"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
