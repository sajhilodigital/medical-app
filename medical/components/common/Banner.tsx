import React from "react";

function Banner({children}:{children:React.ReactNode}) {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full h-80 bg-[url(/images/Backdoctor.png)] bg-top">
        <div className="max-w-7xl mx-auto h-full">
          {children}
        </div>
        <div className="h-96 w-96 rounded-full absolute -top-50 -left-50 bg-secondary-blue/40"></div>
        <div className="h-96 w-96 rounded-full absolute -bottom-50 -right-50 bg-accent-blue/40"></div>
      </div>      
    </section>
  );
}

export default Banner;
