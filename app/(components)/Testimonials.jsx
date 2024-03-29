"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { testimonials_data } from "../(data)/testimonials_data";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

const TestimonialCard = ({
  review,
  avatar,
  company,
  name,
  designation,
  companyLogo,
}) => {
 
  return (
    <article className="bg-[#0005] text-white w-full lg:w-3/5 border border-[#3c3c43] rounded-2xl p-7 h-[350px]">
      <p className="text-xs lg:text-lg">{review}</p>
      <hr className="my-10 " />
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="lg:w-96 flex flex-col lg:flex-row">
          {/* <Image width={0} height={0} src={"/images/shivam.png"} alt={name} className="w-full max-w-36 h-full" /> */}
          <div className="lg:pl-5 w-full flex flex-col items-center justify-center pt-2 lg:p-0">
            <h4 className="text-xs lg:text-xl w-full">{name}</h4>
            <h4 className="text-xs lg:text-lg w-full">{designation}</h4>
            <h4 className="text-xs lg:text-lg w-full">{company}</h4>
          </div>
        </div>
        {/* <Image width={0} height={0} src="/images/creItLabs.png" alt={companyLogo} className="w-12 lg:w-36" /> */}
      </div>
    </article>
  );
};

const Testimonials = () => {
  const swiperRef = useRef();
  return (
    <div className="w-full flex items-center justify-center flex-col bg-gradient-to-b from-[#000000] to-[#010030] py-10">
      {/* <div className="w-full flex items-center justify-center flex-col bg-gradient-to-b from-[#00000b] to-[#010030] py-10"> */}
      <h1 className="text-xl lg:text-5xl w-full text-center text-white py-8">
        First-Hand Opinions of Clients on
        <br />
        Their Partnership Experience
      </h1>
      <h6 className="w-full text-center text-sm lg:text-xl text-[#3c3c43] font-normal">
        We are a software and mobile application development company that
        ensures its expertise extends
        <br />
        to offer a seamlessly productive and growth-oriented partnership to its
        clients.
      </h6>
      <div className="w-full pt-14">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          pagination={true}
          modules={[Pagination]}
          className="w-full"
        >
          {testimonials_data.map((item, id) => (
            <SwiperSlide key={id} className="w-full">
              <TestimonialCard
                review={item.review}
                avatar={item?.avatar}
                company={item.company}
                name={item.name}
                designation={item.designation}
                companyLogo={item.companyLogo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
