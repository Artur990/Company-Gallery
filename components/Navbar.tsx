"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavigation = (target: string, href: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href + "?section=" + target;
    }
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
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

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const section = urlParams.get("section");

    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <nav
      className={`${
        !scrolled ? "relative" : "fixed"
      } z-20 flex w-full flex-wrap items-center justify-between bg-transparent px-2 py-3 ${
        scrolled ? "fixed top-0 z-10 w-full bg-white shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex w-full flex-wrap items-center justify-between px-4">
        <div className="relative flex w-full items-center justify-between">
          <Link href="/">
            <Image
              src="/logo-black-1.jpg"
              alt="Logo"
              width={scrolled ? 200 : 300}
              height={scrolled ? 33 : 50}
              className={`h-${scrolled ? 10 : 16} w-${
                scrolled ? 40 : 56
              }  transition-all duration-500`}
            />
          </Link>
          <div className="flex">
            <ul className="hidden list-none  md:flex lg:ml-auto">
              <li className="nav-item">
                <Link
                  href="/kontakt"
                  className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
                >
                  Kontakt
                </Link>
              </li>
              <li
                onClick={() => handleNavigation("pytania-i-odpowiedzi", "/")}
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                Pytania i odpowiedzi
              </li>
              <li
                onClick={() => handleNavigation("gallery", "/")}
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                Galeria
              </li>
              <li
                onClick={() => handleNavigation("about", "/")}
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                About
              </li>
            </ul>
            <button
              className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black outline-none focus:outline-none md:hidden"
              type="button"
              onClick={handleDropdownClick}
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        {isDropdownOpen && (
          <ul className="flex list-none flex-col md:hidden">
            <li className="nav-item relative">
              <div className="absolute right-4 mt-2 block w-48 rounded-md bg-black  shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link
                    href="/kontakt"
                    className="text-md block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                  >
                    Kontakt
                  </Link>
                </div>
                <div className="py-1">
                  <Link
                    href="/pytania-i-odpowiedzi"
                    className="text-md block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                  >
                    Pytania i odpowiedzi
                  </Link>
                </div>
                <div className="py-1">
                  <Link
                    href="/galeria"
                    className="text-md block px-4 py-2 text-white hover:bg-gray-100 hover:text-black"
                  >
                    galeria
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
