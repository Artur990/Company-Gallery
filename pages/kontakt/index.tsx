import { useState } from "react";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const metadata = {
  title: "Kontakt",
  description: "Kontakt Andrzej",
};
export default function Example() {
  return (
    <>
      <div className="relative h-[600px] bg-black">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/nag5.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "contain",
            // backgroundAttachment: "fixed",
            opacity: 0.5,
          }}
        />
        <div className="pxs-4 container mx-auto flex h-full items-center justify-between">
          <div className="z-10 w-full text-white md:w-1/2">
            <div className="mb-4  rounded-md bg-zinc-800 p-5 opacity-90">
              <h1 className="mb-4 text-4xl font-bold text-white">KONTAKT</h1>
            </div>
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
              <p>Doświadczenie oparte na 30-letniej pracy!</p>
            </div>
          </div>
          <div className="z-10 flex w-full flex-col items-center text-black md:w-1/2 md:items-start"></div>
        </div>
      </div>
      <div className=" flex flex-col align-middle  lg:space-x-12 2xl:flex-row">
        {/* kontak */}
        <div className=" relative mx-auto my-10 flex h-auto w-full max-w-5xl items-center bg-white  sm:px-10  lg:px-24 2xl:h-[100vh]">
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
        </div>
        {/* formularz */}
        <div className="relative mx-auto h-auto w-full max-w-5xl bg-white px-4 py-5 sm:px-10 lg:px-24">
          <div className="isolate z-30 bg-white py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                FORMULARZ KONTAKTOWY
              </h2>
            </div>
            <form
              action="#"
              method="POST"
              className="mx-auto mt-16 max-w-xl sm:mt-20"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Imie
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Nazwisko
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Numer telefonu
                  </label>
                  <div className="relative mt-2.5">
                    <input
                      type="tel"
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    WYŚLIJ WIADOMOŚĆ
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Wyślij
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
