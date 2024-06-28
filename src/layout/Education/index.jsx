import * as React from "react";

const Education = () => {
  return (
    <div className="bg-[url('public/bg-education.png')] bg-cover bg-center w-screen min-h-screen flex items-center justify-center relative" id="education">
      <h1 className="text-5xl font-bold text-red-500 absolute top-10 left-10">Where I've Studied</h1>
      <div className="absolute left-7 mb-96 lg:mb-80 text-center w-1/4 lg:w-1/3 bg-blue-700 bg-opacity-75 rounded-xl shadow-lg p-20 px-5 lg:px-5">
        <h1 className="text-white font-bold text-3xl lg:text-2xl">Universitas Brawijaya</h1>
        <p className="text-white font-light text-xl">Bachelor of Accounting</p>
      </div>
      <img src="public/blue-mushroom.svg" alt="blue-mushroom" className="absolute left-52 lg:left-36 -center-10" />
      <p className="text-5xl lg:text-3xl font-bold text-black absolute left-36 lg:left-28 center-10 pt-40 ">2013-2018</p>
      <p className="text-5xl lg:text-3xl font-bold text-black absolute -center-10 pb-40">2022</p>
      <img src="public/red-mushroom.svg" alt="red-mushroom" className="absolute -center-10 transform -translate-x-1/2 left-1/2 " />
      <div className="absolute mt-96 lg:mt-[27rem] text-center w-1/4 lg:w-1/3 bg-blue-700 bg-opacity-75 rounded-xl shadow-lg p-20 px-5 lg:px-5">
        <h1 className="text-white font-bold text-3xl lg:text-2xl">Sekolah QA</h1>
        <p className="text-white font-light text-xl">QA Engineer</p>
      </div>
      <div className="absolute right-7 lg:right-12 mb-96 lg:mb-80 text-center w-1/4 lg:w-1/3 bg-blue-700 bg-opacity-75 rounded-xl shadow-lg p-20 px-5 lg:px-5">
        <h1 className="text-white font-bold text-3xl lg:text-2xl">RevoU</h1>
        <p className="text-white font-light text-xl ">Fullstack Software Engineer</p>
      </div>
      <img src="public/green-mushroom.svg" alt="green-mushroom" className="absolute right-52 lg:right-36 -center-10" />
      <p className="text-5xl lg:text-3xl font-bold text-black absolute right-36 lg:right-28 center-10 pt-40 ">2023-2024</p>
      <hr className="border-2 border-red-500 w-11/12" />
    </div>
  );
};

export default Education;
