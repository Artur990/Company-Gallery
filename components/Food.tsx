import React from "react";

const Food = () => {
  return (
    <div
      id="food"
      className="relative block h-auto items-start gap-10 bg-[#4a4848] p-4 sm:flex sm:min-h-[30vh] sm:justify-center"
    >
      <div className="my-10 w-full text-white sm:w-[25%]  ">
        <p className="mb-1 text-2xl  font-bold text-white">Andrzej Grzębski</p>
        <p className="text-white">
          -Na rynku ponad 30lat, posiadamy ogromne doświadczenie i fach w
          branży.
        </p>
        <p className="text-white">
          {" "}
          -Nasze usługi świadczymy głwonie w powiatach takich jak pow.
          Sierpeccki, pow. Lipnowski, pow. Rypinski, jednak nic nie stoi na
          przeszkodzie wykonać usługę w innej lokalizacji
        </p>
      </div>
      <div className="my-10 w-full sm:w-[25%]">
        {" "}
        <ul>
          <li className="mb-1 text-2xl font-bold text-white">
            Zapraszamy do kontaktu
          </li>
          <li className="text-lg text-white">-Kom: 500-222-082</li>
          <li className=" text-lg text-white">
            -Miejscowość: Gójsk, ul.Osiedlowa 17
          </li>
        </ul>
      </div>
      <div className="my-10 w-full sm:w-[25%]">
        <p className="mb-1 text-2xl font-bold text-white">Nasze usługi:</p>
        <ul>
          <li className="text-white">-Nagrobki</li>
          <li className="text-white">-Paraprty</li>
          <li className="text-white">-Schody</li>
          <li className="text-white">-Kominki</li>
        </ul>
      </div>
    </div>
  );
};

export default Food;
