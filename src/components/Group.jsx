import React from "react";

export const Group = () => {
  return (
    <div className="relative w-[300px] h-[45px] bg-input-color rounded-[10px]">
      <div className="absolute top-[10px] left-[16px] font-body-small font-[number:var(--body-small-font-weight)] text-white text-[length:var(--body-small-font-size)] text-center tracking-[var(--body-small-letter-spacing)] leading-[var(--body-small-line-height)] whitespace-nowrap [font-style:var(--body-small-font-style)]">
        Email
      </div>
    </div>
  );
};
