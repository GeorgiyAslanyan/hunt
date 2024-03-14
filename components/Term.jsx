import React from "react";

const Term = ({ isFirst, selectedLanguage }) => {
  return (
    <div id="term" className="flex flex-col gap-10 p-5 xl:p-20">
      <h2 className="font-semibold text-3xl sm:text-5xl">
      {selectedLanguage === 0
                ? "Сроки проведения охоты"
                : selectedLanguage === 1
                ? "The timing of the hunt"
                : selectedLanguage === 2 ? "Dates de la chasse" : "Fechas de caza"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 text-white">
        <div className="flex flex-col gap-5">
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <img
              src="/term/kosulya.webp"
              alt="term1"
              width={413}
              height={313}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">{selectedLanguage === 0
                ? "Косуля"
                : selectedLanguage === 1
                ? "Roe deer"
                : selectedLanguage === 2 ? "Chevreuil" : "Corza"}</p>
              <p className="text-xl">15.07. – 31.12</p>
            </div>
          </div>
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <img
              src="/term/surok.webp"
              alt="term2"
              width={413}
              height={201}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">{selectedLanguage === 0
                ? "Сурок"
                : selectedLanguage === 1
                ? "Marmot"
                : selectedLanguage === 2 ? "Marmotte" : "Marmota"}</p>
              <p className="text-xl">01.11. – 31.01</p>
            </div>
          </div>
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <img
              src="/term/kaban.webp"
              alt="term2"
              width={413}
              height={201}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">{selectedLanguage === 0
                ? "Кабан"
                : selectedLanguage === 1
                ? "Wild boar"
                : selectedLanguage === 2 ? "Sanglier" : "Jabalí"}</p>
              <p className="text-xl">04.09. – 31.12</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <img
              src="/term/kozel.webp"
              alt="term1"
              width={413}
              height={313}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">{selectedLanguage === 0
                ? "Горный сибирский козел"
                : selectedLanguage === 1
                ? "Siberian Mountain Goat"
                : selectedLanguage === 2 ? "Chèvre sibérienne de montagne" : "Cabra siberiana de montaña"} </p>
              <p className="text-xl">15.07. – 31.12</p>
            </div>
          </div>
          <div className="relative shadow-xl rounded-md overflow-hidden group">
            <img
              src="/term/zayac.webp"
              alt="term2"
              width={413}
              height={201}
              className="w-full group-hover:scale-105 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">{selectedLanguage === 0
                ? "Заяц"
                : selectedLanguage === 1
                ? "Hare"
                : selectedLanguage === 2 ? "Lièvre" : "Liebre"}</p>
              <p className="text-xl">01.11. – 31.01</p>
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
              <p className="text-xl font-bold">{selectedLanguage === 0
                ? "Барсук"
                : selectedLanguage === 1
                ? "Badger"
                : selectedLanguage === 2 ? "Blaireau" : "Tejón"}</p>
              <p className="text-xl">04.09. – 31.12</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col col-span-1 md:col-span-2 xl:col-span-1 gap-5">
          <div className="relative shadow-xl rounded-md overflow-hidden h-full group w-full">
            <img
              src="/term/maral.webp"
              alt="term1"
              width={413}
              height={313}
              className="w-full h-full rounded-md scale-105 group-hover:scale-110 ease-linear duration-150 transition-all"
            />
            <div className="absolute bottom-4 left-4 flex flex-col gap-2">
              <p className="text-xl font-bold">{selectedLanguage === 0
                ? "Марал"
                : selectedLanguage === 1
                ? "Maral"
                : selectedLanguage === 2 ? "Maral" : "Maral"}</p>
              <p className="text-xl">15.07. – 31.12</p>
            </div>
          </div>
          
          <div className="relative shadow-xl rounded-md overflow-hidden bg-[#665F46] p-5 h-full w-full">
          <div className="border-[6px] rounded-md border-[#CFBB67] group hover:border-[#B5A872] ease-linear duration-150 transition-all h-full flex flex-col justify-between">
              <div className="w-full h-full justify-center text-center flex flex-col gap-3 p-5">
                <p className="font-bold text-xl">
                {selectedLanguage === 0
                ? "Сроки могут"
                : selectedLanguage === 1
                ? "Deadlines can"
                : selectedLanguage === 2 ? "Le calendrier" : "Los plazos"} <br /> {selectedLanguage === 0
                  ? "корректироваться"
                  : selectedLanguage === 1
                  ? "be adjusted"
                  : selectedLanguage === 2 ? "peut être ajusté" : "pueden ajustarse"}
                </p>
                <p className="hidden sm:block">
                {selectedLanguage === 0
                  ? "Для дополнительной информации просим Вас связаться с нами по вышеуказанным контактам."
                  : selectedLanguage === 1
                  ? "For more information, please contact us at to the above contacts."
                  : selectedLanguage === 2 ? "Pour plus d'informations, veuillez nous contacter au aux contacts ci-dessus." : "Para más información, póngase en contacto con nosotros en los contactos mencionados."}
                  
                </p>
              </div>
              <a
                href="https://wa.me/77017576636"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#CFBB67] items-center flex justify-center font-bold text-2xl group-hover:bg-[#B5A872] ease-linear duration-150 transition-all text-white px-5 py-3 w-full text-center"
              >{selectedLanguage === 0
                ? "Запросить условия"
                : selectedLanguage === 1
                ? "Request conditions"
                : selectedLanguage === 2 ? "Demander des conditions" : "Solicitar condiciones"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Term;
