import Footer from "@/app/(components)/Footer";
import Portfolio_data from "@/app/(data)/Portfolio_data";
import Image from "next/image";
import React from "react";

const Portfolio = () => {
  return (
    <div
      className="h-fit w-full bg-black text-white px-6 xl:px-[145px] py-28"
      id="portfolio"
    >
      <h1 className="w-full text-4xl">Portfolio</h1>
      <div className="w-full flex flex-row items-center gap-8 overflow-x-scroll portfolioScroll pb-10">
        {Portfolio_data.map((data, id) => (
          <article
            key={id}
            className="w-2/5 flex flex-col-reverse items-center justify-between border border-[#666] rounded-xl p-0 gap-8 hover:bg-[#111] cursor-pointer"
          >
            <div className="flex flex-col items-start justify-center w-full gap-3 p-5">
              <h2 className="text-2xl lg:text-4xl">{data.title}</h2>
              <p className="w-full text-xs lg:text-base truncate">
                {data.content}
              </p>
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
            <div className="w-full">
              <Image className="rounded-xl w-full h-full" src={data.imgURL} alt="err" width={0} height={0}/>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
