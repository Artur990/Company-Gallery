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
          <a>
            <Image
              src="/logo-black-1.jpg"
              alt="Logo"
              width={scrolled ? 200 : 300}
              height={scrolled ? 33 : 50}
              className={`h-${scrolled ? 10 : 16} w-${
                scrolled ? 40 : 56
              } transition-all duration-500`}
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
                href="/contact"
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                <span>Contact</span>
              </Link>
            </li>
            <li className="nav-item button_solid_color">
              <a
                href="/all-in-one-solution"
                className="flex items-center px-3 py-2 text-xs font-bold uppercase leading-snug text-black hover:opacity-75"
              >
                <span>See it live</span>
              </a>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
// import Link from "next/link";
// import { ThemeToggle } from "./ThemeToggle";
// import { ThemeToggle } from "./ThemeToggle";
// import { buttonVariants } from "./ui/Button";
// import SignInButton from "./ui/SignInButton";
// import SignOutButton from "./ui/SignOutButton";

// const Navbar = async () => {
// const session = await getServerSession(authOptions);

//   return (
//     <div className="fixed left-0 right-0 top-0 z-50 flex h-20 items-center justify-between border-b border-slate-300 bg-white/75 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/75">
//       <div className="container mx-auto flex w-full max-w-7xl items-center justify-between">
//         {/* <Link href="/" className={buttonVariants({ variant: "link" })}> */}
//         Text Similarity v1.0
//         {/* </Link> */}
//         <div className="md:hidden">
//           <ThemeToggle />
//         </div>
//         <div className="hidden gap-4 md:flex">
//           <ThemeToggle />
//           <Link
//             href="/documentation"
//             // className={buttonVariants({ variant: "ghost" })}
//           >
//             Documentation
//           </Link>
//           {/* {session ? (
//             <>
//               <Link
//                 className={buttonVariants({ variant: "ghost" })}
//                 href="/dashboard"
//               >
//                 Dashboard
//               </Link>
//               <SignOutButton />
//             </>
//           ) : (
//             <SignInButton />
//           )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
