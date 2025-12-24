import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Welcome() {
  return (
    <section className="mt-28.5 mb-16 px-5">
      <div className="max-w-2xl mx-auto">
        <h3 className="uppercase font-bold font-work-sans text-secondary-blue text-lg text-center tracking-widest">
          welcome to medical
        </h3>
        <h2 className="font-yeseva font-bold text-4xl text-center text-primary-blue ">
          A great place to receive care
        </h2>
        <p className="text-center mt-4 font-work-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga qui
          saepe non nisi quis unde, fugiat tempora, doloremque provident sit
          accusamus repudiandae temporibus numquam vero repellat accusantium
        </p>
        <div className="flex justify-center mt-8">
        <Link href={"/about"} className="bg-none tracking-wider font-work-sans text-secondary-blue">
          Learn More &rarr;
        </Link>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
