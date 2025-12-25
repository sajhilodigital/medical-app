"use client";

function Map() {
  return (
    <section className="pt-16">
      <div className="max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1954943560672!2d83.45938457563953!3d27.68035207619805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968758f481d105%3A0xf2fb47796be9125!2sSajilo%20Digital%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1766566490632!5m2!1sen!2snp"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-none"
        />
      </div>
    </section>
  );
}

export default Map;
