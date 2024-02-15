import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { RiRestaurant2Fill } from "react-icons/ri";
import { RiShoppingCart2Line } from "react-icons/ri";
import { RiBattery2ChargeLine } from "react-icons/ri";
import { MdAppSettingsAlt } from "react-icons/md";
import { MdTravelExplore } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { GoTasklist } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { LuLuggage } from "react-icons/lu";

const Industries = () => {
  return (
    <div className="bg-[linear-gradient(to_bottom_right,_#000_50%,_#080b4e)] text-white py-20 w-full px-8 xl:px-[145px]">
      <div className="text-xl lg:text-4xl text-center">
        A Unified Vision That Caters <br />
        to Diverse Industry Demands
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4  py-10">
        <div className="py-[40px] px-[50px] text-center border-r border-b lg:border-r lg:border-b border-gray-600 cursor-pointer">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <IoMdHeartEmpty />
          </div>
          <div className="text-center pt-2">Healthcare</div>
        </div>

        <div className="py-[40px] px-[50px] text-center border-b lg:border-b-1 lg:border-r border-gray-600">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <RiMoneyDollarCircleLine />
          </div>
          <div className="text-center pt-2">Finance</div>
        </div>

        <div className="py-[40px] px-[50px] text-center border-b border-r lg:border-r border-gray-600">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <RiRestaurant2Fill />
          </div>
          <div className="text-center pt-2">Restaurant</div>
        </div>

        <div className="py-[40px] px-[50px] text-center border-b border-gray-600">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <RiShoppingCart2Line />
          </div>
          <div className="text-center pt-2">eCommerce</div>
        </div>

        <div className="py-[40px] px-[50px] text-center border-b border-r border-gray-600">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <RiBattery2ChargeLine />
          </div>
          <div className="text-center pt-2">EV</div>
        </div>

        <div className="py-[40px] px-[50px] text-center border-b lg:border lg:border-l-0 lg:border-t-0 border-gray-600">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <MdAppSettingsAlt />
          </div>
          <div className="text-center pt-2">SaaS</div>
        </div>

        <div className="py-[40px] px-[50px] text-center border-b border-r lg:border-t-0 lg:border-l-0 border-gray-600">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <MdTravelExplore />
          </div>
          <div className="text-center pt-2">Travel</div>
        </div>

        <div className="py-[40px] px-[50px] text-center border-b border-gray-600">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <IoMusicalNotesOutline />
          </div>
          <div className="text-center pt-2">Entertainment</div>
        </div>

        <div className="py-[40px] px-[50px] text-center border-b lg:border-b-0 border-r border-gray-600">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <GoTasklist />
          </div>
          <div className="text-center pt-2">On-Demand</div>
        </div>

        <div className="py-[40px] px-[50px] text-center border-b lg:border-0 lg:border-r border-gray-600">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <FaRegUserCircle />
          </div>
          <div className="text-center pt-2">Social Media</div>
        </div>

        <div className="py-[40px] px-[50px] text-center border-r border-gray-600">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <LuLuggage />
          </div>
          <div className="text-center pt-2">Logistics</div>
        </div>

        <div className="py-[40px] px-[50px] text-center ">
          <div className="p-2 bg-gradient-to-b from-[#343338] via-[#302e34] to-[#232127] inline-flex rounded-2xl drop-shadow-2xl">
            <FaBook />
          </div>
          <div className="text-center pt-2">EdTech</div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
