import React from "react";

const Modal = ({ isFirst, setIsOpen, isOpen }) => {
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="fixed z-[100] top-0 left-0 flex items-center justify-center w-screen h-screen backdrop-blur-lg bg-black bg-opacity-60 sm:p-5 p-2"
    >
      <div className="relative w-full h-fit lg:w-[80%] lg:h-[90%]">
        <img
          src={isFirst ? "/map.webp" : "/map2.png"}
          alt={"map"}
          width={1236}
          height={834}
          className="lg:h-full rounded-xl"
        />
        <div className="absolute top-5 right-5 cursor-pointer bg-white rounded-full p-2 hover:bg-[#B5A872] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;
