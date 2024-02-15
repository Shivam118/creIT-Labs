import React from "react";

const Services_Data = [
  {
    id: 1,
    title: "AI-ML",
    img_url:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/service-ai-ml.svg",
  },
  {
    id: 2,
    title: "Mobile App Development",
    img_url:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/service-ai-ml.svg",
  },
  {
    id: 3,
    title: "Software Development",
    img_url:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/service-ai-ml.svg",
  },
  {
    id: 4,
    title: "Digital Transformation",
    img_url:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/service-ai-ml.svg",
  },
  {
    id: 5,
    title: "Data Science & Analytics",
    img_url:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/service-ai-ml.svg",
  },
  {
    id: 6,
    title: "Cloud Services",
    img_url:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/service-ai-ml.svg",
  },
  {
    id: 7,
    title: "Blockchain Services",
    img_url:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/service-ai-ml.svg",
  },
  {
    id: 8,
    title: "Ideation and Design Strategy",
    img_url:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/service-ai-ml.svg",
  },
  {
    id: 9,
    title: "IT Consulting",
    img_url:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/service-ai-ml.svg",
  },
  {
    id: 10,
    title: "DevOps",
    img_url:
      "https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/service-ai-ml.svg",
  },
];

const Services = () => {
  return (
    <div className="w-full bg-black text-white py-[96px] px-16 xl:px-[145px]">
      <div>
        <div className="text-4xl">
          We Create New Solutions and Transform <br /> Existing Ones with a
          Development Process That <br /> Beats Industry-Best Timelines
        </div>
        <div className="mt-[50px] px-[25px] py-[10px] border-2 border-white inline-block rounded-xl hover:bg-[#126bfb] hover:border-[#126bfb] cursor-pointer">
          Our Services {`>`}
        </div>
      </div>

      <div className="grid grid-cols-4 py-[5rem]">
        {Services_Data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-around border border-gray-500 opacity-40 h-44 p-5 m-2 rounded-2xl"
          >
            <img src={item.img_url} className="w-8 " alt="err" />
            <div className="ml-2 text-lg xl:text-xl text-start">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
