import React from "react";

const Nature = ({ isFirst, selectedLanguage }) => {
  return (
    <div id={isFirst ? "nature" : 'nature2'} className="grid grid-cols-9 p-5 xl:p-20 pb-0 gap-10">
      <div className="col-span-9 xl:col-span-5 flex flex-col w-[90%] sm:w-full gap-10">
        <h2 className="font-semibold text-3xl sm:text-5xl">{selectedLanguage === 0
                ? "Природа"
                : selectedLanguage === 1
                ? "Nature"
                : selectedLanguage === 2 ? "Nature" : "Naturaleza"}</h2>
        {isFirst ? (
          <p>
            {selectedLanguage === 0
                ? "Преимуществом отдыха в охотхозяйстве Кокбельсу является красота природы, горные и равнинные участки. На склонах лиственные и хвойные породы деревьев образуют большие лесные массивы."
                : selectedLanguage === 1
                ? "The advantage of recreation in the Kok bel su hunting farm is the beauty of nature, mountainous and flat areas. On the slopes, deciduous and coniferous trees form large woodlands."
                : selectedLanguage === 2 ? "L'avantage du repos dans la ferme de chasse de Kok bel su est la beauté de la nature, les zones de montagne et de plaine. Sur les pentes, les feuillus et les conifères forment de grandes forêts." : "La ventaja del descanso en la granja de caza Kok Bel su es la belleza de la naturaleza, las regiones montañosas y llanas. En las laderas, las especies de árboles de hoja caduca y coníferas forman grandes áreas boscosas."}
             <br /> <br />{" "}
             {selectedLanguage === 0
                ? "Основная растительность – это хвойные деревья, берёза красная, черноплодная рябина, горный стланник, чёрная смородина, костяника, можжевельник."
                : selectedLanguage === 1
                ? "The main vegetation is coniferous trees, red birch, black–fruited mountain ash, mountain mulberry, black currant, boneberry, juniper."
                : selectedLanguage === 2 ? "La végétation principale est les conifères, le bouleau rouge, l'aronia aronia, le stlannik de montagne, le cassis, l'OS, le genévrier." : "La vegetación principal es coníferas, abedul rojo, chokeberry, stlannik de montaña, grosella negra, kostyanika, enebro."}
            <br /> <br />
            {selectedLanguage === 0
                ? "Любители отдыха на природе оценят возможность сбора грибов и ягод."
                : selectedLanguage === 1
                ? "Outdoor enthusiasts will appreciate the opportunity to collect mushrooms and berries."
                : selectedLanguage === 2 ? "Les amateurs de plein air apprécieront la possibilité de cueillir des champignons et des baies." : "Los amantes de la naturaleza apreciarán la posibilidad de recoger setas y bayas."}
          </p>
        ) : (
          <p>
            {selectedLanguage === 0
                ? "Охотхозяйство «Айдарлы» расположено вдоль реки Или, на территории имеются самоизливающиеся артезианские скважины, вокруг которых созданы хорошие кормовые пастбища для диких животных и уникальные места для гнездований водоплавающих птиц. Основная растительность – это засухоустойчивое разнотравье, ковыль, типчак, древесно кустарниковая природа: боярышник, барбарис, саксаул и туранга."
                : selectedLanguage === 1
                ? "The Aidarly hunting farm is located along the Ili River, there are self-draining artesian wells on the territory, around which good forage pastures for wild animals and unique nesting sites for waterfowl have been created. The main vegetation is drought–resistant grass, grasshopper, tipchak, woody and shrubby nature: hawthorn, barberry, saxaul and turanga."
                : selectedLanguage === 2 ? "La ferme de chasse 'Aydarly' est située le long de la rivière Ou, sur le territoire il y a des puits artésiens auto-nivelants, autour desquels il y a de bons pâturages fourragers pour les animaux sauvages et des lieux uniques pour les oiseaux aquatiques de nidification. La végétation principale est une variété tolérante à la sécheresse, une vache, un tipchak, une nature arbustive: aubépine, épine-vinette, saxaul et turanga." : "La granja de caza 'Aydarly' se encuentra a lo largo del río O, en el territorio hay pozos artesianos que fluyen por sí mismos, alrededor de los cuales se han creado buenos pastos forrajeros para animales salvajes y lugares únicos para anidar aves acuáticas. La vegetación principal es la variedad tolerante a la sequía, el pasto, el tipchak, la naturaleza arbustiva: espino, agracejo, saxaul y Turanga."}
            <br /> <br />
            {selectedLanguage === 0
                ? "Егерский кордон, установленный с целью наблюдения за флорой и фауной, для защиты от незаконного использования природных ресурсов, также используется для размещения гостей."
                : selectedLanguage === 1
                ? "The Jaeger cordon, established for the purpose of observing flora and fauna, to protect against illegal use of natural resources, is also used to accommodate guests."
                : selectedLanguage === 2 ? "Le cordon des chasseurs, installé dans le but d'observer la flore et la faune, afin de se protéger contre l'utilisation illégale des ressources naturelles, est également utilisé pour accueillir les invités." : "El cordón Jaeger, establecido con el propósito de observar la flora y la fauna, para protegerse del uso ilegal de los recursos naturales, también se utiliza para alojar a los huéspedes."}
            </p>
        )}
      </div>
      {isFirst ? (
        <div className="hidden col-span-9 xl:col-span-4 md:grid grid-cols-2 gap-6">
          <img
            src="/nature/nature1.webp"
            alt="nature1"
            width={278}
            height={171}
            className="w-full  rounded-3xl"
          />
          <img
            src="/nature/nature2.webp"
            alt="nature2"
            width={278}
            height={171}
            className="w-full -mt-5 rounded-3xl"
          />
          <img
            src="/nature/nature3.webp"
            alt="nature3"
            width={278}
            height={171}
            className="w-full  rounded-3xl"
          />
          <img
            src="/nature/nature4.webp"
            alt="nature4"
            width={278}
            height={171}
            className="w-full -mt-5 rounded-3xl"
          />
        </div>
      ) : (
        <div className="hidden col-span-9 xl:col-span-4 md:grid grid-cols-2 gap-6">
          <img
            src="/nature/nature5.webp"
            alt="nature5"
            width={278}
            height={171}
            className="w-full  rounded-3xl"
          />
          <img
            src="/nature/nature6.webp"
            alt="nature6"
            width={278}
            height={171}
            className="w-full -mt-5 rounded-3xl"
          />
          <img
            src="/nature/nature7.webp"
            alt="nature7"
            width={278}
            height={171}
            className="w-full  rounded-3xl"
          />
          <img
            src="/nature/nature8.webp"
            alt="nature8"
            width={278}
            height={171}
            className="w-full -mt-5 rounded-3xl"
          />
        </div>
      )}
    </div>
  );
};

export default Nature;
