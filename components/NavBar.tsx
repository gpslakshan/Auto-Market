"use client";

import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-3">
        <Link href="/" className="flex items-center justify-center gap-3">
          <Image
            src="/logo.svg"
            alt="logo"
            width={60}
            height={18}
            className="object-contain"
          />
          <span className="text-xl font-bold">Auto-Market</span>
        </Link>
        <ul className="max-lg:hidden flex gap-12 ">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href="/" className="lg:text-base xl:text-lg text-slate-600">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="cursor-pointer max-lg:hidden font-medium text-lg">
          <button className="bg-green-400 text-white xl:text-black xl:bg-white xl:hover:bg-green-700 xl:hover:text-white px-5 py-4 rounded-full">
            Login / Register
          </button>
        </div>
        <div className="lg:hidden block">
          <Image
            src="/hamburger.svg"
            alt="hamburger icon"
            width={25}
            height={25}
            onClick={() => setToggleDropDown(!toggleDropDown)}
          />
        </div>
        {/* Mobile Navigation */}
        {toggleDropDown && (
          <div className="dropdown">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href="/"
                className="dropdown_link"
                onClick={() => setToggleDropDown(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setToggleDropDown(false);
              }}
              className="mt-5 w-full black_btn"
            >
              Sign-In / Register
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
