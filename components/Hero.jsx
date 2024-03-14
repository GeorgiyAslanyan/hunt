import React from "react";

const Hero = ({ isFirst, selectedLanguage }) => {
  return (
    <div className={`h-[80vh] md:h-screen p-5 lg:p-20 text-white relative ${isFirst ? "bg-[url('/hero.webp')]" : "bg-[url('/hero2.webp')]"} bg-cover`}>
      <div className="h-full flex flex-col gap-8 justify-end lg:justify-center z-10 relative">
        {isFirst ? (
          <h1 className="text-white font-semibold text-3xl sm:text-5xl leading-[1.2]">
            {selectedLanguage === 0
                ? "Любительская, спортивная и трофейная"
                : selectedLanguage === 1
                ? "Amateur, sports and trophy hunting"
                : selectedLanguage === 2 ? "Chasse amateur, sportive et trophée à" : "Caza Amateur, deportiva y de trofeos en"} <br /> {selectedLanguage === 0
                  ? " охота в охотхозяйстве Кокбельсу"
                  : selectedLanguage === 1
                  ? "at the Kokbels hunting farm"
                  : selectedLanguage === 2 ? "la ferme de chasse de Kokbelsu" : "la granja de caza Cockbels"}
          </h1>
        ) : (
          <h1 className="text-white font-semibold text-3xl sm:text-5xl leading-[1.2]">
             {selectedLanguage === 0
                ? "Любительская, спортивная и трофейная"
                : selectedLanguage === 1
                ? "Amateur, sports and trophy hunting"
                : selectedLanguage === 2 ? "Chasse amateur, sportive et trophée dans" : "Caza Amateur, deportiva y de trofeos en"} <br /> {selectedLanguage === 0
                  ? " охота в охотхозяйстве Айдарлы"
                  : selectedLanguage === 1
                  ? "at the Aidarly hunting farm"
                  : selectedLanguage === 2 ? "la ferme de chasse d'Aydarla" : "la granja de caza de Aydarli"}
          </h1>
        )}
        <a className="rounded-2xl bg-[#8B7B61] hover:bg-[#B5A872] text-white px-5 py-3 w-fit" href="https://wa.me/77017576636" target="_blank" rel="noopener noreferrer">
        {selectedLanguage === 0
                ? "Запросить условия"
                : selectedLanguage === 1
                ? "Request conditions"
                : selectedLanguage === 2 ? "Demander des conditions" : "Solicitar condiciones"}
        </a>
        <p className="text-xl leading-[1.5]">
         {selectedLanguage === 0
                ? "Обязательным условием участия в охоте является наличие у охотника"
                : selectedLanguage === 1
                ? "A prerequisite for participation in the hunt is that the hunter has  "
                : selectedLanguage === 2 ? "Une condition préalable à la participation à la chasse est la présence d'un permis" : "Un requisito previo para participar en la caza es que el cazador tenga"}

          <br /> {selectedLanguage === 0
                ? "разрешения на оружие и охотничий билет"
                : selectedLanguage === 1
                ? "a permit for weapons and a hunting ticket"
                : selectedLanguage === 2 ? "de chasse et d'un billet de chasse" : "un permiso de armas y un boleto de caza"}
        </p>
      </div>
    </div>
  );
};

export default Hero;
