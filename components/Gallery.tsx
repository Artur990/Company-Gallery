import Image from "next/image";
import React, { useId } from "react";

const Gallery = () => {
  const id = useId();
  return (
    <div className=" h-[50vh]  ">
      <p className="mb-5 text-center text-3xl font-semibold">Galeria</p>
      <div className="m-10 grid grid-cols-1 gap-1 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {[...Array(13)].map((e, i) => {
          return (
            <img
              key={id}
              src="/nag3.JPG"
              alt="nagrobki"
              className="h-[50vh] w-[60vh] cursor-grab rounded-sm sm:w-[50vh]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
