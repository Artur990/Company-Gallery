import styles from "@/styles";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className={`${styles.paddings} relative h-[100%] bg-slate-50`}
    >
      <section className="mt-10">
        <p className="mb-10 text-center text-3xl font-semibold">
          Zakład kamieniarki - Andrzej Grzębski{" "}
        </p>
        <p className="mx-10 mb-10 text-xl  font-semibold ">
          Na rynku istniejemy od <span className="font-bold">ponad 30 lat</span>
          i przez ten czas zdążyliśmy przekonać do naszych usług wielu Klientów,
          którzy obdarzyli nas zaufaniem i lojalnością. Do każdego klienta
          podchodzimy indywidualnie. Jesteśmy cenieni przede wszystkim za
          rzetelność oraz doświadczenie, która dzięki swojemu fachowemu
          podejściu do wykonywanych zadań stwarza przyjazną atmosferę
          współpracy.
        </p>
      </section>
      <p className="mb-10 text-center text-3xl font-semibold">
        Czym się zajmujemy?
      </p>
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

      <section className=" my-10 w-[100%] align-middle sm:flex sm:justify-center">
        <div className="sm:h=[40%] m-auto my-10 h-[100%] w-[100%] bg-transparent sm:w-[25%]">
          <img
            src="/nag1.jpg"
            alt="nagrobki"
            className="my-3 h-[300px] w-[100%] rounded-md  bg-transparent hover:opacity-80   sm:w-[90%]"
          />

          <p className="text-center text-xl font-bold sm:text-left">Nagrobki</p>
          <p className="text-center  font-medium sm:text-left">
            Jednym z głównych obszarów naszej działalności jest projektowanie
            oraz przygotowanie nagrobków z różnych kamieni, wśród których
            królują granit oraz marmur.
          </p>
        </div>
        <div className="sm:h=[40%] m-auto my-10 h-[100%] w-[100%] sm:w-[25%] ">
          <img
            src="/schody2.jpg"
            alt="nagrobki"
            className="my-3 h-[300px] w-[60%] rounded-md hover:opacity-80  sm:w-[90%]"
          />
          <p className="text-center text-xl font-bold sm:text-left">Schody</p>
          <p className="text-center  font-medium sm:text-left">
            Nasza firma zajmuje się produkcją i montażem schodów wewnętrznych
            jak i zewnętrznych. Wykonanych z granitu,marmuru i z innych rodzajów
            kamienia. Są to konstrukcje solidne i trwałe, a przy tym doskonale
            się prezentują.
          </p>
        </div>
        <div className="sm:h=[40%] m-auto my-10 h-[100%] w-[100%] sm:w-[25%] ">
          <img
            src="/parapet1.jpg"
            alt="nagrobki"
            className="my-3 h-[300px] w-[100%] rounded-md hover:opacity-80  sm:w-[90%]"
          />
          <p className="text-center text-xl font-bold sm:text-left">
            Blaty kuchenne
          </p>
          <p className="text-center  font-medium sm:text-left">
            Jednym z głównych obszarów naszej działalności jest projektowanie
            oraz przygotowanie nagrobków z różnych kamieni, wśród których
            królują granit oraz marmur.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
