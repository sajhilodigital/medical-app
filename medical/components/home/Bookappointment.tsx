"use client";

import BookAppointmentForm from "../appointment/BookAppointmentForm";


function Bookappointment() {

  return (
    <section className="pb-16 bg-[url(/images/Appointment-bg.png)] relative">
      <div className="absolute inset-0 bg-stone-50/50 w-full h-full"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-2 relative py-16 items-center">
        <div>
          <h2 className="font-yeseva font-bold text-4xl text-primary-blue">
            Book an appointment
          </h2>
          <p className="py-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            maxime maiores numquam voluptatem, nemo inventore porro rem fugit
            nulla corporis.
          </p>
        </div>

        <BookAppointmentForm/>
      </div>
    </section>
  );
}

export default Bookappointment;
