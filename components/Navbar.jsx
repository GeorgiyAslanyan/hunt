"use client";
import React, { useEffect } from "react";

const Navbar = () => {
  const [scrollY, setScrollY] = React.useState(0);

  const [open, setOpen] = React.useState(false);
  const [openNumber, setOpenNumber] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [languageSelected, setLanguageSelected] = React.useState(0);
  const [isFirst, setIsFirst] = React.useState(true);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollY > 5200 ? setIsFirst(false) : setIsFirst(true);
  }, [scrollY])

  return (
    <div className="bg-[#8B7B61] bg-opacity-60 backdrop-blur-lg fixed z-50 top-0 w-full text-white">
      <div className="py-4 px-4 lg:px-12 flex items-center justify-between font-semibold">
        <img
          src={"/logo.svg"}
          alt="logo"
          width={211}
          height={40}
          className={"hidden sm:block"}
        />
        <img
          src={"/logoMobile.svg"}
          alt="logo"
          width={40}
          height={40}
          className={"block sm:hidden"}
        />
        <div className="lg:flex gap-7 items-center hidden ">
          <a
            className="hover:-translate-y-1 ease-linear duration-100 transition-all"
            href={isFirst ? "#nature" : "#nature2"}
          >
            природа
          </a>
          <a
            className="hover:-translate-y-1 ease-linear duration-100 transition-all"
            href={isFirst ? "#term" : "#term2"}
          >
            сроки охоты
          </a>
          <a
            className="hover:-translate-y-1 ease-linear duration-100 transition-all"
            href={isFirst ? "#conditions" : "#conditions2"}
          >
            условия
          </a>
        </div>
        <div className="flex gap-10 items-center">
          <a
            href="https://wa.me/77017576636"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block hover:-translate-y-1 ease-linear duration-100 transition-all"
          >
            Whatsapp
          </a>
          <div
            onClick={() => setOpenNumber(!openNumber)}
            className="rounded-xl hidden md:flex cursor-pointer relative bg-[#B5A872] text-white px-3 gap-3 py-1 w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

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
            {openNumber && (
              <div className="absolute top-10 rounded-lg overflow-hidden text-white flex flex-col right-0">
                <a
                  className="bg-[#B5A872] hover:bg-[#8B7B61] py-1 pr-9 pl-2 flex gap-3 whitespace-nowrap"
                  href="tel:+7(701)788-43-17"
                >
                  +7 (701) 788-43-17
                </a>
                <a
                  className="bg-[#B5A872] hover:bg-[#8B7B61] py-1 pr-9 pl-2 flex gap-3 whitespace-nowrap"
                  href="tel:+7(701)757-66-36"
                >
                  +7 (701) 757-66-36
                </a>
                <a
                  className="bg-[#B5A872] hover:bg-[#8B7B61] py-1 pr-9 pl-2 flex gap-3 whitespace-nowrap"
                  href="tel:2970902"
                >
                  297-09-02
                </a>
              </div>
            )}
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="rounded-xl cursor-pointer relative bg-[#B5A872] text-white px-3 flex gap-3 py-1 w-fit"
          >
            <img
              width={17}
              height={17}
              className=""
              alt="lang"
              src={
                languageSelected === 0
                  ? "/ru.svg"
                  : languageSelected === 1
                  ? "/kz.svg"
                  : "/en.svg"
              }
            />
            <p className="hidden sm:block">
              {languageSelected === 0
                ? "RU"
                : languageSelected === 1
                ? "KZ"
                : "EN"}
            </p>{" "}
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
                <p
                  onClick={() => setLanguageSelected(0)}
                  className="bg-[#B5A872] hover:bg-[#8B7B61] py-1 pr-9 pl-2 flex gap-3"
                >
                  <img
                    width={17}
                    height={17}
                    className=""
                    alt="lang"
                    src="/ru.svg"
                  />{" "}
                  RU
                </p>
                <p
                  onClick={() => setLanguageSelected(1)}
                  className="bg-[#B5A872] hover:bg-[#8B7B61] py-1 pr-9 pl-2 flex gap-3"
                >
                  <img
                    width={17}
                    height={17}
                    className=""
                    alt="lang"
                    src="/kz.svg"
                  />{" "}
                  KZ
                </p>
                <p
                  onClick={() => setLanguageSelected(2)}
                  className="bg-[#B5A872] hover:bg-[#8B7B61] py-1 pr-9 pl-2 flex gap-3"
                >
                  <img
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
          <div
            onClick={() => setModalOpen(!modalOpen)}
            className="cursor-pointer block lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ease-linear duration-100 transition-all ${
                modalOpen ? "rotate-90" : "rotate-0"
              }`}
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
      {modalOpen && (
        <div
          onClick={() => setModalOpen(!modalOpen)}
          className="flex lg:hidden flex-col gap-4 px-4 pb-4"
        >
          <a href={isFirst ? "#nature" : "#nature2"}>природа</a>
          <a href={isFirst ? "#term" : "#term2"}>сроки охоты</a>
          <a href={isFirst ? "#conditions" : "#conditions2"}>условия</a>
          <a href="tel:+7(701)788-43-17">+7 (701) 788-43-17</a>
          <a href="tel:+7(701)757-66-36">+7 (701) 757-66-36</a>
          <a href="tel:2970902">297-09-02</a>
          <a
            href="https://wa.me/77071112232"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
