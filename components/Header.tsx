import { motion } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Link from "next/link";
import { slideIn, variants } from "@/utils/motion";

import { BsArrowRightShort } from "react-icons/bs";

const Header = () => {
  return (
    <motion.section
      variants={variants}
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-[100vh] w-full min-w-[380px]"
    >
      <div className="relative h-screen bg-black">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/nag1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        />
        <div className="container mx-auto ml-0 flex h-auto w-3/4 flex-col items-start px-4 pt-10 sm:ml-12 sm:items-start md:ml-24 lg:ml-36 2xl:pl-28 2xl:pt-36">
          <div className="z-10 flex h-[200px] w-[350px] flex-col justify-between bg-gray-900 sm:h-[250px] sm:w-[550px] md:w-[600px] lg:w-[700px]">
            <div className="custom-divider relative bottom-3 py-1" />
            <h1 className="p-12 text-xl text-white sm:text-2xl md:text-5xl">
              Andrzej Grzębski Pomniki
            </h1>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={slideIn("left", "tween", 0.2, 1, 40)}
              className="relative flex h-1/3 w-full items-center bg-white p-1 text-base font-bold text-black sm:left-5 md:text-xl"
            >
              <h2 className="p-auto text-sm sm:text-base md:text-lg">
                Profesjonalne podejście oparte na 30-letnim doświadczeniu!{" "}
              </h2>
            </motion.div>
          </div>
          <div className="z-10 flex h-20 w-64 items-center bg-gray-900 pl-10 font-bold text-white">
            Zadzwoń 506-222-082
          </div>
          <Link
            href="/kontakt"
            className="group z-10 mt-4 flex h-20 w-64 cursor-pointer items-center border-b-4 border-white bg-transparent pl-10 font-bold text-white"
          >
            Napisz do nas!
            <motion.span
              variants={slideIn("right", "tween", 0.2, 1, 40)}
              className="ml-2 hidden group-hover:flex"
            >
              <BsArrowRightShort className="m-2 h-6 w-6" />
            </motion.span>
          </Link>
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1, 40)}
            className="relative -mt-3 w-full md:-mt-5"
          >
            <div
              id="atuty"
              className="relative mt-4 w-60 bg-transparent md:bottom-20 md:left-96"
            >
              <div className="cart">
                <i className="icon">
                  <AiOutlineCheckCircle className="h-8 w-8" />
                </i>
                <p>Długi okres na rynku!</p>
              </div>
              <div className="cart">
                <i className="icon">
                  <AiOutlineCheckCircle className="h-8 w-8" />
                </i>
                <p>Gwarancja konkretnej realizacji</p>
              </div>
              <div className="custom-divider" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default Header;
