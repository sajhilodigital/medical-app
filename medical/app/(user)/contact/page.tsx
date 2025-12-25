import Banner from "@/components/common/Banner";
import Bannerpartition from "@/components/common/Bannerpartition";

import GetInTouch from "@/components/contact/GetInTouch";
import Map from "@/components/contact/Map";

import { FiMail } from "react-icons/fi";
import { IoMdTime } from "react-icons/io";
import { PiPhoneCall } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

function page() {
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
    <div>
      <div className="relative">
        <Banner>
          {/* White Overlay: Positioned absolutely to cover the parent */}
          <div className="absolute inset-0 bg-white/40 z-10"></div>

          {/* Content: Higher z-index to stay above the overlay */}
          <div className="relative flex flex-col justify-center h-full z-20 px-4">
            <h4 className="text-primary-blue text-lg font-normal font-work-sans">
              Home / Contact
            </h4>
            <h2 className="text-primary-blue text-5xl font-bold font-yeseva">
              Our Contact
            </h2>
          </div>
        </Banner>
      </div>
      <Bannerpartition />
      <Map />
      <div className="max-w-7xl mx-auto grid grid-cols-2 py-16 gap-5">
        <div>
          <h3 className="uppercase font-bold font-work-sans text-secondary-blue text-lg tracking-widest">
            Get in touch
          </h3>
          <h2 className="font-yeseva font-bold text-4xl text-primary-blue pb-8">
            Contact
          </h2>
          <GetInTouch />
        </div>
        <div className="grid grid-cols-2 gap-5">
          {contactInfo.map((val, i) => (
            <div
              key={i}
              className="bg-accent-blue pl-7 pr-4 py-14 text-primary-blue rounded hover:bg-primary-blue hover:text-accent-blue transition-all duration-200 ease-in"
            >
              <div className="md:text-4xl text-3xl font-bold">{val.icon}</div>
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
    </div>
  );
}

export default page;
