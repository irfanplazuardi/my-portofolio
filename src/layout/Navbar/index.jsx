import React, { useEffect, useState } from "react";
import { Button } from "../../components";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('relative');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };
  return (
    <nav className="flex justify-center items-center pb-20">
      <div className={`flex justify-center place-items-center gap-1 p-5 m-5 text-[#C84747] bg-white rounded-full w-fit font-semibold text-[20px]`}>
        <Button buttonName="About Me" targetSection="aboutme" />
        <Button buttonName="Experiences" targetSection="experience" />
        <Button buttonName="Projects" targetSection="projects" />
        <Button buttonName="Skills" targetSection="skills" />
        <Button buttonName="Contact" targetSection="contact" />
      </div>
    </nav>
  );
};

export default Navbar;
