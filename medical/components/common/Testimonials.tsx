"use client";
import { useState } from "react";

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

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div
      className="flex flex-col items-center justify-center text-white p-10 bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/bgi.png')" }}
    >
      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-blue-900/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-4xl mb-4">“</div>

        <p className="text-center max-w-md text-lg">
          {testimonials[current].text}
        </p>

        <div className="mt-6 text-lg font-semibold">
          {testimonials[current].author}
        </div>

        <div className="flex mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-blue-200" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
