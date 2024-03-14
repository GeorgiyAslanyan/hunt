"use client";
import Conditions from "@/components/Conditions";
import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import Nature from "@/components/Nature";
import Navbar from "@/components/Navbar";
import Term from "@/components/Term";
import Term2 from "@/components/Term2";
import { useState } from "react";

const firstArr = [
  {src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11709.659165696246!2d79.88918746005797!3d42.800719966365435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x387da60ca5ec9093%3A0xb4bbd08d0433c659!2z0JrQsNC60L_QsNC6LCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2sru!4v1710157130062!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2927.3699974074343!2d79.8747222!3d42.8016667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDQ4JzA2LjAiTiA3OcKwNTInMjkuMCJF!5e0!3m2!1sru!2sru!4v1710320966278!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2928.289839464262!2d79.8916667!3d42.7822222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDQ2JzU2LjAiTiA3OcKwNTMnMzAuMCJF!5e0!3m2!1sru!2sru!4v1710321004565!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2934.5095841175853!2d79.7611111!3d42.65055559999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDM5JzAyLjAiTiA3OcKwNDUnNDAuMCJF!5e0!3m2!1sru!2sru!4v1710321044611!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2935.75429542732!2d79.785!3d42.6241667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDM3JzI3LjAiTiA3OcKwNDcnMDYuMCJF!5e0!3m2!1sru!2sru!4v1710321085584!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2937.495846858876!2d79.6944444!3d42.58722220000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDM1JzE0LjAiTiA3OcKwNDEnNDAuMCJF!5e0!3m2!1sru!2sru!4v1710321136178!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2931.3097944124734!2d79.5636111!3d42.7183333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDQzJzA2LjAiTiA3OcKwMzMnNDkuMCJF!5e0!3m2!1sru!2sru!4v1710321177018!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2930.889844501575!2d79.4594444!3d42.7272222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDQzJzM4LjAiTiA3OcKwMjcnMzQuMCJF!5e0!3m2!1sru!2sru!4v1710321233288!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2927.015112091559!2d79.7802778!3d42.8091667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDQ4JzMzLjAiTiA3OcKwNDYnNDkuMCJF!5e0!3m2!1sru!2sru!4v1710321279421!5m2!1sru!2sru"},
]

const secondArr = [
  {src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9648.674530580747!2d79.51055877623403!3d44.03031889517859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x387fd101481c9d37%3A0xa268cf38c8c1cc46!2z0JDQudC00LDRgNC70YssINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e0!3m2!1sru!2sru!4v1710157798101!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d8111.711889029434!2d79.53753431354876!3d44.043640995260795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDAyJzQxLjAiTiA3OcKwMzInMjEuMCJF!5e0!3m2!1sru!2sru!4v1710319970484!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4296.549639118883!2d79.71507431104742!3d44.05025801232972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDAzJzA2LjAiTiA3OcKwNDMnMDMuMCJF!5e0!3m2!1sru!2sru!4v1710320131554!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2871.6873445330493!2d79.6002778!3d43.96583329999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDU3JzU3LjAiTiA3OcKwMzYnMDEuMCJF!5e0!3m2!1sru!2sru!4v1710320206202!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2871.969328756187!2d79.48722219999999!3d43.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDPCsDU3JzM2LjAiTiA3OcKwMjknMTQuMCJF!5e0!3m2!1sru!2sru!4v1710320255315!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d16233.552630489272!2d79.5012517472371!3d44.00664231386797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDAwJzIzLjAiTiA3OcKwMzAnMjkuMCJF!5e0!3m2!1sru!2sru!4v1710320312933!5m2!1sru!2sru"},
  {src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2868.87929011118!2d79.52583329999997!3d44.023888899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDTCsDAxJzI2LjAiTiA3OcKwMzEnMzMuMCJF!5e0!3m2!1sru!2sru!4v1710320362150!5m2!1sru!2sru"},
]

export default function Home() {
  const [firstCoords, setFirstCoords] = useState(0);
  const [secondCoords, setSecondCoords] = useState(0);
  const [selectedLanguage, setSelectedlanguage] = useState(0);

  return (
    <>
    <Navbar selectedLanguage={selectedLanguage} setSelectedlanguage={setSelectedlanguage} />
    <main className="">
      <Hero selectedLanguage={selectedLanguage} isFirst={true} />
      <Nature selectedLanguage={selectedLanguage} isFirst={true} />
      <Term selectedLanguage={selectedLanguage} />
      <Conditions selectedLanguage={selectedLanguage} isFirst={true} />
      <div className="max-w-screen p-3 md:p-10 grid grid-cols-3 gap-5 justify-center">
        <div className="col-span-3 lg:col-span-2 ">
          <iframe
            src={firstArr[firstCoords].src}
            height="1080"
            className="shadow-2xl w-full"
            style={{ border: 0, maxHeight: "80vh", borderRadius: "16px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-span-3 lg:col-span-1 flex items-center lg:items-start flex-col gap-5 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {firstArr.map((item, index) => (
            <button
              key={index}
              onClick={() => setFirstCoords(index)}
              className={`${index === firstCoords && "bg-[#B5A872]"} whitespace-nowrap rounded-2xl bg-[#8B7B61] hover:bg-[#B5A872] text-white px-3 py-3 w-full`}
            >
              {index === 0 ? <p className="font-semibold">{selectedLanguage === 0
                ? "Какпак"
                : selectedLanguage === 1
                ? "Kakpak"
                : selectedLanguage === 2 ? "Kakpak" : "Kakpak"}</p> : <p>{selectedLanguage === 0
                ? "Граница"
                : selectedLanguage === 1
                ? "Border"
                : selectedLanguage === 2 ? "Frontière" : "Frontera"} {index}</p>}
            </button>
          ))}
          </div>
        </div>
      </div>
      <Hero selectedLanguage={selectedLanguage} />
      <Nature selectedLanguage={selectedLanguage} />
      <Term2 selectedLanguage={selectedLanguage} />
      <Conditions selectedLanguage={selectedLanguage} />
      <div className="max-w-screen p-3 md:p-10 grid grid-cols-3 gap-5 justify-center">
        <div className="col-span-3 lg:col-span-2">
          <iframe
            src={secondArr[secondCoords].src}
            width="1920"
            height="1080"
            className="shadow-2xl w-full"
            style={{ border: 0, maxHeight: "80vh", borderRadius: "16px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-span-3 lg:col-span-1 flex items-center lg:items-start flex-col gap-5 w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {secondArr.map((item, index) => (
            <button
              key={index}
              onClick={() => setSecondCoords(index)}
              className={`${index === secondCoords && "bg-[#B5A872]"} w-full whitespace-nowrap rounded-2xl bg-[#8B7B61] hover:bg-[#B5A872] text-white px-3 py-3`}
            >
              {index === 0 ? <p className="font-semibold">{selectedLanguage === 0
                ? "Айдарлы"
                : selectedLanguage === 1
                ? "Aydarly"
                : selectedLanguage === 2 ? "Aydarly" : "Aydarly"}</p> : <p>{selectedLanguage === 0
                ? "Граница"
                : selectedLanguage === 1
                ? "Border"
                : selectedLanguage === 2 ? "Frontière" : "Frontera"} {index}</p>}
            </button>
          ))}
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
