import React from "react";

const Header = () => {
  return (
    <div className="bg-[#E70112] w-screen min-h-screen flex justify-between gap-5" id="header">
      <div className="flex-1 pr-20 pl-20 lg:pr-10 lg:pl-10  pt-60 gap-10 flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-5xl lg:text-4xl font-extrabold text-left">Irfan Prima Lazuardi</h1>
          <p className="text-white text-2xl lg:text-xl font-lighttext-left pl-10">QA Engineer | Frontend Developer</p>
        </div>
        <p className="text-white text-3xl lg:text-2xl font-semibold text-left">Ensuring seamless user experiences by blending rigorous QA and intuitive front-end development for solid, scalable products </p>
        <div className="pr-20 text-right">
          <button className="bg-white w-72 lg:w-60 h-10 rounded-full text-2xl lg:text-xl" onClick={() => (window.location.href = "#aboutme")}>
            Meet Irfan !
          </button>
        </div>
      </div>
      <div className="flex-1 pr-20 flex justify-center items-center">
        <img src="public/irfan.png" alt="irfan" className="max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default Header;
