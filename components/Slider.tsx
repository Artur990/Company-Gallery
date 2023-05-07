import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Slider = () => {
  // const [width, setWidth] = useState<any>();
  // const carousel = useRef() as any;
  // useEffect(() => {
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (
    <div className="relative m-0 ">
      {/* <p className="text-center text-2xl font-extrabold ">
        Darmowa wycena: kontakt:{" "}
        <span className="hidden text-center text-2xl font-extrabold text-red-400 sm:block ">
          505-222-082
        </span>
      </p>
      <p className="text-center text-2xl font-extrabold text-red-400 sm:hidden ">
        505-222-082
      </p> */}
      {/* <div className="absolut z-[0] m-0 mx-0 mt-5 w-full sm:mx-24 sm:w-3/4">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="cursor-grab overflow-hidden bg-transparent"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: width }}
            className="flex bg-transparent"
          >
            {[
              "/nag1.JPG",
              "/nag2.JPG",
              "/nag6.JPG",
              "/nag5.JPG",
              "/nag4.JPG",
            ].map((image, i) => {
              return (
                <motion.div key={i} className="min-h-[30rem] w-[100%] p-[0px]">
                  <img
                    src={image}
                    alt="img"
                    className="  pointer-events-none  m-2 h-full  w-[90%] min-w-[320px] rounded-3xl sm:min-w-[400px] "
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div> */}
      {/* <div
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/nag1.jpg')" }}
      > */}
      <div className="relative h-[600px] bg-black">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/nag1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        ></div>
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          <div className="z-10 w-full text-white md:w-1/2">
            {/* <div className="mb-4  rounded-md bg-zinc-800 p-5 opacity-90">
              <h1 className="mb-4 text-4xl font-bold text-white">
                Nagrobki Andrzej Grzębski
              </h1>
            </div> */}
            <div className="mb-4  rounded-md bg-zinc-800 p-3 opacity-90">
              <p className="text-center font-bold text-red-600">
                Darmowa wycena!
              </p>
            </div>

            <div className="mb-4 flex items-center rounded-xl bg-zinc-800 p-2 opacity-90">
              <i className="h-8 w-8 text-green-500">
                <AiOutlineCheckCircle className="h-8 w-8" />
              </i>
              <p>Długi okres na rynku!</p>
            </div>
            <div className="mb-4 flex items-center rounded-xl bg-zinc-800 p-2 opacity-90">
              <i className="h-8 w-8 text-green-500">
                <AiOutlineCheckCircle className="h-8 w-8" />
              </i>
              <p>Gwarancja konkretnej realizacji</p>
            </div>
            <div className="mb-4 flex items-center rounded-xl bg-zinc-800 p-2 opacity-90">
              <i className="h-8 w-8 text-green-500">
                <AiOutlineCheckCircle className="h-8 w-8" />
              </i>
              <p>Profesjonalne podejście oparte na 30-letnim doświadczeniu</p>
            </div>
            <div className="mb-4 flex items-center rounded-xl bg-zinc-800 p-2 opacity-90">
              <i className="h-8 w-8 text-green-500">
                <AiOutlineCheckCircle className="h-8 w-8" />
              </i>
              <p>Indywidualne podejście do każdego klienta</p>
            </div>
            <div className="mb-4 flex items-center rounded-xl bg-zinc-800 p-2 opacity-90">
              <i className="h-8 w-8 text-green-500">
                <AiOutlineCheckCircle className="h-8 w-8" />
              </i>
              <p>Doświadczenie oparte na 30-letniej pracy!</p>
            </div>
          </div>
          <div className="z-10 flex w-full flex-col items-center text-black md:w-1/2 md:items-start">
            {/* <div className="mb-4 flex items-center rounded-xl bg-white p-2">
              <i className="h-8 w-8 text-green-500">
                <AiOutlineCheckCircle className="h-8 w-8" />
              </i>
              <p>Gwarancja konkretnej realizacji</p>
            </div>
            <div className="mb-4 flex items-center rounded-xl bg-zinc-800 p-2 opacity-90">
              <i className="h-8 w-8 text-green-500">
                <AiOutlineCheckCircle className="h-8 w-8" />
              </i>
              <p>Profesjonalne podejście oparte na 30-letnim doświadczeniu</p>
            </div>
            <div className="mb-4 flex items-center rounded-xl bg-white p-2">
              <i className="h-8 w-8 text-green-500">
                <AiOutlineCheckCircle className="h-8 w-8" />
              </i>
              <p>Indywidualne podejście do każdego klienta</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
