import Banner from "@/components/common/Banner";
import Bannerpartition from "@/components/common/Bannerpartition";
import DoctorCard from "@/components/doctor/DoctorCard";
import Contact from "@/components/home/Contact";

function page() {
  const doctors = [
    { id: 1, name: "Dr. John Doe", image: "/images/doctor1.jpg" },
    { id: 2, name: "Dr. Alex Smith", image: "/images/doctor2.jpg" },
    { id: 3, name: "Dr. Maria Lee", image: "/images/doctor3.jpg" },
    { id: 1, name: "Dr. John Doe", image: "/images/doctor1.jpg" },
    { id: 2, name: "Dr. Alex Smith", image: "/images/doctor2.jpg" },
    { id: 3, name: "Dr. Maria Lee", image: "/images/doctor3.jpg" },
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
              Home / Doctor
            </h4>
            <h2 className="text-primary-blue text-5xl font-bold font-yeseva">
              Our Doctors
            </h2>
          </div>
        </Banner>
      </div>
      <Bannerpartition />
      <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto pt-16">
        {doctors.map((doc, i) => (
          <DoctorCard img={doc.image} name={doc.name} key={i} />
        ))}
      </div>
      <Contact/>
    </div>
  );
}

export default page;
