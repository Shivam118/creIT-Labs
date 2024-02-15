"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(0);

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
    <nav
      className={`flex items-center justify-center w-full px-16 xl:px-[100px] fixed left-0 top-0 z-[10] text-white ${
        navHeight > 20 ? "bg-black h-[80px]" : "bg-transparent h-[100px]"
      }`}
      style={{ transition: "all 0.5s" }}
    >
      <div className="w-full flex font-light justify-between items-center gap-10 text-xs xl:text-sm">
        <div className="flex justify-center items-center w-[150px] text-2xl relative font-bold">
          <span className="relative -top-2">
            <Image
              src={"/images/creItLabs.png"}
              alt={"companyLogo"}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                height: "auto",
                width: "45px",
                pointerEvents: "none",
              }}
            />
          </span>
          reIT
        </div>
        <ul className="w-1/2 flex flex-row justify-around items-end">
          <li className="cursor-pointer hover:bg-[#fff2] py-2 px-4 rounded-lg hover:font-semibold">ABOUT</li>
          <li className="cursor-pointer hover:bg-[#fff2] py-2 px-4 rounded-lg hover:font-semibold">SERVICES</li>
          <li className="cursor-pointer hover:bg-[#fff2] py-2 px-4 rounded-lg hover:font-semibold">INDUSTRIES</li>
          <Link href="/portfolio">
            <li className="cursor-pointer hover:bg-[#fff2] py-2 px-4 rounded-lg hover:font-semibold">PORTFOLIO</li>
          </Link>
          <li className="cursor-pointer hover:bg-[#fff2] py-2 px-4 rounded-lg hover:font-semibold">RESOURCES</li>
        </ul>
        <div className="cursor-pointer py-2 px-4 hover:font-semibold bg-[#126bfb] rounded-md">CONTACT US</div>
      </div>
    </nav>
  );
};

export default Navbar;
