import React from "react";

const About = () => {
  return (
    <div className=" h-[100%] bg-slate-100 opacity-80 ">
      <section className="mt-10">
        <p className="text-center text-3xl mb-10 font-semibold">
          Zakład kamieniarki - Andrzej Grzębski{" "}
        </p>
        <p className="text-xl mx-10 mb-10  font-semibold">
          Na rynku istniejemy od <span className="font-bold">ponad 30 lat</span>
          i przez ten czas zdążyliśmy przekonać do naszych usług wielu Klientów,
          którzy obdarzyli nas zaufaniem i lojalnością. Do każdego klienta
          podchodzimy indywidualnie. Jesteśmy cenieni przede wszystkim za
          rzetelność oraz doświadczenie, która dzięki swojemu fachowemu
          podejściu do wykonywanych zadań stwarza przyjazną atmosferę
          współpracy.
        </p>
      </section>
      <p className="text-center text-3xl mb-10">Czym się zajmujemy?</p>
      <p className="text-xl mx-10 mb-1  font-semibold">
        Oferowane przez nas granity i marmury posiadają najlepsze parametry
        wśród podobnych oferowanych na rynku, dzięki naszemu wieloletneimu
        doświadczeniu:
      </p>
      <ul>
        <li className="ml-10 font-bold">-Obsługa od A do Z.</li>
        <li className="ml-10 font-bold">-Pomiar i fachowe doradztwo.</li>
        <li className="ml-10 font-bold">-Doradzimy i pomożemy w wyborze.</li>
      </ul>

      <section className=" my-10 flex justify-center align-middle">
        <div className="w-[25%] h=[40%]">
          <span className="hover:bg-white">
            <img
              src="/nag1.jpg"
              alt="nag1.jpg"
              className="w-[90%] h=[60%] rounded-md hover:bg-fuchsia-200"
            />
          </span>

          <p className="font-bold text-xl">Nagrobki</p>
          <p className="font-medium">
            Jednym z głównych obszarów naszej działalności jest projektowanie
            oraz przygotowanie nagrobków z różnych kamieni, wśród których
            królują granit oraz marmur.
          </p>
        </div>
        <div className="w-[25%] h=[40%]">
          <img
            src="/nag1.jpg"
            alt="nag1.jpg"
            className="w-[90%] h=[60%] rounded-md"
          />
          <p className="font-bold text-xl">Schody</p>
          <p className="font-medium">
            Nasza firma zajmuje się produkcją i montażem schodów wewnętrznych
            jak i zewnętrznych. Wykonanych z granitu,marmuru i z innych rodzajów
            kamienia. Są to konstrukcje solidne i trwałe, a przy tym doskonale
            się prezentują.
          </p>
        </div>
        <div className="w-[25%] h=[40%]">
          <img
            src="/nag1.jpg"
            alt="nag1.jpg"
            className="w-[90%] h=[60%] rounded-md"
          />
          <p className="font-bold text-xl">Blaty kuchenne</p>
          <p className="font-medium">
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
