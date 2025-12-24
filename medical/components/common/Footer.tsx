import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-primary-blue px-5">
      <div className="max-w-7xl py-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 py-10  gap-14">
          <div>
            <Link href={"/"} className="text-3xl md:text-4xl font-bold text-accent-blue font-yeseva  uppercase">
              Medical
            </Link >
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-work-sans">
              Important Links
            </h3>
            <div className="flex flex-col mt-10 text-white">
              <Link href="/appointment">Appointment</Link>
              <Link href="/doctor">Doctors</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About us</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-work-sans">Contact us</h3>
            <div className="flex flex-col mt-10 text-white font-work-sans">
              <Link href="/appointment">Call: +977-9812345678</Link>
              <Link href="/doctor">Email: medical@gmail.com</Link>
              <Link href="/services">Address: Butwal</Link>
              <Link href="/about">Nepal</Link>
            </div>
          </div>
          <div>
            <h3 className="text-white text-lg font-work-sans">Newsletter</h3>
            <div className="flex relative flex-col mt-10 text-white font-work-sans">
              <input
                type="email"
                className="py-3.5 px-2.5 bg-accent-blue rounded text-primary-blue focus:ring focus:ring-primary-blue outline-none placeholder:text-primary-blue"
                placeholder="Enter your email"
              />
              <BsFillSendFill
                className="text-primary-blue absolute right-3 top-1/2 -translate-y-1/2"
                size={24}
              />
            </div>
          </div>
        </div>
        <hr className="bg-accent-blue w-full" />
        <div className="flex justify-between mt-10">
          <p className="text-accent-blue">
            &copy; 2025 Medical store. All right reserved. Developed by Sajilo
            Digital&trade;
          </p>
          <div className="flex gap-5">
            <FaInstagram
              className="bg-accent-blue p-1.5  rounded-full hover:bg-primary-blue hover:text-accent-blue cursor-pointer transition-all ease-in duration-300 text-primary-blue"
              size={40}
            />
            <FaFacebookF
              className="bg-accent-blue p-1.5  rounded-full hover:bg-primary-blue hover:text-accent-blue cursor-pointer transition-all ease-in duration-300 text-primary-blue"
              size={40}
            />
            <FaLinkedinIn
              className="bg-accent-blue p-1.5  rounded-full hover:bg-primary-blue hover:text-accent-blue cursor-pointer transition-all ease-in duration-300 text-primary-blue"
              size={40}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
