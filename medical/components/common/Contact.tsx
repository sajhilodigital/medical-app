import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCall } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { FiMail } from "react-icons/fi";
function Contact() {
  const contactInfo = [
    {
      title: "Emergency",
      icons: <PiPhoneCall />,
      items: ["BUtwal", "Bhairahawa"],
    },
    {
      title: "Location",
      icons: <SlLocationPin />,
      items: ["BUtwal", "Bhairahawa"],
    },
    {
      title: "Email",
      icons: <FiMail />,
      items: ["BUtwal", "Bhairahawa"],
    },
    {
      title: "Working Hours",
      icons: <IoMdTime />,
      items: ["BUtwal", "Bhairahawa"],
    },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="uppercase font-bold font-work-sans text-secondary-blue text-lg text-center tracking-widest">
          Get in touch
        </h3>
        <h2 className="font-yeseva font-bold text-4xl text-center text-primary-blue">
          Contact
        </h2>
        <div className="grid grid-cols-4 gap-5 pt-16">
          {contactInfo.map((val, i) => (
            <div
              key={i}
              className="bg-accent-blue pl-7 pr-4 py-14 text-primary-blue rounded hover:bg-primary-blue hover:text-accent-blue transition-all duration-200 ease-in"
            >
              <div className="md:text-4xl text-3xl font-bold">{val.icons}</div>
              <div className="uppercase font-bold text-lg pt-3">
                {val.title}
              </div>
              <div className="text-sm">
                {val.items.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
