import { PiMoneyLight } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { FaRegCalendarAlt } from "react-icons/fa";

function Appointment() {
  return (
    <section
      className="flex justify-center"
    >
      <div className="flex gap-5 max-w-7xl justify-center items-center">
        <div className="bg-primary-blue px-5 py-6 rounded-sm flex gap-10 items-center">
          <p className="text-white font-normal text-base font-work-sans">
            Book a Appointment
          </p>
          <FaRegCalendarAlt size={40} className="text-white" />
        </div>
        <div className="bg-accent-blue px-5 py-6 rounded-sm flex gap-10 items-center">
          <p className="text-primary-blue font-normal text-base font-work-sans">
            Book a Appointment
          </p>
          <GoPeople size={40} className="text-primary-blue" />
        </div>
        <div className="bg-secondary-blue px-5 py-6 rounded-sm flex gap-10 items-center">
          <p className="text-white font-normal text-base font-work-sans">
            Book a Appointment
          </p>
          <PiMoneyLight size={40} className="text-white" />
        </div>
      </div>
    </section>
  );
}

export default Appointment;
