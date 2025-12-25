import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
interface DoctorCardProps {
  img: string;
  name: string;
}

function DoctorCard({ img, name }: DoctorCardProps) {
  return (
    <div className="w-93 shrink-0 overflow-hidden border rounded bg-white shadow-md">
      {/* Image */}
      <div className="h-88 w-full">
        <img
          src={img}
          alt="Doctor"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Info */}
      <div className="bg-accent-blue px-5 py-4 text-center">
        <h3 className="text-lg font-normal font-work-sans text-blue-900">
          {name}
        </h3>
        <p className="mt-1 text-xl font-bold tracking-widest text-primary-blue">
          NEUROLOGY
        </p>

        <div className="mt-4 flex justify-center gap-4">
          {[FaLinkedinIn, FaFacebookF, FaInstagram].map((Icon, idx) => (
            <span
              key={idx}
              className="flex h-9 w-9 items-center justify-center bg-primary-blue text-accent-blue rounded-full hover:bg-accent-blue cursor-pointer hover:text-primary-blue"
            >
              <Icon size={18} />
            </span>
          ))}
        </div>
      </div>

      <button className="w-full bg-primary-blue py-3 text-base font-work-sans text-accent-blue tracking-wider hover:text-white transition-all duration-200 ease-in cursor-pointer hover:bg-secondary-blue">
        View Profile
      </button>
    </div>
  );
}

export default DoctorCard;
