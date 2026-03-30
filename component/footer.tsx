"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LiaWhatsapp } from "react-icons/lia";
import { RiTelegram2Fill } from "react-icons/ri";

import Logo from "../public/Logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03022A] mt-16 md:mt-24 px-4 md:px-10 pb-8 flex flex-col items-center gap-12">
      <div className="bg-[#362FF6] w-full max-w-[900px] rounded-b-[24px] py-10 px-5 text-center flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl md:text-[28px] text-white font-semibold">
          Do you have any questions?
        </h2>

        <p className="text-white/90 max-w-[600px] text-sm sm:text-base mt-3">
          Can’t find the answer you’re looking for? Reach out to us and we will
          provide detailed information.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-lg mt-6 border border-white/20 rounded-2xl overflow-hidden"
        >
          <input
            type="text"
            placeholder="Enter your question"
            className="flex-1 h-12 px-4 bg-transparent text-white placeholder-white/70 focus:outline-none"
          />

          <button
            type="submit"
            className="h-12 px-6 bg-white text-[#362FF6] font-semibold text-sm hover:bg-gray-100 transition"
          >
            Send Request
          </button>
        </form>
      </div>

      <div className="bg-white w-full max-w-6xl rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-15">
          <Link href="/">
            <Image
              src={Logo}
              alt="TrustPay Logo"
              width={180}
              height={50}
              priority
            />
          </Link>

          <div className="flex gap-4">
            <a
              href=""
              aria-label="Telegram"
              className="w-11 h-11 flex items-center justify-center bg-[#03022A] text-white rounded-full hover:scale-105 transition"
            >
              <RiTelegram2Fill size={22} />
            </a>

            <a
              href=""
              aria-label="WhatsApp"
              className="w-11 h-11 flex items-center justify-center bg-[#03022A] text-white rounded-full hover:scale-105 transition"
            >
              <LiaWhatsapp size={22} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-800 mb-4 tracking-wide">
            QUICK LINKS
          </h3>

          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <Link href="/" className="hover:text-[#362FF6] transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#362FF6] transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#362FF6] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:items-end gap-5">
          <button className="bg-[#362FF6] text-white px-6 py-2.5 rounded-xl shadow hover:bg-[#2c25d9] transition w-full sm:w-auto">
            Request a call
          </button>

          <div className="text-sm text-gray-800 md:text-right">
            <p className="font-medium">+1 (999) 999-99-99</p>
            <p className="text-base">info@trustpay.com</p>
          </div>
        </div>
      </div>

      <p className="text-white/60 text-xs text-center">
        © {new Date().getFullYear()} TrustPay. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
