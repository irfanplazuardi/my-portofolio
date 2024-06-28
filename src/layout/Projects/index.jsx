import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Vogue School",
    summary: "Our team built a free educational website for primary and elementary students. We created a dashboard to manage their study journey. Inspired by the fact that many children dropped out of school due to unaffordable fees and lack of quality education, we believed our platform could help every children have access to highly quality education. We focused on providing essential numeracy and literacy skills to help them succeed in life.",
    techStacks: [
      { name: "React", imgSrc: "/react.png" },
      { name: "Material UI", imgSrc: "/materialui.png" },
    ],
    links: [
      { type: "website", href: "https://dev--vogueschool-dev-env.netlify.app/", imgSrc: "/website.png", address: "vogueschool-dev-env.netlify.app" },
      { type: "github", href: "https://github.com/irfanplazuardi/FinalProject_GroupH_FE", imgSrc: "/github.svg" },
    ],
    imgSrc: "/vogue-school.png",
  },
  {
    title: "Reqres.in",
    summary: "This is a personal project testing API using using robot framework on https://reqres.in/. Did some testing on Login, Register, and CRUD on user data.",
    techStacks: [
      { name: "React", imgSrc: "/robot.png" },
    ],
    links: [
      { type: "website", href: "https://reqres.in/", imgSrc: "/website.png", address: "reqres.in" },
      { type: "github", href: "https://github.com/irfanplazuardi/robotframework-automation", imgSrc: "/github.svg" },
    ],
    imgSrc: "/robot-framework.png",
  }
  // Add more projects as needed
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-[url('/bg-projects.png')] bg-cover bg-center w-screen min-h-screen flex items-center justify-center relative" id="projects">
      <h1 className="text-5xl font-bold text-white absolute top-10 left-10">Checkout My Work Here</h1>
      <div className="bg-green-700 bg-opacity-75 rounded-xl w-11/12 max-h-svh shadow-lg px-20 py-10 mt-20">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="bg-white bg-opacity-50 rounded-xl shadow-lg h-[70vh]">
              <h3 className="text-6xl font-bold text-center p-1">{project.title}</h3>
              <div className="flex justify-between gap-10 p-5">
                <img src={project.imgSrc} alt={project.title} className="w-1/2 h-96" />
                <div className="gap-5">
                  <h3 className="text-xl font-bold">Summary</h3>
                  <p className="text-justify font-light text-base pb-2">{project.summary}</p>
                  <h3 className="text-xl font-bold">Tech Stacks</h3>
                  <ul className="flex justify-start gap-5 pb-2">
                    {project.techStacks.map((stack, idx) => (
                      <li key={idx} className="flex flex-col items-center">
                        <img src={stack.imgSrc} alt={stack.name} className="w-8 h-8"></img>
                        {stack.name}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-10 pt-10">
                    {project.links.map((link, idx) => (
                      <div key={idx} className="flex gap-2 items-center">
                        <img src={link.imgSrc} alt={`${project.title}-${link.type}`} className="w-8 h-8" />
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.type === "website" ? `${link.address}` : "github.com/irfanplazuardi/"}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
