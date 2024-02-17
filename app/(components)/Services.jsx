import React from "react";
import { SiBlockchaindotcom } from "react-icons/si";
import { GoDependabot } from "react-icons/go";
import { CiMobile3 } from "react-icons/ci";
import { GrCloudSoftware } from "react-icons/gr";
import { FaDev } from "react-icons/fa6";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { MdComputer } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineDraw } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import Link from "next/link";

const Services_Data = [
  {
    id: 1,
    title: "AI-ML",
    img_url: <GoDependabot />,
  },
  {
    id: 2,
    title: "Mobile App Development",
    img_url: <CiMobile3 />,
  },
  {
    id: 3,
    title: "Software Development",
    img_url: <FaDev />,
  },
  {
    id: 4,
    title: "Digital Transformation",
    img_url: <LiaDigitalTachographSolid />,
  },
  {
    id: 5,
    title: "Data Science & Analytics",
    img_url: <FaDatabase />,
  },
  {
    id: 6,
    title: "Cloud Services",
    img_url: <GrCloudSoftware />,
  },
  {
    id: 7,
    title: "Blockchain Services",
    img_url: <SiBlockchaindotcom />,
  },
  {
    id: 8,
    title: "Ideation and Design Strategy",
    img_url: <MdOutlineDraw />,
  },
  {
    id: 9,
    title: "IT Consulting",
    img_url: <MdComputer />,
  },
  {
    id: 10,
    title: "DevOps",
    img_url: <IoSettingsSharp />,
  },
];

const Services = () => {
  return (
    <div
      className="w-full bg-black text-white py-[96px] px-8 xl:px-[145px]"
      id="services"
    >
      <div>
        <div className="text-2xl lg:text-4xl">
          We Create New Solutions and Transform <br /> Existing Ones with a
          Development Process That <br /> Beats Industry-Best Timelines
        </div>
        <Link
          href="/portfolio"
          className="mt-[50px] px-[25px] py-[10px] border-2 border-white inline-block rounded-xl hover:bg-[#126bfb] hover:border-[#126bfb] cursor-pointer"
        >
          Our Portfolio {`>`}
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 py-[5rem]">
        {Services_Data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-around border border-gray-500 opacity-40 h-44 p-2 lg:p-5 m-2 rounded-2xl"
          >
            <div className="w-full flex justify-center md:justify-start text-5xl">
              {item.img_url}
            </div>
            <div className="ml-2 text-sm md:text-xl text-center md:text-left">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
