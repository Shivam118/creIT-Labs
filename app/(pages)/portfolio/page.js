import Footer from "@/app/(components)/Footer";
import Portfolio_data from "@/app/(data)/Portfolio_data";
import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="h-fit w-full bg-black text-white px-6 xl:px-[145px] py-28">
        <div className="flex flex-col gap-8">
          {Portfolio_data.map((data, id) => (
            <article
              key={id}
              className="flex flex-col-reverse lg:flex-row items-center justify-between border border-[#666] rounded-xl p-0 lg:p-10 gap-8 hover:bg-[#111] cursor-pointer"
            >
              <div className="flex flex-col items-start justify-center w-full lg:w-1/2 gap-3 p-4 lg:p-0">
                <h2 className="text-2xl lg:text-4xl">{data.title}</h2>
                <p className="text-xs lg:text-base">{data.content}</p>
                <h5 className="text-base lg:text-lg">Technologies Used :</h5>
                <div className="flex flex-row flex-wrap gap-2">
                  {data.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-white px-2 lg:px-4 py-1 text-xs lg:text-base"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img className="rounded-xl" src={data.imgURL} alt="err" />
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
