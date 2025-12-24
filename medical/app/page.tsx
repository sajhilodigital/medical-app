import Appointment from "@/components/home/Appointment";
import Banner from "@/components/common/Banner";
import Herosection from "@/components/home/Herosection";
import Welcome from "@/components/home/Welcome";
import Bannerpartition from "@/components/common/Bannerpartition";
import Service from "@/components/home/Service";
import Specialties from "@/components/home/Specialties";
import Bookappointment from "@/components/home/Bookappointment";
import OurDoctor from "@/components/home/OurDoctor";
import Contact from "@/components/common/Contact";

export default function Home() {
  return (
    <div className="">
      <Herosection />
      <section className=" absolute w-full bottom-0 z-50 hidden md:block">
        <Appointment />
      </section>
      <Welcome />
      <section className="max-w-7xl mx-auto">
        <Banner />
        <Bannerpartition/>
      </section>
      <Service/>
      <Specialties/>
      <Bookappointment/>
      <OurDoctor/>
      <Contact/>
    </div>
  );
}
