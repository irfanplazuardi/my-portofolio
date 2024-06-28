import React, { useState } from "react";

function Button({ buttonName, targetSection }) {
  const [buttonClass, setButtonClass] = useState("p-2 rounded-lg");

  const handleClick = () => {
    const section = document.getElementById(targetSection);
    section.scrollIntoView({ behavior: "smooth" });
    setButtonClass("border-white border-2 p-2 rounded-lg");
  };

  return (
    <button className={buttonClass} onClick={handleClick}>
      {buttonName}
    </button>
  );
}

export default Button;
