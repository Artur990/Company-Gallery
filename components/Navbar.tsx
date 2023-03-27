import Image from "next/image";
import React from "react";
const Navbar = () => {
  const handleClickScrollImageList = () => {
    const element = document.getElementById("imageList");
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
    <div className=" relative">
      <div className="absolut z-1 inset-0 flex h-[100px] w-full  justify-between  bg-transparent px-0 py-5">
        <Image
          width={208}
          height={90}
          src="/logo-black-1.jpg"
          alt="logo"
          className="h-20 w-52  rounded-2xl hover:bg-slate-400 "
        />

        <div className="  hidden min-w-[10%] justify-between sm:flex ">
          <button
            onClick={handleClickScrollImageList}
            className="m-1 h-10 border-b-4 border-black from-black p-1 text-xl  font-semibold hover:border-gray-500 hover:text-gray-500"
          >
            Galeria
          </button>
          <button
            onClick={handleClickScrollFood}
            className="m-1 h-10 border-b-4 border-black from-black p-1 text-xl font-semibold hover:border-gray-500 hover:text-gray-500 "
          >
            Kontakt
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
