import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickScrollGallery = () => {
    const element = document.getElementById("gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickScrollAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScrollFood = () => {
    const element = document.getElementById("food");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="relative flex flex-wrap items-center justify-between bg-transparent px-2 py-3">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <a>
            <Image
              src="/logo-black-1.jpg"
              alt="Logo"
              width={300}
              height={50}
              className="h-16 w-56"
            />
          </a>
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black  outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={handleClick}
          >
            <span className="relative block h-px w-6 rounded-sm bg-black"></span>
            <span className="relative mt-1 block h-px w-6 rounded-sm bg-black"></span>
            <span className="relative mt-1 block h-px w-6 rounded-sm bg-black"></span>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-grow items-center lg:flex`}
        >
          <ul className="flex list-none flex-col lg:ml-auto lg:flex-row">
            <li className="nav-item">
              <a
                onClick={handleClickScrollGallery}
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                <span>Gallery</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={handleClickScrollAbout}
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                <span>O Nas</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={handleClickScrollFood}
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                <span>Kontakt</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
