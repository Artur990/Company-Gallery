import React from "react";

const Gallery = () => {
  return (
    <div className=" h-[50vh]  ">
      <p className="text-center text-3xl mb-5 font-semibold">Galeria</p>
      <div className="grid gap-1 grid-cols-1 p-10 m-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].map((e, i) => {
          return (
            <img
              key={i}
              src="/nag3.JPG"
              alt="/nag3.JPG"
              className="w-[40vh] h-[40vh] rounded-sm"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
