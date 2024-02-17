import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import testimonials_data from "../(data)/testimonials_data";

const TestimonialCard = ({ imgURL, name, position, review, company }) => {
  return (
    <article className="bg-[#0005] text-white w-4/5 border border-[#3c3c43] rounded-2xl p-7">
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quas illo
        laboriosam quam explicabo accusamus sit? Quas delectus debitis iusto
        ipsum impedit itaque facilis reprehenderit possimus qui voluptatem
        beatae optio maxime quam ullam a recusandae soluta, laborum illo modi
        accusantium reiciendis accusamus ut aut? Quae quaerat, iure ut quidem
        error asperiores dicta amet quisquam eveniet rerum mollitia, obcaecati
        minus dolorem aliquid tempora illo incidunt? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nam quas illo laboriosam quam explicabo
        accusamus sit? Quas delectus debitis iusto ipsum impedit itaque facilis
        reprehenderit possimus qui voluptatem beatae optio maxime quam ullam a
        recusandae soluta, laborum illo modi accusantium reiciendis accusamus ut
        aut? Quae quaerat, iure ut quidem error asperiores dicta amet quisquam
        eveniet rerum mollitia, obcaecati minus dolorem aliquid tempora illo
        incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        quas illo laboriosam quam explicabo accusamus sit? Quas delectus debitis
        iusto ipsum impedit itaque facilis reprehenderit possimus qui voluptatem
        beatae optio maxime quam ullam a recusandae soluta, laborum illo modi
        accusantium reiciendis accusamus ut aut? Quae quaerat, iure ut quidem
        error asperiores dicta amet quisquam eveniet rerum mollitia, obcaecati
        minus dolorem aliquid tempora illo incidunt?
      </p>
      <hr className="my-10 " />
      <div className="flex flex-row items-center justify-between">
        <div className="w-96 flex flex-row">
          <img
            src={
              "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"
            }
            alt={"Shivam"}
            className="w-full max-w-36 h-full"
          />
          <div className="pl-5 w-full flex flex-col items-center justify-center">
            <h4 className="text-xl w-full">Shivam Sharma</h4>
            <h4 className="text-lg w-full">Director</h4>
            <h4 className="text-lg w-full">EQLFIN INC.</h4>
          </div>
        </div>
        <img src="/images/creItLabs.png" alt={company} className="w-36" />
      </div>
    </article>
  );
};

const Testimonials = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col bg-gradient-to-b from-[#000000] to-[#010030] py-10">
      {/* <div className="w-full flex items-center justify-center flex-col bg-gradient-to-b from-[#00000b] to-[#010030] py-10"> */}
      <h1 className="text-5xl w-full text-center text-white py-8">
        First-Hand Opinions of Clients on
        <br />
        Their Partnership Experience
      </h1>
      <h6 className="w-full text-center text-xl text-[#3c3c43] font-normal">
        We are a software and mobile application development company that
        ensures its expertise extends
        <br />
        to offer a seamlessly productive and growth-oriented partnership to its
        clients.
      </h6>
      <div className="w-full pt-8 flex items-center justify-center">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {testimonials_data.map((item, id) => (
            <SwiperSlide key={id}>
              <TestimonialCard
                review={item.review}
                avatar={item.avatar}
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