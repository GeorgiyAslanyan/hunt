import React from "react";

const Conditions = ({ isFirst, selectedLanguage }) => {
  return (
    <div
      id={isFirst ? "conditions" : "conditions2"}
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
              {selectedLanguage === 0
                ? "Охотникам-любителям предлагаются сезонные путёвки и разрешения на право охоты на все виды животных. Профессиональные егеря помогут полностью организовать выслеживание зверя."
                : selectedLanguage === 1
                ? "Amateur hunters are offered seasonal vouchers and permits for the right to hunt all kinds of animals. Professional hunters will help to fully organize the tracking of the beast."
                : selectedLanguage === 2 ? "Les chasseurs amateurs se voient proposer des permis saisonniers et des permis de chasse pour toutes sortes d'animaux. Les chasseurs professionnels aideront à organiser complètement la traque de la bête." 
                : "A los cazadores aficionados se les ofrecen pases de temporada y permisos para el derecho de caza de todo tipo de animales. Los cazadores profesionales ayudarán a organizar completamente la caza de la bestia."}
            </p>
          ) : (
            <p className="flex text-base sm:text-xl items-center p-5">
              {selectedLanguage === 0
                ? "Охотникам-любителям предлагаются сезонные путёвки и разрешения на право охоты на все виды животных. Профессиональные егеря помогут полностью организовать процесс выслеживания зверя."
                : selectedLanguage === 1
                ? "Amateur hunters are offered seasonal vouchers and permits for the right to hunt all kinds of animals. Professional hunters will help to fully organize the process of tracking the beast."
                : selectedLanguage === 2 ? "Les chasseurs amateurs se voient proposer des permis saisonniers et des permis de chasse pour toutes sortes d'animaux. Les chasseurs professionnels aideront à organiser complètement le processus de traque de la bête." 
                : "A los cazadores aficionados se les ofrecen pases de temporada y permisos para el derecho de caza de todo tipo de animales. Los cazadores profesionales ayudarán a organizar completamente el proceso de caza de la bestia."}
            </p>
          )}
          <img
            src={isFirst ? "/conditions/conditions1.webp" : "/conditions/conditions5.webp"}
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
              {selectedLanguage === 0
                ? "В угодьях созданы все условия для увлекательной и комфортной охоты на любой вкус. Наличие лошадей даёт возможность организовать охоту в труднодоступных районах охотхозяйства, а также организовать конные прогулки по живописным местам охотхозяйства."
                : selectedLanguage === 1
                ? "The grounds have all the conditions for an exciting and comfortable hunting for every taste. The presence of horses makes it possible to organize hunting in hard-to-reach areas of the hunting farm, as well as organize horseback riding in picturesque places of the hunting farm."
                : selectedLanguage === 2 ? "Dans les terres, toutes les conditions sont créées pour une chasse fascinante et confortable pour tous les goûts. La présence de chevaux permet d'organiser la chasse dans les zones difficiles d'accès de la ferme de chasse, ainsi que d'organiser des promenades à cheval dans les endroits pittoresques de la ferme de chasse." 
                : "En las tierras se han creado todas las condiciones para una caza emocionante y cómoda para todos los gustos. La presencia de caballos permite organizar la caza en áreas de difícil acceso de la granja de caza, así como organizar paseos a caballo por los lugares pintorescos de la granja de caza."}
            </p>
          ) : (
            <p className="flex text-base sm:text-xl items-center p-5">
              {selectedLanguage === 0
                ? "В охотхозяйстве Айдарлы созданы все условия для увлекательного и комфортного отдыха на любой вкус."
                : selectedLanguage === 1
                ? "The Aidarly hunting farm has all the conditions for an exciting and comfortable stay for every taste."
                : selectedLanguage === 2 ? "Dans la ferme de chasse d'aydarly, toutes les conditions sont créées pour des vacances fascinantes et confortables pour tous les goûts." 
                : "En la granja de caza de aydarly, se han creado todas las condiciones para un descanso emocionante y cómodo para todos los gustos."}
            </p>
          )}
          <img
            src={isFirst ? "/conditions/conditions2.webp" : "/conditions/conditions6.webp"}
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
              {selectedLanguage === 0
                ? "По прибытии в охотхозяйство гости имеют возможность расположиться как в рубленных комфортабельных домиках со всеми удобствами: отопление, санузлы, холодная, горячая вода, хорошие спальные места, постельное бельё, организован досуг, так и устроить кемпинг в специально отведённых местах."
                : selectedLanguage === 1
                ? "Upon arrival at the hunting farm, guests have the opportunity to stay in comfortable cabins with all amenities: heating, bathrooms, cold, hot water, good beds, bed linen, organized leisure, and arrange camping in specially designated areas."
                : selectedLanguage === 2 ? "À l'arrivée à l'okhotkhozadstvo, les clients ont la possibilité de s'installer à la fois dans des maisons confortables hachées avec toutes les commodités: chauffage, salles de bains, eau froide et chaude, bons lits, draps, loisirs organisés, et organiser un camping dans des endroits désignés." 
                : "A su llegada a la granja de caza, los huéspedes tienen la oportunidad de ubicarse tanto en cabañas cómodas cortadas con todas las comodidades: Calefacción, baños, agua fría y caliente, buenos lugares para dormir, ropa de cama, ocio organizado y organizar un campamento en áreas designadas."}
            </p>
          ) : (
            <p className="flex text-base sm:text-xl items-center p-5">
              {selectedLanguage === 0
                ? "По прибытии в охотхозяйство, гости располагаются в охотничьем домике с хорошими спальными местами, постельным бельём, организованным досугом или в кемпинге в специально отведённых местах."
                : selectedLanguage === 1
                ? "Upon arrival at the hunting farm, guests are accommodated in a hunting lodge with good sleeping places, bed linen, organized leisure or camping in specially designated areas."
                : selectedLanguage === 2 ? "À l'arrivée à la ferme de chasse, les clients sont logés dans un pavillon de chasse avec de bons lits, du linge de lit, des loisirs organisés ou dans un camping dans des zones désignées." 
                : "Al llegar a la granja de caza, los huéspedes se alojan en un pabellón de caza con buenas camas, ropa de cama, actividades de ocio organizadas o acampar en áreas designadas."}
            </p>
          )}
          <img
            src={isFirst ? "/conditions/conditions3.webp" : "/conditions/conditions7.webp"}
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
              {selectedLanguage === 0
                ? "Роскошная природа гор и предоставленные комфортные условия сделают впечатления об охоте и отдыхе незабываемыми."
                : selectedLanguage === 1
                ? "The luxurious nature of the mountains and the comfortable conditions provided will make the experience of hunting and recreation unforgettable."
                : selectedLanguage === 2 ? "La nature luxueuse des montagnes et les conditions confortables fournies rendront l'expérience de chasse et de repos inoubliable." 
                : "La naturaleza lujosa de las montañas y las condiciones confortables proporcionadas harán que las impresiones sobre la caza y el descanso sean inolvidables."}
            </p>
          ) : (
            <p className="flex text-base sm:text-xl items-center p-5">
              {selectedLanguage === 0
                ? "Роскошная природа, хорошие условия для ночлега и полноценного отдыха сделают впечатления незабываемыми."
                : selectedLanguage === 1
                ? "Luxurious nature, good conditions for overnight stay and a good rest will make the experience unforgettable."
                : selectedLanguage === 2 ? "La nature luxueuse, de bonnes conditions pour passer la nuit et un repos complet rendront l'expérience inoubliable." 
                : "La naturaleza lujosa, las buenas condiciones para pasar la noche y el descanso completo harán que las impresiones sean inolvidables."}
            </p>
          )}
          <img
            src={isFirst ? "/conditions/conditions4.webp" : "/conditions/conditions8.webp"}
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
