"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [languageSelected, setLanguageSelected] = React.useState(0);

  return (
    <div className="bg-[#8B7B61] bg-opacity-60 backdrop-blur-lg fixed z-50 top-0 w-full text-white">
      <div className="py-4 px-4 lg:px-12 flex items-center justify-between ">
        <Image src={"/logo.svg"} alt="logo" width={211} height={40} className={"hidden sm:block"}/>
        <Image src={"/logoMobile.svg"} alt="logo" width={40} height={40} className={"block sm:hidden"}/>
        <div className="lg:flex gap-7 items-center hidden">
        <a className="hover:-translate-y-1 ease-linear duration-100 transition-all" href="#nature">природа</a>
          <a className="hover:-translate-y-1 ease-linear duration-100 transition-all" href="#term">сроки охоты</a>
          <a className="hover:-translate-y-1 ease-linear duration-100 transition-all" href="#conditions">условия</a>
        </div>
        <div className="flex gap-10 items-center">
          <a className="hidden sm:block hover:-translate-y-1 ease-linear duration-100 transition-all" href="tel:+7(707)111-22-32">
            +7 (707) 111-22-32
          </a>

          <a href="https://wa.me/77071112232" target="_blank" rel="noopener noreferrer" className="hidden sm:block hover:-translate-y-1 ease-linear duration-100 transition-all">
            Whatsapp
          </a>
          <div
            onClick={() => setOpen(!open)}
            className="rounded-xl cursor-pointer relative bg-[#B5A872] text-white px-3 flex gap-3 py-1 w-fit"
          >
            <Image
              width={17}
              height={17}
              className=""
              alt="lang"
              src={languageSelected === 0 ? "/ru.svg" : languageSelected === 1 ? "/kz.svg" : "/en.svg"}
            />
            <p className="hidden sm:block">{languageSelected === 0 ? "RU" : languageSelected === 1 ? "KZ" : "EN"}</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
            {open && (
              <div className="absolute top-10 rounded-lg overflow-hidden text-white flex flex-col right-0">
                <p onClick={() => setLanguageSelected(0)} className="bg-[#B5A872] hover:bg-[#8B7B61] py-1 pr-9 pl-2 flex gap-3">
                  <Image
                    width={17}
                    height={17}
                    className=""
                    alt="lang"
                    src="/ru.svg"
                  />{" "}
                  RU
                </p>
                <p onClick={() => setLanguageSelected(1)} className="bg-[#B5A872] hover:bg-[#8B7B61] py-1 pr-9 pl-2 flex gap-3">
                  <Image
                    width={17}
                    height={17}
                    className=""
                    alt="lang"
                    src="/kz.svg"
                  />{" "}
                  KZ
                </p>
                <p onClick={() => setLanguageSelected(2)} className="bg-[#B5A872] hover:bg-[#8B7B61] py-1 pr-9 pl-2 flex gap-3">
                  <Image
                    width={17}
                    height={17}
                    className=""
                    alt="lang"
                    src="/en.svg"
                  />{" "}
                  EN
                </p>
              </div>
            )}
          </div>
          <div onClick={() => setModalOpen(!modalOpen)} className="cursor-pointer block lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ease-linear duration-100 transition-all ${modalOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {modalOpen && <div onClick={() => setModalOpen(!modalOpen)} className="flex lg:hidden flex-col gap-4 px-4 pb-4">
          <a href="#nature">природа</a>
          <a href="#term">сроки охоты</a>
          <a href="#conditions">условия</a>
          <a className="" href="tel:+7(707)111-22-32">
            +7 (707) 111-22-32
          </a>

          <a href="https://wa.me/77071112232" target="_blank" rel="noopener noreferrer">
            Whatsapp
          </a>
      </div>}
    </div>
  );
};

export default Navbar;
