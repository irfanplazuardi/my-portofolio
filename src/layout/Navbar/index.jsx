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
    <nav>
      <div className={`bg-[#2626d1] flex justify-center place-items-center w-screen gap-10 text-white p-5 `}>
        <Button buttonName="About Me" targetSection="aboutme" />
        <Button buttonName="Education" targetSection="education" />
        <Button buttonName="Experiences" targetSection="experiences" />
        <Button buttonName="Projects" targetSection="projects" />
        <Button buttonName="Contact" targetSection="contact" />
      </div>
    </nav>
  );
};

export default Navbar;
