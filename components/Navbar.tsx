import React from "react";

const Navbar = () => {
  return (
    <div className="relative ">
      <div className="flex justify-between h-[100px] absolut  z-1 w-screen bg-transparent ">
        <img
          src="/logo-black-1.jpg"
          className="w-70 mx-5 px-6 h-15 rounded-2xl"
        />
        <div className="flex justify-between w-[15%] m-4">
          <div className="from-black text-xl">Galeria</div>
          <div className="from-black text-xl">Kontakt</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
