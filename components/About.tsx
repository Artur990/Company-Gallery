import styles from "@/styles";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { slideIn, textVariant, variants } from "@/utils/motion";
const About = () => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` mx-auto flex flex-col`}
    >
      <section
        id="about"
        className={`${styles.paddings} relative h-[100%] bg-slate-50 py-5`}
      >
        <motion.div variants={textVariant(1.2)} className="my-20">
          <div>
            <h2 className="mb-10 text-center text-3xl font-semibold">
              Zakład kamieniarki - Andrzej Grzębski{" "}
            </h2>
            <p className="mx-10 mb-10 text-xl  font-semibold ">
              Na rynku istniejemy od{" "}
              <span className="font-bold">ponad 30 lat</span>i przez ten czas
              zdążyliśmy przekonać do naszych usług wielu Klientów, którzy
              obdarzyli nas zaufaniem i lojalnością. Do każdego klienta
              podchodzimy indywidualnie. Jesteśmy cenieni przede wszystkim za
              rzetelność oraz doświadczenie, która dzięki swojemu fachowemu
              podejściu do wykonywanych zadań stwarza przyjazną atmosferę
              współpracy.
            </p>
          </div>
        </motion.div>
        <motion.div variants={textVariant(1.4)} className="my-5">
          <h2 className="mb-10 text-center text-3xl font-semibold">
            Czym się zajmujemy?
          </h2>
          <p className="mx-10 mb-1 text-2xl  font-semibold">
            Oferowane przez nas granity i marmury posiadają najlepsze parametry
            wśród podobnych oferowanych na rynku, dzięki naszemu wieloletneimu
            doświadczeniu:
          </p>
          <ul>
            <li className="ml-10 text-xl font-semibold">-Obsługa od A do Z.</li>
            <li className="ml-10 text-xl  font-semibold">
              -Pomiar i fachowe doradztwo.
            </li>
            <li className="ml-10 text-xl   font-semibold  ">
              -Doradzimy i pomożemy w wyborze.
            </li>
          </ul>
        </motion.div>
        <div className=" my-5 w-[100%] align-middle sm:flex sm:justify-center">
          <motion.div
            variants={slideIn("left", "tween", 0.6, 1, 60)}
            className="sm:h=[40%] m-auto my-5 h-[100%] w-[100%] bg-transparent sm:w-[25%]"
          >
            <Image
              width={300}
              height={300}
              src="/nag1.jpg"
              alt="nagrobki"
              className="my-3 h-[300px] w-[100%] rounded-md  bg-transparent hover:opacity-80   sm:w-[90%]"
            />

            <h3 className="text-center text-xl font-bold sm:text-left">
              Nagrobki
            </h3>
            <p className="text-center  font-medium sm:text-left">
              Jednym z głównych obszarów naszej działalności jest projektowanie
              oraz przygotowanie nagrobków z różnych kamieni, wśród których
              królują granit oraz marmur.
            </p>
          </motion.div>

          <motion.div
            variants={slideIn("up", "tween", 0.6, 1, 60)}
            className="sm:h=[40%] m-auto my-5 h-[100%] w-[100%] sm:w-[25%] "
          >
            <Image
              width={300}
              height={300}
              src="/schody2.jpg"
              alt="nagrobki"
              className="my-3 h-[300px] w-[60%] rounded-md hover:opacity-80  sm:w-[90%]"
            />
            <h3 className="text-center text-xl font-bold sm:text-left">
              Schody
            </h3>
            <p className="text-center  font-medium sm:text-left">
              Nasza firma zajmuje się produkcją i montażem schodów wewnętrznych
              jak i zewnętrznych. Wykonanych z granitu,marmuru i z innych
              rodzajów kamienia. Są to konstrukcje solidne i trwałe, a przy tym
              doskonale się prezentują.
            </p>
          </motion.div>
          <motion.div
            variants={slideIn("right", "tween", 0.6, 1, 60)}
            className="sm:h=[40%] m-auto my-5 h-[100%] w-[100%] sm:w-[25%] "
          >
            <Image
              width={300}
              height={300}
              src="/parapet1.jpg"
              alt="nagrobki"
              className="my-3 h-[300px] w-[100%] rounded-md hover:opacity-80  sm:w-[90%]"
            />
            <h3 className="text-center text-xl font-bold sm:text-left">
              Blaty kuchenne
            </h3>
            <p className="text-center  font-medium sm:text-left">
              Jednym z głównych obszarów naszej działalności jest projektowanie
              oraz przygotowanie nagrobków z różnych kamieni, wśród których
              królują granit oraz marmur.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
