"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu, IoMdClose } from "react-icons/io";

import Logo from "../public/Logo.png";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white sticky top-0 z-50 px-5 md:px-0">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="TrustPay Logo"
            width={120}
            height={40}
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center w-full">
          <nav className="flex items-center gap-8 mx-auto">
            <Link
              href="/"
              className="text-[#000022] font-medium hover:text-[#362FF6] transition"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[#000022] font-medium hover:text-[#362FF6] transition"
            >
              FAQs
            </Link>

            <Link
              href="/contact"
              className="text-[#000022] font-medium hover:text-[#362FF6] transition"
            >
              Contact
            </Link>
          </nav>

          <div className="flex gap-3">
            <button className="mt-6 flex items-center gap-2 bg-[#362FF6] text-white px-6 py-3 rounded-xl hover:bg-[#DEDEF2] hover:text-[#362FF6] transition">
              Log In
            </button>

            <button className="mt-6 flex items-center gap-2 bg-[#362FF6] text-white px-6 py-3 rounded-xl hover:bg-[#DEDEF2] hover:text-[#362FF6] transition">
              Sign Up
            </button>
          </div>
        </div>

        <button
          className="md:hidden text-[#000022]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <IoMdClose size={28} /> : <IoIosMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t bg-white px-5">
          <div className="flex flex-col py-6 gap-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#000022] hover:text-[#362FF6]"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#000022] hover:text-[#362FF6]"
            >
              FAQs
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#000022] hover:text-[#362FF6]"
            >
              Contact
            </Link>

            <div className="flex flex-col gap-3 pt-4">
              <button
                type="button"
                content="Log In"
                className="bg-[#DEDEF2] text-[#362FF6] hover:bg-[#362FF6] hover:text-white py-2 rounded-xl w-full"
              />

              <button
                type="button"
                content="Sign Up"
                className="bg-[#DEDEF2] text-[#362FF6] hover:bg-[#362FF6] hover:text-white py-2 rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
