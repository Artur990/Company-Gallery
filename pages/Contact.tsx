import { useState } from "react";
import { AiOutlineHome, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { Switch } from "@headlessui/react";

// function classNames() {
//   return classes.filter(Boolean).join(" ");
// }

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    // <div>
    //   <div className="h-[100vh] w-full max-w-5xl bg-white px-4 py-5 sm:px-10">
    //     <h1 className="mb-4 ml-6  text-4xl font-bold">Skontaktuj się z nami</h1>
    //     <p className="mb-8 ml-6 text-left text-xl">
    //       Skontaktuj się z nami, a odpowiemy na wszystkie Twoje pytania.
    //       Wypełnij dane w formularzu, a odpiszemy jak najszybciej, jak to tylko
    //       możliwe. Czekamy na kontakt!
    //     </p>
    //     <div className="mb-4 ml-6 flex flex-col items-start space-y-2">
    //       <div className="my-3 flex items-center">
    //         <FiMapPin className="mr-2 text-2xl" />
    //         <span>ul. Przykładowa 12, 00-123 Warszawa</span>
    //       </div>
    //       <div className="my-5 flex items-center">
    //         <FiPhone className="mr-2 text-2xl" />
    //         <span>+48 123 456 789</span>
    //       </div>
    //       <div className="my-5 flex items-center">
    //         <FiMail className="mr-2 text-2xl" />
    //         <span>kontakt@przyklad.pl</span>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    //     <div
    //       className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
    //       aria-hidden="true"
    //     >
    //       <div
    //         className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
    //         style={{
    //           clipPath:
    //             "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //         }}
    //       />
    //     </div>
    //     <div className="mx-auto max-w-2xl text-center">
    //       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
    //         Contact sales
    //       </h2>
    //       <p className="mt-2 text-lg leading-8 text-gray-600">
    //         Aute magna irure deserunt veniam aliqua magna enim voluptate.
    //       </p>
    //     </div>
    //     <form
    //       action="#"
    //       method="POST"
    //       className="mx-auto mt-16 max-w-xl sm:mt-20"
    //     >
    //       <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
    //         <div>
    //           <label
    //             htmlFor="first-name"
    //             className="block text-sm font-semibold leading-6 text-gray-900"
    //           >
    //             First name
    //           </label>
    //           <div className="mt-2.5">
    //             <input
    //               type="text"
    //               name="first-name"
    //               id="first-name"
    //               autoComplete="given-name"
    //               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>
    //         <div>
    //           <label
    //             htmlFor="last-name"
    //             className="block text-sm font-semibold leading-6 text-gray-900"
    //           >
    //             Last name
    //           </label>
    //           <div className="mt-2.5">
    //             <input
    //               type="text"
    //               name="last-name"
    //               id="last-name"
    //               autoComplete="family-name"
    //               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>
    //         <div className="sm:col-span-2">
    //           <label
    //             htmlFor="company"
    //             className="block text-sm font-semibold leading-6 text-gray-900"
    //           >
    //             Company
    //           </label>
    //           <div className="mt-2.5">
    //             <input
    //               type="text"
    //               name="company"
    //               id="company"
    //               autoComplete="organization"
    //               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>
    //         <div className="sm:col-span-2">
    //           <label
    //             htmlFor="email"
    //             className="block text-sm font-semibold leading-6 text-gray-900"
    //           >
    //             Email
    //           </label>
    //           <div className="mt-2.5">
    //             <input
    //               type="email"
    //               name="email"
    //               id="email"
    //               autoComplete="email"
    //               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>
    //         <div className="sm:col-span-2">
    //           <label
    //             htmlFor="phone-number"
    //             className="block text-sm font-semibold leading-6 text-gray-900"
    //           >
    //             Phone number
    //           </label>
    //           <div className="relative mt-2.5">
    //             <input
    //               type="tel"
    //               name="phone-number"
    //               id="phone-number"
    //               autoComplete="tel"
    //               className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //             />
    //           </div>
    //         </div>
    //         <div className="sm:col-span-2">
    //           <label
    //             htmlFor="message"
    //             className="block text-sm font-semibold leading-6 text-gray-900"
    //           >
    //             Message
    //           </label>
    //           <div className="mt-2.5">
    //             <textarea
    //               name="message"
    //               id="message"
    //               rows={4}
    //               className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //               defaultValue={""}
    //             />
    //           </div>
    //         </div>

    //       </div>
    //       <div className="mt-10">
    //         <button
    //           type="submit"
    //           className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //         >
    //           Let s talk
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="flex flex-col lg:space-x-12 2xl:flex-row">
      <div className="flex h-auto w-full max-w-5xl items-center bg-white  px-4 py-5 sm:px-10  lg:px-24 2xl:h-[100vh]">
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

      <div className="h-auto w-full max-w-5xl bg-white px-4 py-5 sm:px-10 lg:px-24">
        <div className="isolate bg-white py-24 sm:py-32 lg:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              kontakt do nas
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
                  Wiadomość
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
  );
}
