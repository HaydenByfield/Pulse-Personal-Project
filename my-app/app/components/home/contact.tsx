export default function contactUs() {
  return (
    <div className="h-[50vh] relative overflow-x-auto bg-third">
      <div className="flex items-center justify-around gap-4 h-full p-6">
        <div className="grid gap-2">
          <p className="font-serif text-yellow-500  text-sm sm:-text-md md:text-lg lg:text-lg">Find Your Way To us</p>
          <h1 className=" text-md sm:text-md md:text-xl lg:text-3xl text-second font-cinzel">A little Italy, <br /> in Marlebone.</h1>
          <a className="  text-sm sm:text-sm md:text-md lg:text-lg text-fifth font-serif border-b-2 ">Get directions →</a>
        </div>
        <div className="grid gap-2">
          <p className="font-cinzel text-sm sm:text-sm md:text-md lg:text-md text-white font-bold">COME ON OVER</p>
          <p className="font-serif text-sm sm:text-sm md:text-md lg:text-lg text-second"> 18 Seymour Place<br /> Marylebone, London W1H7ND <br /> A five minute walk from Marble Arch</p>
          <p className="font-serif text-white text-md">+44(0)20 7946 0818<br /> bungiorno@lemonte.co.uk</p>
        </div>
        <div className="grid gap-2">
          <h3 className="font-cinzel text-fifth text-sm sm:text-sm md:text-md lg:text-md">AT YOUR LEISURE</h3>
          <div className=" font-serif  text-sm sm:text-sm md:text-md lg:text-lg text-yellow-500">
            <div className="flex w-full sm:w-full md:w-full lg:w-full justify-between ">
              <div>Lunch</div>
              <div>Tue-Sun.12:00-14:30</div>
            </div>
            <div className="flex w-full sm:w-full md:w-full lg:w-full justify-between">
              <div>Dinner</div>
              <div>Tue-Sat.18:00-22:00</div>
            </div>
            <div className="flex  w-full sm:w-full md:w-full lg:w-full justify-between">
              <div>Sunday</div>
              <div>Dinner.18:00-21:00</div>
            </div>
          </div>
          <p className=" font-serif sm:text-sm md:text-md lg:text-lg text-white  w-50 sm:w-60 md:w-90 lg:w-120"> Closed Mondays. We look forward to welcoming you for an unforgettable dining experience throughout the rest of the week</p>
        </div>
      </div>
    </div>
  )
}