import React from "react";
import { IoMdTime } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { PiPhoneCall } from "react-icons/pi";
import {Navbar} from "./Navbar";

function Header() {
  const infoItems = [
    {
      title: "Emergency",
      icon: <PiPhoneCall size={35} />,
      value: "+977-9812345678",
    },
    {
      title: "Work Hour",
      icon: <IoMdTime size={35} />,
      value: "09:00 - 20:00 Everyday",
    },
    {
      title: "Location",
      icon: <SlLocationPin size={35} />,
      value: "Butwal",
    },
  ];

  return (
    <header>
      <div className="flex max-w-7xl mx-auto justify-between">
        <div className="py-5">
          <span className="text-primary-blue text-4xl font-yeseva font-bold">
            MED
          </span>
          <span className="text-secondary-blue text-4xl font-yeseva font-bold">
            ICAL
          </span>
        </div>
        <div className="flex gap-6">
          {infoItems.map((val, i) => (
            <div key={i} className="flex items-center gap-2 ">
              <div>{val.icon}</div>
              <div>
                <p className="uppercase font-work-sans text-primary-blue text-base font-medium">
                  {val.title}
                </p>
                <p className="text-secondary-blue text-base font-medium">
                  {val.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
