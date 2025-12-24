import React from "react";
import DoctorCarousel from "../common/DoctorCarousel";

function OurDoctor() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="uppercase font-bold font-work-sans text-secondary-blue text-lg text-center tracking-widest">
          Trusted care
        </h3>
        <h2 className="font-yeseva font-bold text-4xl text-center text-primary-blue">
          Our Doctors
        </h2>
        <div className="pt-16">
        <DoctorCarousel/>
        </div>
      </div>
    </section>
  );
}

export default OurDoctor;
