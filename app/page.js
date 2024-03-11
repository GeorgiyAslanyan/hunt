'use client'
import Conditions from "@/components/Conditions";
import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import Nature from "@/components/Nature";
import Term from "@/components/Term";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isFirst, setIsFirst] = useState(false)

  const handleClick = ({first}) => {
    first ? setIsFirst(true) : setIsFirst(false)
    setIsOpen(true)
  }

  return (
    <main className="">
      <Hero isFirst={true} />
      <Nature isFirst={true} />
      <Term isFirst={true} />
      <Conditions isFirst={true} />
      <div className="max-w-screen p-3 md:p-10 grid grid-cols-3 gap-5 justify-center">
        <div className="col-span-3 lg:col-span-2 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11709.659165696246!2d79.88918746005797!3d42.800719966365435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x387da60ca5ec9093%3A0xb4bbd08d0433c659!2z0JrQsNC60L_QsNC6LCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2sru!4v1710157130062!5m2!1sru!2sru"
          width="1920"
          height="1080"
          className="shadow-2xl w-full"
          style={{ border: 0, maxHeight: "80vh", borderRadius: "16px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        <div className="col-span-3 lg:col-span-1 flex  items-center lg:items-start flex-col gap-5 w-full">
          <Image src={"/map.png"} alt="map" width={1920} height={1080} className="rounded-xl shadow-2xl"/>
          <button onClick={() => handleClick({first: true})} className="rounded-2xl bg-[#8B7B61] hover:bg-[#B5A872] text-white px-5 py-3 w-fit">
            Посмотреть карту местности
          </button>
        </div>
      </div>
      <Hero />
      <Nature />
      <Term />
      <Conditions />
      <div className="max-w-screen p-3 md:p-10 grid grid-cols-3 gap-5 justify-center">
        <div className="col-span-3 lg:col-span-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9648.674530580747!2d79.51055877623403!3d44.03031889517859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x387fd101481c9d37%3A0xa268cf38c8c1cc46!2z0JDQudC00LDRgNC70YssINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e0!3m2!1sru!2sru!4v1710157798101!5m2!1sru!2sru"
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
          <Image src={"/map2.png"} alt="map" width={1920} height={1080} className="rounded-xl shadow-2xl"/>
          <button onClick={() => handleClick({first: false})} className="rounded-2xl bg-[#8B7B61] hover:bg-[#B5A872] text-white px-5 py-3 w-fit">
            Посмотреть карту местности
          </button>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} isOpen={isOpen} isFirst={isFirst}/>}
    </main>
  );
}
