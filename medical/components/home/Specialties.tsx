"use client";
import React, { useState } from "react";
import { PiHeartbeat } from "react-icons/pi";

function Specialties() {
  const [active, setActive] = useState(0);

  const Specialties = [
    { icon: <PiHeartbeat />, title: "Neurology" },
    { icon: <PiHeartbeat />, title: "Cardiology" },
    { icon: <PiHeartbeat />, title: "Hematology" },
    { icon: <PiHeartbeat />, title: "Endocrinology" },
    { icon: <PiHeartbeat />, title: "Dermatology" },
    { icon: <PiHeartbeat />, title: "Nephrology" },
    { icon: <PiHeartbeat />, title: "Pediatrics" },
    { icon: <PiHeartbeat />, title: "Radiology" },
    { icon: <PiHeartbeat />, title: "Psychiatry" },
    { icon: <PiHeartbeat />, title: "Ophthalmology" },
    { icon: <PiHeartbeat />, title: "Otolaryngology" },
    { icon: <PiHeartbeat />, title: "Orthopedics" },
  ];

  return (
    <section className="py-16">
      <h3 className="uppercase font-bold font-work-sans text-secondary-blue text-lg text-center tracking-widest">
        Always caring
      </h3>
      <h2 className="font-yeseva font-bold text-4xl text-center text-primary-blue">
        Our Specialties
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-4 pt-16">
        {Specialties.map((val, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            className={`border p-12 flex flex-col items-center ${
              active === i ? "bg-primary-blue text-accent-blue rounded" : ""
            }`}
          >
            <div
              className={`text-5xl ${
                active === i ? "text-accent-blue" : "text-secondary-blue"
              }`}
            >
              {val.icon}
            </div>
            <div className="font-work-sans font-normal">{val.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specialties;
