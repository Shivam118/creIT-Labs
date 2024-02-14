import React from "react";
import Navbar from "../(components)/Navbar";

const Hero = () => {
  return (
    <div class="h-[80vh] overflow-hidden">
      <Navbar />
      <div>
        <div className="absolute text-white top-[30%] font-medium left-[10%] max-w-[1180px] ">
          <div className="text-[42px]">Meet the Digital Drivers of Global Disruptors</div>
          <div className="font-light">
            We catalyze business growth by reimagining digital experiences that <br/>
            conquer complex challenges through innovation and agility.
          </div>
          <div className="mt-[50px] px-[25px] py-[10px] border-2 border-white inline-block rounded-xl hover:bg-[#126bfb] hover:border-[#126bfb] ">
            Consult our experts {`>`}
          </div>
        </div>
        <video
          class="align-middle object-cover w-full h-full"
          src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/home-video.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Hero;
