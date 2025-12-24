import Banner from "@/components/common/Banner";
import Bannerpartition from "@/components/common/Bannerpartition";
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
          <h4 className="text-primary-blue text-lg font-normal font-work-sans">Home / Doctor</h4>
          <h2 className="text-primary-blue text-5xl font-bold font-yeseva">Our Doctors</h2>
        </div>
      </Banner>
    </div>
      <Bannerpartition/>
    </div>
  );
}

export default page;
