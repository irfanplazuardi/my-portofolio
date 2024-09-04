import React from "react";
import { Navbar, Header, Aboutme, Experience, Skills, Projects, Contact } from "../../layout";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutme />
      <Experience />
      <Projects />
      <Skills/>
      <Contact />
    </div>
  );
};

export default Main;
