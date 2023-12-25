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
        className={`header justify-start bg-cyan-950 flex flex-col items-center`}
        style={{minHeight: height - 31}}
      >
        <div className="childrenClass" style={{overflowY: "scroll"}}>
          {children}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/28e64ecf0fdebe471ddd694dbd5e5d6843c88d73702d91789d2b04d32e2b5ef7?apiKey=0fe18961186a4286998beda9badba529&"
          alt=""
          className="aspect-[12.97] absolute bottom-0 object-contain object-center w-full  self-stretch mt-10 max-md:max-w-full max-md:mt-10"
        />
      </header>
    </div>
  );
};

export default BackgroundComponent;
