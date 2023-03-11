import React from "react";
import { motion } from "framer-motion";
const Slider = () => {
  return (
    <div className="relative">
      <p className="text-center font-extrabold text-2xl">
        Darmowa wycena: kontakt -{" "}
        <span className="text-red-400 ">505-222-082</span>
      </p>
      <div className="absolut z-[0] mt-5 w-3/4 mx-40">
        <motion.div className="cursor-grab overflow-hidden bg-transparent">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0 }}
            className="flex bg-transparent"
          >
            {["nag1.jpg", "nag2.jpg"].map((image, i) => {
              return (
                <motion.div key={i} className="min-h-[40rem] w-[60%] p-[40px]">
                  <img
                    src={image}
                    alt="img"
                    className="w-full h-full rounded-3xl pointer-events-none"
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
