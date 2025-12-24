import BookAppointmentForm from "@/components/appointment/BookAppointmentForm";
import Banner from "@/components/common/Banner";
import Bannerpartition from "@/components/common/Bannerpartition";
import Contact from "@/components/common/Contact";

import React from "react";

function page() {
  return (
    <div>
      <div className="relative">
        <Banner>
          {/* White Overlay: Positioned absolutely to cover the parent */}
          <div className="absolute inset-0 bg-white/40 z-10"></div>

          {/* Content: Higher z-index to stay above the overlay */}
          <div className="relative flex flex-col justify-center h-full z-20 px-4">
            <h4 className="text-primary-blue text-lg font-normal font-work-sans">
              Home / Appointment
            </h4>
            <h2 className="text-primary-blue text-5xl font-bold font-yeseva">
              Book an Appointment
            </h2>
          </div>
        </Banner>
      </div>
      <Bannerpartition />
      <div className="pt-16 grid grid-cols-2 max-w-7xl mx-auto">
        <div>
          <div className="pb-16">          
            <h2 className="font-yeseva font-bold text-4xl text-primary-blue">
              Book an appointment
            </h2>
            <p className="py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              maxime maiores numquam voluptatem, nemo inventore porro rem fugit
              nulla corporis.
            </p>
          </div>
          <BookAppointmentForm />
        </div>
        <div>

        </div>
      </div>
      <Contact />
    </div>
  );
}

export default page;
