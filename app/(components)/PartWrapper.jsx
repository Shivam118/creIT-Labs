import React from "react";

const PartWrapper = () => {
  return (
    <div className="bg-black text-white w-full px-8 xl:px-[145px]">
      <div className="flex h-[100vh]">
        <div className="w-1/2 flex justify-center items-center text-5xl px-10">
          Strategic Partnerships to Unlock Greater Business Value
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-[#171717] border-[1px] border-[#343434] h-36 md:h-48 xl:h-64 w-36 md:w-48 xl:w-64 flex justify-center items-center rounded-[10px]">
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/aws-partner.svg"
                alt="err"
              />
            </div>
            <div className="bg-[#171717] border-[1px] border-[#343434] h-36 md:h-48 xl:h-64 w-36 md:w-48 xl:w-64 flex justify-center items-center rounded-[10px]">
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/mongodb-partner.svg"
                alt="err"
              />
            </div>
            <div className="bg-[#171717] border-[1px] border-[#343434] h-36 md:h-48 xl:h-64 w-36 md:w-48 xl:w-64 flex justify-center items-center rounded-[10px]">
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/google-cloud-partner.svg"
                alt="err"
              />
            </div>
            <div className="bg-[#171717] border-[1px] border-[#343434] h-36 md:h-48 xl:h-64 w-36 md:w-48 xl:w-64 flex justify-center items-center rounded-[10px]">
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/cloudinary-partner.svg"
                alt="err"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartWrapper;
