"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const scrollHeight = window.scrollY;
        console.log("Scroll Height:", scrollHeight);
        setNavHeight(scrollHeight);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  

  return (
    <nav
      className={`flex items-center justify-between w-full px-16 xl:px-[145px] fixed left-0 top-0 z-[10] text-white ${
        navHeight > 20 ? "bg-black h-[80px]" : "bg-transparent h-[100px]"
      }`}
      style={{ transition: "all 0.5s" }}
    >
      <div className="flex font-light items-center gap-10 text-xs xl:text-sm">
        <div className="flex justify-center items-center w-[150px] text-lg relative">
          <span className="relative -top-2">
            <Image
              src={"/images/creItLabs.png"}
              alt={"companyLogo"}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                height: "auto",
                width: "35px",
                pointerEvents: "none",
              }}
            />
          </span>
          reIT
        </div>

        <div className=""><Link href={'/'}> About</Link></div>
        <div className="">SERVICES</div>
        <div className="">INDUSTRIES</div>
        <div className=""><Link href={'/portfolio'}> Portfolio</Link></div>
        <div className="">RESOURCES</div>
        <div className="">
          <div className="bg-[#126bfb] rounded-sm px-[25px] py-2">
            CONTACT US
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
