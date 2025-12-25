"use client";
import { useState } from "react";
import { Button } from "../ui/button";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
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
    <form
      action=""
      className="bg-primary-blue rounded-sm overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name "
          onChange={handleChange}
          value={formData.name}
          className="border py-3 px-4 text-white outline-none placeholder:text-white text-base font-work-sans font-light"
        />

        <input
          type="text"
          name="email"
          placeholder="Email "
          onChange={handleChange}
          value={formData.email}
          className="border py-3 px-4 text-white outline-none placeholder:text-white text-base font-work-sans font-light"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject "
        onChange={handleChange}
        value={formData.subject}
        className="border py-3 px-4 w-full text-white outline-none placeholder:text-white text-base font-work-sans font-light"
      />

      <textarea
        name="message"
        rows={10}
        placeholder="Message"
        onChange={handleChange}
        value={formData.message}
        className="w-full py-3 px-4 text-white outline-none placeholder:text-white text-base font-work-sans font-light"
      ></textarea>
      <Button className="w-full uppercase bg-accent-blue py-6 text-primary-blue rounded-none text-base hover:bg-secondary-blue hover:text-white font-work-sans cursor-pointer">
        Submit
      </Button>
    </form>
  );
}

export default GetInTouch;
