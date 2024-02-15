import React from "react";

const Footer = () => {
  return (
    <footer className="w-full p-10 flex justify-center items-center flex-col bg-black text-[#ccc] px-8 xl:px-[145px]">
      <hr className="w-full h-0.5 bg-[#333] my-10" />
      <div className="w-full max-w-[1100px] flex flex-row items-start justify-between text-xs lg:text-base">
        <address>
          India:
          <br />
          <br />
          Wework, Cyber City, Gurugram
          <br />
          Zip Code: 122002
          <br />
          <br />
          Contact: 8668572912
        </address>
        <address>
          USA:
          <br />
          <br />
          635 w 42nd st, New York,
          <br />
          Zip Code: 10036
        </address>
      </div>
      <br />
      <br />
      <p className="text-xs lg:text-base">
        Copyright © 2024. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
