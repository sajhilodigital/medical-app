import React from "react";
import ContactInfo from "../common/ContactInfo";

function Contact() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto">
        <h3 className="uppercase font-bold font-work-sans text-secondary-blue text-lg text-center tracking-widest">
          Get in touch
        </h3>
        <h2 className="font-yeseva font-bold text-4xl text-center text-primary-blue">
          Contact
        </h2>
        <ContactInfo />
      </div>
    </section>
  );
}

export default Contact;
