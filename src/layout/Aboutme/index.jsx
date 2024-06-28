import React from "react";

const Aboutme = () => {
  return (
    <div className="bg-[url('public/bg-aboutme.png')] bg-cover bg-center w-screen h-full relative gap-5" id="aboutme">
      <h1 className="text-5xl font-bold text-white absolute top-10 left-10">Get To Know Me</h1>
      <div className="flex flex-col justify-center items-center gap-5 p-10 h-full w-full">
        <div className="flex flex-col place-items-center bg-white bg-opacity-75 p-5 w-5/6 h-[70vh] rounded-xl shadow-lg">
          <h1 className="text-6xl lg:text-5xl font-bold text-black ">Holla...!</h1>
          <p className="text-5xl lg:text-4xl font-medium text-black text-justify p-16 leading-relaxed">
            I am an enthusiastic software engineer passionate about building great user experience web products. Experienced in software testing websites and currently learning front-end development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
