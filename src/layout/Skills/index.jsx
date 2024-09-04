import React from "react";
import skills from "../../API/skill-data.json";

const Skills = () => {
  return (
    <div className="bg-[#C84747] w-screen min-h-screen relative pb-20" id="skills">
      <div className="flex justify-between p-20">
        <h1 className="text-5xl font-bold text-white">Skills</h1>
        <img src="/star.svg" alt="star" className="w-12 h-12" />
      </div>
      <div className="flex justify-center items-start gap-20 ">
        <div className="flex flex-col gap-5 bg-white w-10/12 h-fit rounded-3xl p-5">
          {skills.map((skill) => (
          <div key={skill.id} className="flex justify-start place-items-center text-[#C84747] font-bold text-5xl p-10">
            <h1>{skill.title}</h1>
            {skill.icon.map((icon, index) => (
            <div key={index} className="flex justify-start items-center px-20 gap-10">
              <img src={`/${icon}.svg`} alt={icon} className="max-w-full max-h-full" title={icon}/>
            </div>
            ))}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
