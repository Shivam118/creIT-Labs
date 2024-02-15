import React from "react";

const Hero = () => {
  return (
    <div className="h-[80vh] w-full relative pt-[100px] px-8 xl:px-[145px] flex items-center justify-start">
      <div className="text-white font-medium flex flex-col gap-4">
        <div className="text-xl lg:text-4xl">
          Meet the Digital Drivers of Global Disruptors
        </div>
        <div className="font-light">
          We catalyze business growth by reimagining digital experiences that{" "}
          <br />
          conquer complex challenges through innovation and agility.
        </div>
        <div className=" cursor-pointer mt-[20px] px-[25px] py-[10px] border-2 w-[230px] border-white inline-block rounded-xl hover:bg-[#126bfb] hover:border-[#126bfb] ">
          Consult our experts {`>`}
        </div>
      </div>
      <video
        className="absolute object-cover w-full h-full top-0 left-0 z-[-1]"
        src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/home-video.mp4"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Hero;
