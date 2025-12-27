"use client";

import { useEffect, useRef, useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const newsData = [
  { title: "Article 1", date: "Mon 05 Sep 2021", views: 68, likes: 72, image: "/images/news.png" },
  { title: "Article 2", date: "Mon 05 Sep 2021", views: 68, likes: 72, image: "/images/doctor3.jpg" },
  { title: "Article 3", date: "Mon 05 Sep 2021", views: 68, likes: 86, image: "/images/news.png" },
  { title: "Article 4", date: "Mon 05 Sep 2021", views: 68, likes: 86, image: "/images/doctor2.jpg" },
  { title: "Article 5", date: "Mon 05 Sep 2021", views: 68, likes: 86, image: "/images/news.png" },
  { title: "Article 6", date: "Mon 05 Sep 2021", views: 72, likes: 86, image: "/images/doctor1.jpg" },
  { title: "Article 7", date: "Mon 05 Sep 2021", views: 68, likes: 86, image: "/images/news.png" },
  { title: "Article 8", date: "Mon 05 Sep 2021", views: 72, likes: 86, image: "/images/doctor3.jpg" },
];

const CARD_WIDTH = 560; // width of one card
const GAP = 24;
const VISIBLE_COUNT = 4; // 2x2 grid

export default function NewsCarouselGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  // const [paused, setPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(newsData.length / VISIBLE_COUNT);

  useEffect(() => {
    // if (paused) return;
    const interval = setInterval(() => handleNext(), 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "transform 0.6s ease";
    track.style.transform = `translateX(-${CARD_WIDTH * 2 + GAP * 2}px)`; // move 2 columns

    setTimeout(() => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";

      // Move first 4 items to the end for infinite loop
      for (let i = 0; i < VISIBLE_COUNT; i++) {
        track.appendChild(track.children[0]);
      }

      setCurrentIndex((prev) => (prev + 1) % totalSlides);
      setIsAnimating(false);
    }, 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    const track = trackRef.current;
    if (!track) return;

    // Move last 4 items to start for infinite loop
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      track.insertBefore(track.lastElementChild!, track.firstElementChild);
    }

    track.style.transition = "none";
    track.style.transform = `translateX(-${CARD_WIDTH * 2 + GAP * 2}px)`;

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
      className="py-16"
      // onMouseEnter={() => setPaused(true)}
      // onMouseLeave={() => setPaused(false)}
    >
      <div className="text-center mb-12">
        <h1 className="text-[#159EEC] tracking-widest uppercase font-semibold">
          Better information, Better health
        </h1>
        <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">News</h2>
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto flex items-center gap-4">
        <button onClick={handlePrev} className="z-10 h-10 w-10 bg-[#159EEC] text-white">‹</button>

        <div className="overflow-hidden w-full py-8 px-3">
          <div
            ref={trackRef}
            className="flex flex-wrap gap-6"
            style={{ width: `${(CARD_WIDTH + GAP) * newsData.length}px` }}
          >
            {[...newsData, ...newsData].map((item, i) => (
              <div key={i} className="flex w-140 bg-white rounded-lg h-40 shadow-md border items-center border-blue-200 overflow-hidden">
                <div className="w-1/3 h-full">
                  <img src={item.image} alt="News" className="h-full object-cover shrink-0" />
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <p className="text-[#159EEC] text-sm mb-2">{item.date}</p>
                    <h2 className="text-[#1F2B6C] text-lg font-semibold">{item.title}</h2>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1 text-[#159EEC]">
                      <MdOutlineRemoveRedEye /> {item.views}
                    </div>
                    <div className="flex items-center gap-1 text-red-500">
                      <CiHeart /> {item.likes}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleNext} className="z-10 h-10 w-10 bg-[#159EEC] text-white">›</button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-6">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`h-3 w-3 rounded-full transition-all ${
              currentIndex === i ? 'bg-[#159EEC] scale-110' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
