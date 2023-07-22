import React from "react";

const FrequentlyQuestions = () => {
  return (
    <section className="w-full flex flex-col bg-GhostWhite p-2 gap-4 mb-8 base:flex-row base:p-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-extrabold s:text-lg sm:text-xl md:text-2xl">
          Frequently asked
          <br />
          questions
        </h3>
        <p className="text-sm text-SlateGray sm:text-base">
          Can’t find the answer you’re looking for? Reach out to our{" "}
          <span className="text-OrangeRed">customer support</span> team.
        </p>
      </div>
      <ul className="w-full flex flex-col gap-4">
        <li className="w-full flex flex-col gap-2">
          <span className="font-medium base:text-lg">
            ¿How do you make holy water?
          </span>
          <p className="text-xs text-SlateGray sm:text-sm">
            You boil the hell out of it. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quas cupiditate laboriosam fugiat.{" "}
          </p>
        </li>
        <li className="w-full flex flex-col gap-2">
          <span className="font-medium base:text-lg">
            ¿What's the best thing about Switzerland?
          </span>
          <p className="text-xs text-SlateGray sm:text-sm">
            I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
          </p>
        </li>
        <li className="w-full flex flex-col gap-2">
          <span className="font-medium base:text-lg">
            ¿What do you call someone with no body and no nose?
          </span>
          <p className="text-xs text-SlateGray sm:text-sm">
            Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quas cupiditate laboriosam fugiat.
          </p>
        </li>
        <li className="w-full flex flex-col gap-2">
          <span className="font-medium base:text-lg">
            ¿Why do you never see elephants hiding in trees?
          </span>
          <p className="text-xs text-SlateGray sm:text-sm">
            Because they're so good at it. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default FrequentlyQuestions;
