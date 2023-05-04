import { useRef, useState } from "react";

const FaqSection = () => {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);

  const question1Ref = useRef<any>(null);
  const question2Ref = useRef<any>(null);

  const handleClick1 = () => {
    setShowAnswer1(!showAnswer1);
    question1Ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleClick2 = () => {
    setShowAnswer2(!showAnswer2);
    question2Ref.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white text-white dark:bg-gray-900">
      <div className="w-full max-w-5xl bg-white px-5 py-5 pl-4 dark:bg-gray-900 sm:px-10">
        <h1 className="t mb-4 text-4xl font-bold">
          Frequently asked questions
        </h1>
        <hr className="mb-6 border-b border-gray-400" />
        <div className="text-xl">
          <button
            ref={question1Ref}
            className="flex w-full items-center justify-between text-xl font-semibold"
            onClick={handleClick1}
          >
            <span>What s the best thing about Switzerland?</span>
            <span className="text-3xl">{showAnswer1 ? "-" : "+"}</span>
          </button>
          {showAnswer1 && (
            <p className="mt-4">
              I don t know, but the flag is a big plus. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quas cupiditate laboriosam
              fugiat.
            </p>
          )}
          <hr className="my-6 border-b border-gray-400" />
          <button
            ref={question2Ref}
            className="flex w-full items-center justify-between text-xl font-semibold"
            onClick={handleClick2}
          >
            <span>Why do we never tell secrets on a farm?</span>
            <span className="text-3xl">{showAnswer2 ? "-" : "+"}</span>
          </button>
          {showAnswer2 && (
            <p className="mt-4">
              Because the potatoes have eyes and the corn has ears. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quas cupiditate
              laboriosam fugiat.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
