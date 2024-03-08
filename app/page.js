import Conditions from "@/components/Conditions";
import Hero from "@/components/Hero";
import Nature from "@/components/Nature";
import Term from "@/components/Term";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero isFirst={true}/>
      <Nature isFirst={true}/>
      <Term isFirst={true}/>
      <Conditions isFirst={true}/>
      <Image src="/map.webp" alt="map" width={1920} height={1080} className=""/>
      <Hero />
      <Nature />
      <Term />
      <Conditions />
      <Image src="/map.webp" alt="map" width={1920} height={1080} className=""/>
    </main>
  );
}
