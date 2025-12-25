import React from "react";
import { PiPhoneCall } from "react-icons/pi";

function ScheduleHours() {
  const schedule = [
    { day: "Monday", time: "09:00 AM - 07:00 PM" },
    { day: "Tuesday", time: "09:00 AM - 07:00 PM" },
    { day: "Wednesday", time: "09:00 AM - 07:00 PM" },
    { day: "Thursday", time: "09:00 AM - 07:00 PM" },
    { day: "Friday", time: "09:00 AM - 07:00 PM" },
    { day: "Saturday", time: "09:00 AM - 07:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <div className="bg-primary-blue text-white py-12 px-12.5 rounded-sm">
      {/* Heading */}
      <h2 className="font-yeseva text-5xl text-accent-blue font-bold mb-10 text-center">
        Schedule hours
      </h2>

      {/* Schedule list */}
      <div className="space-y-4">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center text-sm"
          >
            <span className="font-normal font-work-sans text-white text-lg">{item.day}</span>

           <span className="w-3 bg-accent-blue h-px"></span>

            <span className="font-light text-base text-white">
              {item.time}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-white/40 my-6" />

      {/* Emergency */}
      <div className="flex items-center gap-3 justify-center">
        <PiPhoneCall className="text-4xl text-accent-blue" />
        <div className="text-center">
          <p className="font-semibold text-2xl">Emergency</p>
          <p className="text-sm text-accent-blue">(237) 681-812-255</p>
        </div>
      </div>
    </div>
  );
}

export default ScheduleHours;
