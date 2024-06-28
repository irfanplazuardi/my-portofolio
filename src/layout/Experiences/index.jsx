import React from "react";

const experiences = [
  {
    id: 1,
    company: "Cilsy Fiolution",
    role: "Freelance QA Automation",
    duration: "Jan 2024 - Feb 2024",
    image: "src/assets/cilsy.png",
  },
  {
    id: 2,
    company: "Edgeworks",
    role: "QA Engineer",
    duration: "Dec 2022 - Jun 2022",
    image: "src/assets/edgeworks.png",
  },
  {
    id: 3,
    company: "Zettabyte",
    role: "Intern QA Manual",
    duration: "Sep 2022 - Nov 2022",
    image: "src/assets/zettabyte.png",
  },
];

const Experiences = () => {
  return (
    <div className="bg-[url('src/assets/bg-experiences.png')] bg-cover bg-center w-screen min-h-screen flex items-center justify-center relative" id="experiences">
      <h1 className="text-5xl font-bold text-zinc-950 absolute top-10 left-10">My Journey Starts Here</h1>
      <div className="flex justify-center items-center gap-10 p-10 h-full w-full">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex flex-col justify-center items-center bg-black bg-opacity-75 p-5 w-1/4 lg:w-1/3 h-[55vh] rounded-xl shadow-lg gap-7"
          >
            <h1 className="text-4xl lg:text-3xl font-bold text-white">{experience.company}</h1>
            <img src={experience.image} alt={experience.company} />
            <h2 className="text-2xl lg:text-xl font-semibold text-white text-center">{experience.role}</h2>
            <p className="text-xl text-center font-bold text-yellow-400">{experience.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
