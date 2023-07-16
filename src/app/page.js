import Image from "next/image";
import HomeCard from "./components/HomeCard";
import Banner from "./components/Banner";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="flex md:flex-row flex-col justify-around p-5 min-h-[70vh] bg-[url('/bg.jpg')] bg-no-repeat relative lg:bg-cover bg-center">
          <div className="flex flex-col justify-center items-left p-5">
            <p className="text-2xl leading-10 tracking-wide font-semibold">
              Website Development Company of India
            </p>
            <h1 className="text-4xl leading-10 tracking-wider font-semibold uppercase">
              Services For Modern Website Design &
            </h1>
            <p className="text-sm leading-10 font-medium">
              Branding | Design | Development | Marketing
            </p>
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <Image src="/home.svg" alt="home-svg" width={550} height={550} />
          </div>
        </div>
        <HomeCard />
        <Banner />
        <Slider />
      </div>
    </>
  );
}
