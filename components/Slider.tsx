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
        Darmowa wycena: kontakt -{" "}
        <span className="text-red-400 ">505-222-082</span>
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
              "/nag4.jpg",
              "/nag5.jpg",
              "/nag4.jpg",
            ].map((image, i) => {
              return (
                <motion.div key={i} className="min-h-[40rem] w-[60%] p-[0px]">
                  <Image
                    src={image}
                    alt="img"
                    width={284}
                    height={380}
                    className="  pointer-events-none  m-5 h-full  w-[50%] min-w-[220px] rounded-3xl sm:min-w-[400px] "
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
