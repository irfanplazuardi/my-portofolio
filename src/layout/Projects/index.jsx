import React from "react";
import projects from "../../API/project-data.json";

const Projects = () => {
  return (
    <div className="bg-[#C84747] w-screen min-h-screen relative pb-20" id="projects">
      <div className="flex justify-between p-20">
        <h1 className="text-5xl font-bold text-white">Projects</h1>
        <img src="/coin.svg" alt="coin" className="w-12 h-12" />
      </div>
      <div className="flex justify-center items-start flex-wrap gap-20 px-20">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-5 bg-white w-1/4 h-full rounded-3xl p-5 hover:cursor-pointer" onClick={() => window.open("https://masakin-fe-seven.vercel.app/", "_blank")}>
            <img src={project.imgSrc} alt={project.title} className="w-full h-1/2 rounded-[30px]" />
            <h2 className="text-3xl font-bold text-[#C84747]">{project.title}</h2>
            <p className="text-xl font-medium text-justify">{project.description}</p>
            <ul className="flex gap-2 flex-wrap text-blue-500 text-lg">
              {project.tags.map((tag, index) => (
                <li key={index}>#{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
