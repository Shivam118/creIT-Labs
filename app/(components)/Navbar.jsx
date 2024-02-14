"use client";
import React from "react";
import { useEffect, useState } from "react";

const Navbar = () => {

  const[navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      console.log("Scroll Height:", scrollHeight);
      setNavHeight(scrollHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<div className={`flex items-center justify-between w-full px-[145px] py-[25px] fixed top-0 ${navHeight > 10 ? 'bg-black' : 'bg-transparent'}`}>
      <div>
        <img
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/appi-blue-wht-logo.svg"
          alt="err"
          className="w-[160px]"
        />
      </div>

      <div className="flex text-white font-light items-center gap-10 text-sm">
        <div className="">ABOUT</div>
        <div className="">SERVICES</div>
        <div className="">INDUSTRIES</div>
        <div className="">PORTFOLIO</div>
        <div className="">RESOURCES</div>
        <div className="">
          <div className="bg-[#126bfb] rounded-lg px-[25px] py-2">
            CONTACT US
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
