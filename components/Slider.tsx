import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Slider = () => {
  const [width, setWidth] = useState<any>();
  const carousel = useRef() as any;
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="relative m-0">
      <p className="text-center text-2xl font-extrabold ">
        Darmowa wycena: kontakt:{" "}
        <span className="hidden text-center text-2xl font-extrabold text-red-400 sm:block ">
          505-222-082
        </span>
      </p>
      <p className="text-center text-2xl font-extrabold text-red-400 sm:hidden ">
        505-222-082
      </p>
      <div className="absolut z-[0] m-0 mx-0 mt-5 w-full sm:mx-24 sm:w-3/4">
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="cursor-grab overflow-hidden bg-transparent"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex bg-transparent"
          >
            {[
              "/nag1.jpg",
              "/nag2.jpg",
              "/nag6.JPG",
              "/nag5.jpg",
              "/nag4.jpg",
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
      </div>
    </div>
  );
};

export default Slider;
