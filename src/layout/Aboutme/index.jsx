import React from "react";

const Aboutme = () => {
  return (
    <div className="flex flex-col w-screen min-h-screen" id="aboutme">
      <div className="flex justify-end items-start pt-24 pr-24">
        <img src="/box-icon.svg" alt="box-icon" className="w-12 h-12" />
      </div>
      <div className="flex justify-center items-center h-full gap-10 self-center">
        <img src="/irfan.png" alt="irfan" className="w-auto h-auto" />
        <div className="w-[55vw] flex flex-col gap-10">
          <h1 className="text-6xl font-extrabold text-[#C84747]">Hi It's Me Irfan...👋</h1>
          <p className="text-5xl font-medium leading-loose text-justify">
            I am an enthusiast software engineer passionate about building great user experience web products. Experienced in software testing websites and currently learning front-end development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
