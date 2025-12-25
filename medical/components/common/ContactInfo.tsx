import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCall } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { FiMail } from "react-icons/fi";
function ContactInfo() {
  const contactInfo = [
     {
      title: "Emergency",
      icon: <PiPhoneCall />,
      items: ["+977 98XXXXXXXX", "+977 97XXXXXXXX"],
    },
    {
      title: "Location",
      icon: <SlLocationPin />,
      items: ["Butwal", "Bhairahawa"],
    },
    {
      title: "Email",
      icon: <FiMail />,
      items: ["info@example.com", "support@example.com"],
    },
    {
      title: "Working Hours",
      icon: <IoMdTime />,
      items: ["Sun – Fri", "9:00 AM – 5:00 PM"],
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-5 pt-16">
      {contactInfo.map((val, i) => (
        <div
          key={i}
          className="bg-accent-blue pl-7 pr-4 py-14 text-primary-blue rounded hover:bg-primary-blue hover:text-accent-blue transition-all duration-200 ease-in"
        >
          <div className="md:text-4xl text-3xl font-bold">{val.icon}</div>
          <div className="uppercase font-bold text-lg pt-3">{val.title}</div>
          <div className="text-sm">
            {val.items.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactInfo;
