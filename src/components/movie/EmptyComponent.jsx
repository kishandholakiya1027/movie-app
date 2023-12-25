import React from "react";
import BackgroundComponent from "../common/backgroundComponent";

const EmptyComponent = () => {
  return (
    <BackgroundComponent>
      <div className="flex flex-col justify-end items-center">
        <header className="text-white text-center text-5xl font-semibold leading-[56.16px] self-center mt-72 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Your movie list is empty
        </header>
        <a
          href="#"
          className="text-white text-center text-base font-bold leading-6 whitespace-nowrap items-stretch bg-emerald-400 self-center justify-center mt-10 px-7 py-4 rounded-xl max-md:mt-10 max-md:px-5"
        >
          Add a new movie
        </a>
      </div>
    </BackgroundComponent>
  );
};

export default EmptyComponent;
