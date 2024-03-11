import Image from "next/image";
import React from "react";

const Nature = ({ isFirst }) => {
  return (
    <div id="nature" className="grid grid-cols-9 p-5 xl:p-20 pb-0 gap-10">
      <div className="col-span-9 xl:col-span-5 flex flex-col w-[90%] sm:w-full gap-10">
        <h2 className="font-semibold text-3xl sm:text-5xl">Природа</h2>
        {isFirst ? (
          <p>
            Большим плюсом отдыха и охоты в о/х Кокбельсу является красота
            природы, горные и равнинные участки. На склонах лиственные и хвойные
            породы деревьев образуют большие лесные массивы. <br /> <br />{" "}
            Основная растительность – это хвойные деревья, берёза красная,
            черноплодная рябина, горный стланник, чёрная смородина, костяника,
            можжевельник.
            <br /> <br />
            Любители тихой охоты оценят возможность сбора грибов и ягод. Средняя
            температура января -20 градусов, июля +30 градусов.
          </p>
        ) : (
          <p>
            {" "}
             Охотхозяйство «Айдарлы» расположено вдоль реки Или, на территории
            имеются самоизливающиеся артезианские скважины, вокруг которых
            созданы хорошие кормовые пастбища для диких животных и уникальные
            места для гнездований водоплавающих птиц. Основная растительность –
            это засухоустойчивое разнотравье, ковыль, типчак, древесно
            кустарниковая природа: боярышник, черноплодная рябина, барбарис,
            саксаул и туранга. <br /> <br />  Кордон, установленный с целью наблюдения за
            флорой и фауной, для защиты от незаконного использования природных
            ресурсов, также используется для размещения гостей, любителей
            фотоохоты и профессиональной охоты. <br /> <br />  По всему охотхозяйству
            прокладываются туристические маршруты.
          </p>
        )}
      </div>
      {isFirst ? <div className="hidden col-span-9 xl:col-span-4 md:grid grid-cols-2 gap-6">
        <Image
          src="/nature1.webp"
          alt="nature1"
          width={278}
          height={171}
          className="w-full  rounded-3xl"
        />
        <Image
          src="/nature2.webp"
          alt="nature2"
          width={278}
          height={171}
          className="w-full -mt-5 rounded-3xl"
        />
        <Image
          src="/nature3.webp"
          alt="nature3"
          width={278}
          height={171}
          className="w-full  rounded-3xl"
        />
        <Image
          src="/nature4.webp"
          alt="nature4"
          width={278}
          height={171}
          className="w-full -mt-5 rounded-3xl"
        />
      </div> : <div className="hidden col-span-9 xl:col-span-4 md:grid grid-cols-2 gap-6">
        <Image
          src="/nature5.webp"
          alt="nature5"
          width={278}
          height={171}
          className="w-full  rounded-3xl"
        />
        <Image
          src="/nature6.webp"
          alt="nature6"
          width={278}
          height={171}
          className="w-full -mt-5 rounded-3xl"
        />
        <Image
          src="/nature7.webp"
          alt="nature7"
          width={278}
          height={171}
          className="w-full  rounded-3xl"
        />
        <Image
          src="/nature8.webp"
          alt="nature8"
          width={278}
          height={171}
          className="w-full -mt-5 rounded-3xl"
        />
      </div>}
    </div>
  );
};

export default Nature;
