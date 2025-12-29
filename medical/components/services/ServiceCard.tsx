import Link from "next/link";
import { title } from "process";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { BiDonateBlood } from "react-icons/bi";
function ServiceCard() {
  const service = [
    {
      image: "/images/BloodCampaign.jpg",
      title: "Blood Donation",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae?",
      icon: <BiDonateBlood />,
    },
    {
      image: "/images/BloodCampaign.jpg",
      title: "Blood Donation",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae?",
      icon: <BiDonateBlood />,
    },
    {
      image: "/images/BloodCampaign.jpg",
      title: "Blood Donation",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae?",
      icon: <BiDonateBlood />,
    },
    {
      image: "/images/BloodCampaign.jpg",
      title: "Blood Donation",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae?",
      icon: <BiDonateBlood />,
    },
    {
      image: "/images/BloodCampaign.jpg",
      title: "Blood Donation",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae?",
      icon: <BiDonateBlood />,
    },
    {
      image: "/images/BloodCampaign.jpg",
      title: "Blood Donation",
      disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, molestiae?",
      icon: <BiDonateBlood />,
    },
  ];
  return (
    <>
      {service.map((val, i) => (
        <div className="w-80 border rounded overflow-hidden" key={i}>
          <div className="w-full h-75 relative cursor-pointer group mb-12">
            <img
              src={val.image}
              alt="Blood donation campaign"
              className="h-full w-full object-cover relative"
            />
            <div className="absolute text-3xl right-4 bg-primary-blue text-white p-4 rounded-full group-hover:hidden -bottom-6">{val.icon}</div>
            <div className="absolute text-6xl text-accent-blue inset-0 w-full h-full bg-primary-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
              {val.icon}
            </div>
          </div>
          <div className="px-5 pb-8">
            <h2 className="font-work-sans text-2xl text-primary-blue font-medium pb-2">
              {val.title}
            </h2>
            <p className="font-work-sans text-base font-normal pb-4">
              {val.disc}
            </p>
            <Link
              href={"/"}
              className="flex gap-2 items-center text-secondary-blue"
            >
              <span className="peer">Learn More</span>
              <GoArrowRight className="peer-hover:translate-x-2 text-primary-blue font-bold text-xl transition-transform duration-300" />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default ServiceCard;
