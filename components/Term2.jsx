import React from "react";

const Term2 = ({ isFirst }) => {
  return (
    <div id="term2" className="flex flex-col gap-10 p-5 xl:p-20">
      <h2 className="font-semibold text-3xl sm:text-5xl">
        Сроки проведения охоты
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-white">
        <div className="flex flex-col gap-5">
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <img
              src="/term/utki.webp"
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
            <img
              src="/term/zayac2.webp"
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
            <img
              src="/term/kosulya2.webp"
              alt="term1"
              width={413}
              height={313}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">Косуля</p>
              <p className="text-xl">15.07. – 31.12</p>
            </div>
          </div>
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <img
              src="/term/kaban.webp"
              alt="term2"
              width={413}
              height={201}
              className="w-full xl:h-[201px] group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">Кабан</p>
              <p className="text-xl">04.09. – 31.12</p>
            </div>
          </div>
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <img
              src="/term/barsuk.webp"
              alt="term2"
              width={413}
              height={201}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">Барсук</p>
              <p className="text-xl">04.09. – 31.12</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col col-span-1 md:col-span-2 xl:col-span-1 gap-5">
          <div className="relative shadow-xl rounded-md overflow-hidden h-full group w-full">
            <img
              src="/term/fazan.webp"
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
            <div className="border-[6px] rounded-md border-[#CFBB67] group hover:border-[#B5A872] ease-linear duration-150 transition-all h-full flex flex-col justify-between">
              <div className="w-full h-full justify-center text-center flex flex-col gap-3 p-5">
                <p className="font-bold text-xl">
                  Сроки могут <br /> корректироваться
                </p>
                <p className="hidden sm:block">
                  Для дополнительной информации просим Вас связаться с нами по
                  вышеуказанным контактам.
                </p>
              </div>
              <a
                href="https://wa.me/77017576636"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#CFBB67] items-center flex justify-center font-bold text-2xl group-hover:bg-[#B5A872] ease-linear duration-150 transition-all text-white px-5 py-3 w-full text-center"
              >Запросить условия</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term2;
