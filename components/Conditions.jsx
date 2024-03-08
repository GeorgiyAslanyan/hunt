import Image from "next/image";
import React from "react";

const Conditions = ({ isFirst }) => {
  return (
    <div
    id="conditions"
      className={`${
        isFirst
          ? 'bg-[url("/conditions1bg.webp")]'
          : 'bg-[url("/conditions2bg.webp")]'
      } p-5 xl:p-20 flex flex-col gap-5 bg-cover`}
    >
      <div className="flex max-h-auto md:max-h-[340px]">
        <div className="rounded-xl w-full bg-white flex flex-col-reverse md:flex-row justify-between overflow-hidden">
          {isFirst ? (
            <p className="flex text-base sm:text-xl items-center p-5">
              Охотникам-любителям предлагаются сезонные путёвки и разрешения на
              право охоты на все виды животных. Профессиональные егеря помогут
              полностью организовать выслеживание зверя.
            </p>
          ) : (
            <p className="flex text-base sm:text-xl items-center p-5">
              Охотникам-любителям предлагаются сезонные путёвки и разрешения на
              право охоты на все виды животных. Профессиональные егеря помогут
              полностью организовать процесс выслеживания зверя. По желанию
              можно взять в аренду охотничье оборудование.
            </p>
          )}
          <Image
            src="/conditions1.webp"
            alt="conditions1"
            width={413}
            height={201}
            className="w-full md:w-auto"
          />
        </div>
      </div>
      <div className="flex max-h-auto md:max-h-[340px]">
        <div className="rounded-xl w-full bg-white flex flex-col-reverse md:flex-row justify-between overflow-hidden">
          {isFirst ? (
            <p className="flex text-base sm:text-xl items-center p-5">
              В угодьях созданы все условия для увлекательной и комфортной охоты
              на любой вкус. Наличие лошадей даёт возможность организовать охоту
              в труднодоступных районах охотхозяйства.
            </p>
          ) : (
            <p className="flex text-base sm:text-xl items-center p-5">
              В угодьях созданы все условия для увлекательной и комфортной охоты
              на любой вкус.
            </p>
          )}
          <Image
            src="/conditions2.webp"
            alt="conditions1"
            width={413}
            height={201}
            className="w-full md:w-auto"
          />
        </div>
      </div>
      <div className="flex max-h-auto md:max-h-[340px]">
        <div className="rounded-xl w-full bg-white flex flex-col-reverse md:flex-row justify-between overflow-hidden">
          {isFirst ? (
            <p className="flex text-base sm:text-xl items-center p-5">
              По прибытии в охотхозяйство гости располагаются в рубленных
              комфортабельных домиках со всеми удобствами: отопление, санузлы,
              холодная, горячая вода, хорошие спальные места, постельное бельё,
              организовано трёхразовое питание, досуг.
            </p>
          ) : (
            <p className="flex text-base sm:text-xl items-center p-5">
              По прибытии в охотхозяйство, гости располагаются в доме охотника с
              хорошими спальными местами, постельным бельём, организовано
              трёхразовое питание, досуг.
            </p>
          )}
          <Image
            src="/conditions3.webp"
            alt="conditions1"
            width={413}
            height={201}
            className="w-full md:w-auto"
          />
        </div>
      </div>
      <div className="flex max-h-auto md:max-h-[340px]">
        <div className="rounded-xl w-full bg-white flex flex-col-reverse md:flex-row justify-between overflow-hidden">
          {isFirst ? (
            <p className="flex text-base sm:text-xl items-center p-5">
              Роскошная природа гор и предоставленные комфортные условия сделают
              впечатления об охоте незабываемыми.
            </p>
          ) : (
            <p className="flex text-base sm:text-xl items-center p-5">
              Роскошная природа, хорошие условия для ночлега и отдыха,
              полноценное питание сделают впечатления об охоте незабываемыми.
            </p>
          )}
          <Image
            src={isFirst ? "/conditions4.webp" : '/conditions5.webp'}
            alt="conditions1"
            width={413}
            height={201}
            className="w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Conditions;
