import Image from "next/image";
import React from "react";

const Hero = ({ isFirst }) => {
  return (
    <div className={`h-[80vh] md:h-screen p-5 lg:p-20 text-white relative ${isFirst ? "bg-[url('/hero.webp')]" : "bg-[url('/hero2.webp')]"} bg-cover`}>
      <div className="h-full flex flex-col gap-8 justify-end lg:justify-center z-10 relative">
        {isFirst ? (
          <h1 className="text-white font-semibold text-3xl sm:text-5xl leading-[1.2]">
            Загонная и индивидуальная <br /> охота в Кокбельсу
          </h1>
        ) : (
          <h1 className="text-white font-semibold text-3xl sm:text-5xl leading-[1.2]">
            Загонная и индивидуальная <br /> охота в охотхозяйстве «Айдарлы»
          </h1>
        )}
        <a className="rounded-2xl bg-[#8B7B61] hover:bg-[#B5A872] text-white px-5 py-3 w-fit" href="https://wa.me/77071112232" target="_blank" rel="noopener noreferrer">Запросить условия</a>
        <p className="text-xl leading-[1.5]">
          Обязательным условием тура является наличие у охотника разрешения{" "}
          <br /> на оружие и охотничий билет
        </p>
      </div>
    </div>
  );
};

export default Hero;
