import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#FEFFC1] w-screen min-h-screen relative pb-20" id="contact">
      <div className="flex justify-between px-20 pt-20">
        <h1 className="text-5xl font-bold">Lets Connect...!</h1>
        <img src="/goomba.svg" alt="goomba" className="w-12 h-12" />
      </div>
      <div className="flex justify-center place-items-end">
        <form action="" className="flex flex-col gap-5 p-20 flex-grow"> 
          <label className="text-3xl font-semibold">Name</label>
          <input type="text" className="w-auto p-3 border-2 border-black rounded-lg text-xl font-semibold" />
          <label className="text-3xl font-semibold">Email</label>
          <input type="text" className="w-auto p-3 border-2 border-black rounded-lg text-xl font-semibold" />
          <label className="text-3xl font-semibold">Message</label>
          <textarea type="text" className="w-auto h-60 p-3 border-2 border-black rounded-lg text-xl font-semibold" />
          <button className="w-auto p-3 bg-[#45943B] text-white text-3xl font-semibold rounded-lg">Send</button>
        </form>
        <div className="relative"> 
          <img src="/yoshi.png" alt="yoshi" className="w-auto h-auto object-cover pr-32" /> 
          <div className="flex gap-5 absolute top-0 left-0 pt-10"> 
            <img src="/github.svg" alt="github" className="w-16 h-16 hover:cursor-pointer" onClick={() => window.open("https://github.com/irfanplazuardi", "_blank")}/>
            <img src="/linkedin.svg" alt="linkedin" className="w-16 h-16 hover:cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/irfan-prima-lazuardi-316731a8/", "_blank")} />
            <img src="/gmail.svg" alt="gmail" className="w-16 h-16 hover:cursor-pointer" onClick={() => window.open("mailto:irfanplazuardi@gmail.com", "_blank")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
