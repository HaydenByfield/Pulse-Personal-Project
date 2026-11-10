"use client"
import { useRouter } from "next/navigation"

export default function landingPage() {
  const router = useRouter();
  return (
    <div className=" relative h-screen overflow-hidden bg-black">
      {/*<video src="/videos/landing-page-video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover absolute inset-0  z-0 opacity-40"></video>*/}
      <img src="/images/italian-background3.jpg" className=" absolute inset-0 z-0 w-full h-full object-cover opacity-40" />
      <div></div>
      <div className="flex flex-col gap-3 justify-center items-center h-full text-white relative z-10">
        <div className=" font-cinzel text-xl sm:text-4xl md:text-4xl lg:text-6xl">Love means putting you first</div>
        <div className="font-serif text-lg sm:text-lg md:text-xl lg:text-2xl">Amare significa metterti al primo posto</div>
        <p className=" font-serif text-sm sm:text-xl md:text-2xl lg:text-3xl">Taste a piece of culture. Have a look at our signature dishes</p>
        <a href="/#menu" className="  text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif cursor-pointer text-red-500 border-b-1  hover:opacity-80">Explore the menu</a>
        <p className="font-serif text-lg sm:text-lg md:text-xl lg:text-xl">Follow Our Joruney</p>
        <button onClick={() => router.push("/#story")} className=" cursor-pointer bg-third w-50 h-10  active:opacity-70">Our Story</button>

      </div>
    </div>
  )
}