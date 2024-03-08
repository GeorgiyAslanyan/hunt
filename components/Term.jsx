import Image from "next/image";
import React from "react";

const Term = ({ isFirst }) => {
  return (
    <div id="term" className="flex flex-col gap-10 p-5 xl:p-20">
      <h2 className="font-semibold text-3xl sm:text-5xl">
        Сроки охоты на различных зверей
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-white">
        <div className="flex flex-col gap-5">
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <Image
              src="/term1.webp"
              alt="term1"
              width={413}
              height={313}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">Водоплавающая дичь</p>
              <p className="text-xl">15.09. – 31.12</p>
            </div>
          </div>
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <Image
              src="/term4.webp"
              alt="term2"
              width={413}
              height={201}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">Заяц</p>
              <p className="text-xl">01.11. – 31.01</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <Image
              src="/term2.webp"
              alt="term1"
              width={413}
              height={313}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              {isFirst ? (
                <p className="text-xl font-bold">Косуля, горный козёл, марал</p>
              ) : (
                <p className="text-xl font-bold">Косуля, каратурук </p>
              )}
              <p className="text-xl">15.07. – 31.12</p>
            </div>
          </div>
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <Image
              src="/term5.webp"
              alt="term2"
              width={413}
              height={201}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">Кабан, барсук</p>
              <p className="text-xl">04.09. – 31.12</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col col-span-1 md:col-span-2 xl:col-span-1 gap-5">
          <div className="relative shadow-xl rounded-md overflow-hidden h-full group w-full">
            <Image
              src="/term3.webp"
              alt="term1"
              width={413}
              height={313}
              className="w-full h-full rounded-md scale-105 group-hover:scale-110 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">Фазан</p>
              <p className="text-xl">01.11. – 31.12</p>
            </div>
          </div>
          <div className="relative shadow-xl rounded-md overflow-hidden bg-[#665F46] p-5 h-full w-full">
            <div className="border-[6px] rounded-md border-[#B5A872] group hover:border-[#8B7B61] ease-linear duration-150 transition-all h-full flex flex-col justify-between">
              <div className="w-full text-center flex flex-col gap-3 p-5">
                <p className="font-bold text-xl">
                  Сроки могут <br /> корректироваться
                </p>
                <p className="hidden sm:block">
                  Для дополнительной информации просим Вас связаться с нами по
                  вышеуказанным контактам.
                </p>
              </div>
              <a
                href="http://wa.me/77071112232"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B5A872] group-hover:bg-[#8B7B61] ease-linear duration-150 transition-all text-white px-5 py-3 w-full text-center"
              >Запросить условия</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;
