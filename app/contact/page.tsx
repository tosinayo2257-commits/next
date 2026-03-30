"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

type FormData = {
  fullName: string;
  email: string;
  topic: string;
  message: string;
  agree: boolean;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    topic: "",
    message: "",
    agree: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please agree to the Terms of Use and Privacy Policy");
      return;
    }

    console.log(formData);
    alert("Form submitted!");

    setFormData({
      fullName: "",
      email: "",
      topic: "",
      message: "",
      agree: false,
    });
  };

  return (
    <section className="px-4 md:px-10">
      <div className="bg-[#362FF6] rounded-xl py-8 px-6 md:px-20 md:py-16 max-w-6xl mx-auto mt-6 text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
          Contact Our Support Team
        </h1>

        <p className="font-medium text-white/90 text-sm md:text-base max-w-2xl mx-auto">
          Have a specific question or need assistance? Reach out to our
          dedicated support team.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto mt-10 bg-white rounded-xl p-6 md:p-2 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-black">Full Name</label>

            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="pl-10 p-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#362FF6] w-full"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-black">Email</label>

            <div className="relative">
              <IoMdMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="pl-10 p-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#362FF6] w-full"
                required
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-black">
            Topic of complaint
          </label>

          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            placeholder="Enter topic of complaint"
            className="p-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#362FF6] w-full"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium text-black">Message</label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            className="p-3 border border-gray-200 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#362FF6] h-32 resize-none w-full"
            required
          />
        </div>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-[#362FF6]"
          />

          <label className="text-sm text-gray-700">
            I agree with{" "}
            <span className="font-medium">Tradetrust Terms of Use</span> and{" "}
            <span className="font-medium">Privacy Policy</span>
          </label>
        </div>

        <button className="mt-6 flex items-center gap-2 bg-[#362FF6] text-white px-6 py-3 rounded-xl hover:bg-[#DEDEF2] hover:text-[#362FF6] transition">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
