// import { title } from "process";
// import React from "react";
// import { MdOutlineHealing } from "react-icons/md";

// function Service() {
//   const services = [
//     { icon: <MdOutlineHealing />, title: "Free Checkup" },
//     { icon: <MdOutlineHealing />, title: "Free Checkup" },
//     { icon: <MdOutlineHealing />, title: "Free Checkup" },
//     { icon: <MdOutlineHealing />, title: "Free Checkup" },
//   ];

//   return (
//     <section className="py-16">
//       <h3 className="uppercase font-bold font-work-sans text-secondary-blue text-lg text-center tracking-widest">
//         Care you can believe in
//       </h3>
//       <h2 className="font-yeseva font-bold text-4xl text-center text-primary-blue ">
//         Our Services
//       </h2>
//       <section className="pt-16 grid grid-cols-3 max-w-7xl mx-auto">
//         <div className="border rounded">
//           {services.map((val, i) => (
//             <div className="flex justify-center flex-col items-center p-6">
//               <div className="text-3xl text-secondary-blue pb-2"> {val.icon}</div>
//               <p>{val.title}</p>
//             </div>
//           ))}
//         </div>
//         <div></div>
//         <div></div>
//       </section>
//     </section>
//   );
// }

// export default Service;

"use client";

import React, { useState } from "react";
import { MdOutlineHealing } from "react-icons/md";
import { FaHeartbeat, FaDna } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { Button } from "../ui/button";
import Link from "next/link";

function Service() {
  const [active, setActive] = useState(0);

  const services = [
    {
      icon: <MdOutlineHealing />,
      title: "Free Checkup",
      points: [
        "A Passion for Healing",
        "Preventive Health Care",
        "Expert Medical Advice",
        "Affordable Services",
        "Patient-Centered Care",
        "Always Caring",
      ],
      desc: "Our free checkup services focus on early diagnosis and preventive care to help you maintain a healthy lifestyle with expert guidance.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Cardiogram",
      points: [
        "Advanced ECG Monitoring",
        "Accurate Heart Analysis",
        "Experienced Cardiologists",
        "Fast & Reliable Reports",
        "Early Detection of Risks",
        "Safe & Non-Invasive",
      ],
      desc: "We provide reliable cardiogram services using advanced equipment to monitor heart health and detect potential issues early.",
    },
    {
      icon: <FaDna />,
      title: "DNA Testing",
      points: [
        "Accurate Genetic Testing",
        "Confidential Reports",
        "Disease Risk Assessment",
        "Ancestry Analysis",
        "Advanced Lab Technology",
        "Trusted Results",
      ],
      desc: "Our DNA testing services deliver accurate and confidential genetic insights to help you understand health risks and ancestry.",
    },
    {
      icon: <BiTestTube />,
      title: "Blood Bank",
      points: [
        "Safe Blood Storage",
        "24/7 Availability",
        "Screened Blood Units",
        "Emergency Support",
        "Qualified Staff",
        "Reliable Supply Chain",
      ],
      desc: "Our blood bank ensures the availability of safe and screened blood units with round-the-clock support for emergencies.",
    },
  ];

  return (
    <section className="py-16 font-work-sans">
      {/* Heading */}
      <h3 className="uppercase font-bold font-work-sans text-secondary-blue text-lg text-center tracking-widest">
        Care you can believe in
      </h3>
      <h2 className="font-yeseva font-bold text-4xl text-center text-primary-blue">
        Our Services
      </h2>

      {/* Content */}
      <section className="pt-16 grid grid-cols-1 md:grid-cols-[1fr_3fr_2fr] gap-10 max-w-7xl mx-auto px-4">
        {/* Left Sidebar */}
        <div className="border rounded-lg overflow-hidden h-fit">
          <div className=" grid max-md:grid-cols-2 ">
            {services.map((val, i) => (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`flex flex-col items-center p-6 cursor-pointer transition
                ${
                  active === i
                    ? "bg-primary-blue text-accent-blue"
                    : "hover:bg-gray-50"
                }`}
              >
                <div
                  className={`text-3xl pb-2 ${
                    active === i ? "text-accent-blue" : "text-secondary-blue"
                  }`}
                >
                  {val.icon}
                </div>
                <p className="font-medium">{val.title}</p>
              </div>
            ))}
          </div>
          <Link
            href={"/services"}
            className="
    block w-full text-center
    bg-primary-blue text-lg text-accent-blue
    py-3
    hover:bg-secondary-blue hover:text-primary-blue
    transition-all duration-200
  "
          >
            View All
          </Link>
        </div>

        {/* Middle Content */}
        <div className="w-full hidden md:block pt-10">
          <h3 className="text-2xl font-work-sans font-medium text-primary-blue mb-4">
            A passion for putting patients first.
          </h3>

          <div className="grid grid-cols-2 gap-3 mb-6">
            {services[active].points?.map((point, i) => (
              <p key={i} className="flex items-center gap-2 text-lg text-gray-900">
                <span className="w-4 h-4 rounded-full text-lg bg-secondary-blue"></span>
                {point}
              </p>
            ))}
          </div>

          <p className="text-gray-900 leading-relaxed">
            {services[active].desc}
          </p>
        </div>

        {/* Right Images */}
        <div className="md:grid grid-rows-2 gap-4 hidden">
          <img
            src="https://images.unsplash.com/photo-1600959907703-125ba1374a12"
            alt="Doctor checking patient"
            className="rounded-lg object-cover h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1600959907703-125ba1374a12"
            alt="Medical team"
            className="rounded-lg object-cover h-full"
          />
        </div>
      </section>
    </section>
  );
}

export default Service;
