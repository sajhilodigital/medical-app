import Link from "next/link";
import { Button } from "../ui/button";

function Herosection() {
  return (
    <section className="bg-[url(/images/herobg.jpg)] bg-cover bg-center overflow-hidden relative h-150">
      <div className="absolute w-full h-full bg-stone-50/50">
        <div className="absolute w-sm h-96 rounded-full bg-secondary-blue/50 -left-30 -top-60"></div>
        <div className="absolute w-sm h-96 rounded-full bg-accent-blue/50 -right-40 -bottom-40"></div>
        <div className="max-w-7xl mx-auto h-full flex items-center justify-center md:justify-between">
          <div className="md:w-1/2">
            <h3 className="uppercase font-work-sans text-lg mb-1 tracking-widest font-bold text-secondary-blue max-md:text-center">
              Caring for life
            </h3>
            <h1 className="font-yeseva text-5xl text-primary-blue font-bold max-md:text-center">
              Leading the Way <br /> in Medical Excellence
            </h1>
            <Link href={"/services"} className="flex max-md:justify-center">
              <Button className="font-work-sans font-medium text-base bg-accent-blue rounded-full text-primary-blue px-9 py-5 hover:bg-secondary-blue cursor-pointer transition-all duration-200 ease-in hover:text-white mt-8">
                Our Services
              </Button>
            </Link>
          </div>
          <img
            src="/images/hero-image.png"
            alt=""
            className="w-110 z-10 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
