import { useState } from "react";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideIn, textVariant, variants } from "@/utils/motion";
import { BsArrowRightShort } from "react-icons/bs";
import ContactForm from "./ui/ContactForm";
export const metadata = {
  title: "Kontakt",
  description: "Kontakt Andrzej",
};
export default function Kontakt() {
  return (
    <>
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
              backgroundImage: "url(/nag5.JPG)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.5,
            }}
          />
          <div className="container mx-auto ml-0 flex h-auto w-3/4 flex-col items-start px-4 pt-10 sm:ml-12 sm:items-start md:ml-24 lg:ml-36 2xl:pl-28 2xl:pt-36">
            <div className="z-10 flex h-[200px] w-[350px] flex-col justify-between bg-gray-900 sm:h-[250px] sm:w-[550px] md:w-[600px] lg:w-[700px]">
              <div className="custom-divider relative bottom-3 py-1" />
              <h1 className="p-12 text-xl text-white sm:text-2xl md:text-5xl">
                Kontakt
              </h1>
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={slideIn("left", "tween", 0.2, 1, 40)}
                className="relative flex h-1/3 w-full items-center bg-white p-1 text-base font-bold text-black sm:left-5 md:text-xl"
              >
                <h2 className="p-auto text-sm sm:text-base md:text-lg">
                  Masz pytania? Skontaktuj się z nami!{" "}
                </h2>
              </motion.div>
            </div>
            <div className="z-10 flex h-20 w-64 items-center bg-gray-900 pl-10 font-bold text-white">
              Zadzwoń 506-222-082
            </div>
            <Link
              href="#forom"
              className="group z-10 mt-4 flex h-20 w-64 cursor-pointer items-center border-b-4 border-white bg-transparent pl-10 font-bold text-white"
            >
              Formularz kont.
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
      {/* kontak */}
      <motion.section
        variants={variants}
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        // className="h-[100vh] w-full min-w-[380px]"
        className=" flex flex-col align-middle  lg:space-x-12 2xl:flex-row"
      >
        <motion.div
          variants={textVariant(1.2)}
          className="relative mx-auto my-10 flex h-auto w-full max-w-5xl items-center bg-white  sm:px-10  lg:px-24 2xl:h-[100vh]"
        >
          <div>
            <h1 className="mb-4 ml-6  text-4xl font-bold">
              Skontaktuj się z nami
            </h1>
            <p className="mb-8 ml-6 text-left text-xl">
              Skontaktuj się z nami, a odpowiemy na wszystkie Twoje pytania.
              Wypełnij dane w formularzu, a odpiszemy jak najszybciej, jak to
              tylko możliwe. Czekamy na kontakt!
            </p>
            <div className="mb-4 ml-6 flex flex-col items-start space-y-2">
              <div className="my-3 flex items-center">
                <FiMapPin className="mr-2 text-2xl" />
                <span>ul. Osiedlowa 17, 09-227 Gójsk</span>
              </div>
              <div className="my-5 flex items-center">
                <FiPhone className="mr-2 text-2xl" />
                <span>506-222-082</span>
              </div>
              <div className="my-5 flex items-center">
                <FiMail className="mr-2 text-2xl" />
                <span>andrzej@poczta.pl</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* formularz */}
        <motion.div
          variants={textVariant(1.4)}
          id="form"
          className="relative mx-auto h-auto w-full max-w-5xl bg-white px-4 py-5 sm:px-10 lg:px-24"
        >
          <div className="isolate z-30 bg-white py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                FORMULARZ KONTAKTOWY
              </h2>
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
