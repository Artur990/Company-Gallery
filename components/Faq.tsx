import { useRef, useState } from "react";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questionRefs = [useRef<any>(null), useRef<any>(null)];

  const handleClick = (index: number) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);

      if (questionRefs[index]) {
        questionRefs[index].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      } else {
        console.warn(`No ref found for index ${index}`);
      }
    }
  };

  const questions = [
    {
      title: "Jak długo trzeba czekać na zamówiony pomnik?",
      content:
        "To zależy czy pomnik jest składany z gotowych elementów, czy wykonany pod indywidualny projekt. W pierwszym przypadku czas oczekiwania wynosi około 2 tygodni, w drugim około 4 tygodni.",
    },
    {
      title: "Czy pomnik można zamówić przez internet?",
      content:
        "Tak, wystarczy wysłać projekt pomnika na adres e-mail: Andrzej@poczta.com, a my przygotujemy wycenę i przedstawimy ją wraz z projektem wizualizacji pomnika.",
    },
    {
      title: "Czy wykomujecie napisy na nagrobkach?",
      content:
        "Tak, wykonujemy napisy na nagrobkach, a także na tablicach pamiątkowych, tablicach informacyjnych, itp.",
    },
    {
      title: "Czy zajmujecie się renowację starych nagrobków?",
      content:
        "Tak, zajmujemy się renowacją starych nagrobków, a także ich przenoszeniem.",
    },
  ];

  return (
    <div
      id="pytania-i-odpowiedzi"
      className="flex h-auto w-full flex-col bg-white  py-24 text-white dark:bg-gray-900"
    >
      <div className="mx-auto w-full max-w-5xl bg-white px-5 py-5 pl-4 dark:bg-gray-900 sm:px-10">
        <h1 className="t mb-4 text-4xl font-bold">
          Najeczęściej zadawane pytania:
        </h1>
        <hr className="mb-6 border-b border-gray-400" />
        <div className="text-xl">
          {questions.map(({ title, content }, index) => (
            <div key={index}>
              <button
                ref={questionRefs[index]}
                className="flex w-full items-center justify-between text-xl font-semibold"
                onClick={() => handleClick(index)}
              >
                <span>{title}</span>
                <span className="text-3xl">
                  {activeQuestion === index ? "-" : "+"}
                </span>
              </button>
              {activeQuestion === index && <p className="mt-4">{content}</p>}
              {index !== questions.length - 1 && (
                <hr className="my-6 border-b border-gray-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
