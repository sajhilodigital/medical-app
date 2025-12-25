"use client"
import React, { useState } from "react";
import { Button } from "../ui/button";

function BookAppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    department: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      gender: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      doctor: "",
      department: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form action="" className="bg-primary-blue rounded-sm overflow-hidden" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name "
          onChange={handleChange}
          value={formData.name}
          className="border py-3 px-4 text-white outline-none placeholder:text-white text-base font-work-sans font-light"
        />
        <select
          title="gender"
          name="gender"
          onChange={handleChange}
          value={formData.gender}
          className="border py-3 px-3 text-white outline-none placeholder:text-white text-base font-work-sans font-light bg-primary-blue "
        >
          <option value="" disabled  >
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="grid grid-cols-2">
        <input
          type="text"
          name="email"
          placeholder="Email "
          onChange={handleChange}
          value={formData.email}
          className="border py-3 px-4 text-white outline-none placeholder:text-white text-base font-work-sans font-light"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone "
          onChange={handleChange}
          value={formData.phone}
          className="border py-3 px-4 text-white outline-none placeholder:text-white text-base font-work-sans font-light"
        />
      </div>
      <div className="grid grid-cols-2">
        <select
          title="date"
          name="date"
          onChange={handleChange}
          value={formData.date}
          className="border py-3 px-3 text-white outline-none placeholder:text-white text-base font-work-sans font-light bg-primary-blue "
        >
          <option value="" disabled  >
            Date
          </option>
          <option value="2025-12-24">2025 - 12 - 24</option>
          <option value="2025-12-24">2025 - 12 - 24</option>
          <option value="2025-12-24">2025 - 12 - 24</option>
        </select>
        <select
          title="time"
          name="time"
          onChange={handleChange}
          value={formData.time}
          className="border py-3 px-3 text-white outline-none placeholder:text-white text-base font-work-sans font-light bg-primary-blue "
        >
          <option value="" disabled  >
            Time
          </option>
          <option value="10:00AM">10:00 AM</option>
          <option value="1:00PM">1:00 PM</option>
          <option value="4:00PM">4:00 PM</option>
        </select>
      </div>
      <div className="grid grid-cols-2">
        <select
          title="doctor"
          name="doctor"
          onChange={handleChange}
          value={formData.doctor}
          className="border py-3 px-3 text-white outline-none placeholder:text-white text-base font-work-sans font-light bg-primary-blue "
        >
          <option value="" disabled  >
            Doctor
          </option>
          <option value="Dr.Ram">Dr. Ram</option>
          <option value="Dr.Krishna">Dr. Krishna</option>
          <option value="Dr.Mahadev">Dr. Mahadev</option>
        </select>
        <select
          title="department"
          name="department"
          onChange={handleChange}
          value={formData.department}
          className="border py-3 px-3 text-white outline-none placeholder:text-white text-base font-work-sans font-light bg-primary-blue "
        >
          <option value="" disabled  >
            Department
          </option>
          <option value="Neurology">Neurology</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Hematology">Hematology</option>
          <option value="Endocrinology">Endocrinology</option>
          <option value="Dermatology">Dermatology</option>
          <option value="Nephrology">Nephrology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Radiology">Radiology</option>
          <option value="Psychiatry">Psychiatry</option>
          <option value="Ophthalmology">Ophthalmology</option>
          <option value="Otolaryngology">Otolaryngology</option>
          <option value="Orthopedics">Orthopedics</option>
        </select>
      </div>
      <textarea
        name="message"
        rows={6}
        placeholder="Message"
        onChange={handleChange}
        value={formData.message}
        className="w-full py-3 px-4 text-white outline-none placeholder:text-white text-base font-work-sans font-light"
      ></textarea>
      <Button className="w-full bg-accent-blue py-5 text-primary-blue rounded-none text-base hover:bg-secondary-blue hover:text-white font-work-sans cursor-pointer">
        Submit
      </Button>
    </form>
  );
}

export default BookAppointmentForm;
