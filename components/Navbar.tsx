import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
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
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrolled);
  return (
    <nav
      className={`${
        !scrolled ? "relative" : "fixed"
      }  z-10 flex w-full flex-wrap items-center justify-between bg-transparent  px-2 py-3 ${
        scrolled ? "fixed top-0 z-10 w-full  bg-white shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex w-full flex-wrap items-center justify-between px-4">
        <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
          <Link href="/">
            <Image
              src="/logo-black-1.jpg"
              alt="Logo"
              width={scrolled ? 200 : 300}
              height={scrolled ? 33 : 50}
              className={`h-${scrolled ? 10 : 16} w-${
                scrolled ? 40 : 56
              } transition-all duration-500`}
            />
          </Link>
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
              <Link
                href="/about"
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                <span>About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/Faq"
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                <span>FAQ</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/Contact"
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                <span>Contact</span>
              </Link>
            </li>
            <li className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
