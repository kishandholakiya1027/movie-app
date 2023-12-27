import useWindowSize from "@/hooks/useWindowSize";
import React from "react";

const BackgroundComponent = ({children}) => {
  const {height} = useWindowSize();
  console.log(
    "🚀 ~ file: backgroundComponent.jsx:6 ~ BackgroundComponent ~ height:",
    height
  );
  return (
    <div>
      <header
        className={`header  bg-cyan-950 flex justify-end flex-col items-center`}
        style={{minHeight: height}}
      >
        <div className="childrenClass flex justify-start" style={{overflowY: "scroll"}}>
          {children}
        </div>
        <div className="flex justify-end w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28e64ecf0fdebe471ddd694dbd5e5d6843c88d73702d91789d2b04d32e2b5ef7?apiKey=0fe18961186a4286998beda9badba529&"
          alt=""
          className="aspect-[12.97] bottom-0 object-contain object-center w-full  self-stretch mt-10 max-md:max-w-full max-md:mt-10"
        />

        </div>
      </header>
    </div>
  );
};

export default BackgroundComponent;
