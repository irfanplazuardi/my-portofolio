import React from "react";

const contacts = [
  {
    imgSrc: "src/assets/whatsapp.svg",
    altText: "whatsapp",
    href: "https://wa.me/6281915934310",
    text: "+6281915934310",
  },
  {
    imgSrc: "src/assets/gmail.svg",
    altText: "gmail",
    href: "mailto:irfanplazuardi@gmail.com",
    text: "irfanplazuardi@gmail.com",
  },
  {
    imgSrc: "src/assets/github.svg",
    altText: "github",
    href: "https://github.com/irfanplazuardi",
    text: "irfanplazuardi",
  },
  {
    imgSrc: "src/assets/linkedin.svg",
    altText: "linkedin",
    href: "https://www.linkedin.com/in/irfan-prima-lazuardi-316731a8/",
    text: "Irfan Prima Lazuardi",
  },
];

const Contact = () => {
  return (
    <div className="bg-green-500 bg-cover bg-center w-screen min-h-full flex items-center justify-center relative" id="contact">
      <h1 className="text-5xl font-bold text-white absolute top-10 left-10">Let's Connect</h1>
      <div className="grid grid-cols-2 gap-20 items-start ">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-5">
            <img src={contact.imgSrc} alt={contact.altText} className="lg:w-16 lg:h-16" />
            <a href={contact.href} target="_blank" className="text-3xl font-bold text-white">
              {contact.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
