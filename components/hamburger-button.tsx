"use client";

import { Fragment, useState } from "react";

type Props = {
  isOpen: boolean;
  handleToggleAction: () => void;
};

export default function Humburger({ isOpen, handleToggleAction }: Props) {
  return (
    <Fragment>
      <button onClick={handleToggleAction} className="relative lg:hidden">
        <div
          className={`relative flex items-center justify-center w-[50px] h-[50px] transform transition-all duration-200 shadow-md
            ${isOpen ? "c/ring-4 ring-gray-300" : "ring-0"}
          `}
        >
          <div
            className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center
              ${isOpen ? "-rotate-45" : ""}
            `}
          >
            {/* Top bar */}
            <div
              className={`bg-white rounded transform transition-all duration-300 origin-right delay-75
                ${isOpen ? "-rotate-90 h-[1px] -translate-y-[1px] w-1/2" : "h-[2px] w-1/2"}
              `}
            />

            {/* Middle bar */}
            <div className="bg-white h-[1px] rounded" />

            {/* Bottom bar */}
            <div
              className={`bg-white rounded self-end transform transition-all duration-300 origin-left delay-75
                ${isOpen ? "-rotate-90 h-[1px] translate-y-[1px] w-1/2" : "h-[2px] w-1/2"}
              `}
            />
          </div>
        </div>
      </button>
    </Fragment>
  );
}
