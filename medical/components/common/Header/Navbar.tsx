"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuSearch } from "react-icons/lu";

export const navItems = [
  {
    item: "Home",
    path: "/",
  },
  {
    item: "About us",
    path: "/about",
  },
  {
    item: "Services",
    path: "/services",
  },
  {
    item: "Doctors",
    path: "/doctor",
  },
  {
    item: "News",
    path: "/news",
  },
  {
    item: "Contact us",
    path: "/contact",
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-primary-blue text-white py-7 ">
      <div className="max-w-7xl flex justify-between items-center mx-auto">
        <div className="hidden md:block">
          <div className="flex gap-5">
            {navItems.map((val, i) => (
              <Link
                key={i}
                href={val.path}
                className={`${
                  pathname === val.path ? "font-medium border-b" : "font-normal"
                } transition-all duration-200 ease-in`}
              >
                {val.item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-7 items-center">
          <LuSearch className="text-white" size={20} />
          <Button className="font-work-sans bg-accent-blue text-primary-blue rounded-full py-5 px-5 text-base hover:bg-secondary-blue cursor-pointer transition-all duration-600 ease-in hover:text-white ">
            Appointment
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
