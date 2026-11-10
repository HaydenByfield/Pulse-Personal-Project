"use client"
import { useRouter } from "next/navigation"
export default function theExperience() {
  const router = useRouter()
  return (
    <div className=" relative overflow-x-auto z-0 h-screen bg-fifth">
      <img src="/images/italian-background4.jpg" className="absolute z-10 w-full h-full top-0 left-0 object-cover object-center opacity-0" />
      <div className="flex flex-col h-full justify-center items-center gap-8 p-20 text-black">
        <h1 className="font-script  text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The Le-monte Experience</h1>
        <div className="flex z-10 flex-row justify-evenly  gap-10">
          <div className=" sm:w-80 sm:h-80 md:w-90 md:h-90 lg:w-110 lg:h-110 xl:w-120 xl:h-120 flex-none">
            <img src="images/italian-vintage2.jpg" className=" hidden sm:block h-full w-full object-cover shrink-0" />
            <p className="hidden sm:block font-serif text-md sm:text-lg md:text-lg lg:text-xl xl:text-xl">Gustavo - Chef, Co-Founder</p>
          </div>
          <div className="grid  md:[30px_auto_auto_auto] lg:grid-rows-[30px_80px_auto_40px] xl:grid-rows-[30px_110px_auto_40px] gap-2 ">
            <p className=" text-xl sm:text-lg md:text-xl lg:text-xl font-serif text-yellow-500">From Gustavo</p>
            <h3 className="  text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-4xl  font-cinzel text-third italic">"Bon Appetit, <br /> Indulge in Elegance "</h3>
            <div className="text-justify tracking-tighter text-md sm:text-sm md:text-lg lg:text-lg xl:text-2xl w-60 sm:w-75 md:w-100 lg:w-100 xl:w-140 font-serif ">Step into a world where Italian tradition, exceptional cuisine and warm hospitality come together. At Le-Monte,
              dining is more than simply enjoying a meal; it is about embracing the flavours, culture and traditions that make
              Italian cuisine so special.Inspired by generations of culinary heritage since 1964, we strive to create an atmosphere
              where every guest feels welcome and every meal becomes a memorable occasion.</div>
            <button onClick={() => router.push("/reservation")} className=" text-white font-serif text-sm sm:text-sm md:text-lg lg:text-xl bg-fourth w-6/8 sm:w-5/8 md:w-4/8 lg:w-4/8 h-10 hover:opacity-80 cursor-pointer">Make Reservations</button>
          </div>
        </div>
      </div>
    </div>
  )
}