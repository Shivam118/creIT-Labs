import React from "react";
import Portfolio_data from "../(data)/Portfolio_data.jsx";

const Portfolio = () => {
  return (
    <div className="h-fit w-full bg-black text-white p-10 py-28">
      {Portfolio_data.map((data, id) => (
        <div key={id} className="flex flex-col gap-8 py-10">
          <div className="flex ">
            <div className="text-3xl font-semibold">{data.title}</div>
          </div>

          <div className="flex gap-10">
            <div className="flex flex-col gap-7 w-1/2">
              <div className="flex flex-col gap-7">
                {data.content.split("\n/").map((paragraph, index) => (
                  <div key={index}>
                    {" "}
                    <li> {paragraph} </li>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-2xl font-semibold">Technologies Used</div>
                <div className="flex gap-5 flex-wrap">
                  {data.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className=" rounded-full border-[1px] border-white px-4 py-1"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <img
                className="rounded-xl"
                src={data.imgURL}
                alt="err"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
