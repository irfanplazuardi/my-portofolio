import React from "react";

const Header = () => {
  return (
    <div className="w-screen flex justify-items-center place-items-center px-32 pb-20 gap-96 lg:gap-32 items-center" id="header">
      <div className="flex w-1/2 gap-10 flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#FFFDFD] text-5xl lg:text-4xl font-extrabold text-left ">Irfan Prima Lazuardi</h1>
          <p className="text-[#FEFFC1] text-3xl font-light text-left">QA Engineer | Frontend Developer</p>
        </div>
        <p className="text-[#FFFDFD] text-3xl font-medium text-justify leading-normal">Ensuring seamless user experiences by blending rigorous QA and intuitive front-end development for solid, scalable products </p>
        <div className="py-36">
          <button className="bg-[#FFFDFD] w-auto px-20 py-4 rounded-xl text-2xl  font-semibold  text-[#C84747]" onClick={() => (window.location.href = "#aboutme")}>
            Meet Irfan...!
          </button>
        </div>
      </div>
      <div className="self-start">
        <img src="/mario.png" alt="mario" />
      </div>
    </div>
  );
};

export default Header;
