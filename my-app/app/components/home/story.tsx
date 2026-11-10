export default function ourStory() {
  return (
    <div className=" relative overflow-hidden h-screen bg-black  p-6">
      <img src="/images/marble-top.jpg" className=" absolute inset-0 object-center object-cover h-full w-full opacity-70" />
      <img src="/images/basil.png" className=" hidden md:block absolute top-[350px] left-[-200px] z-0 w-1/2 h-1/2 object-contain" />
      <img src="/images/pasta.png" className=" hidden md:block absolute top-[-100px] left-[-200px] z-0 w-1/2 h-1/2 object-contain" />
      <img src="/images/tomatoes.png" className=" hidden md:block absolute top-[395px] right-[-300px]  z-0 w-1/2 h-1/2 object-contain" />
      <img src="/images/flour.png" className=" hidden md:block absolute  top-[-100px]  right-[-100px] z-0 w-1/2 h-1/2 object-contain" />
      <div className=" grid md:grid-rows-[auto_auto] lg:grid-rows-[auto_270px] justify-center items-center h-full gap-4">
        <div className="flex z-10 border-20 border-first shadow-lg w-90 sm:w-120 md:w-150 lg:w-200 h-full ">
          <img src="/images/italian-vintage.jpg" className=" w-1/2 h-full object-cover" />
          <img src="/images/italian-dishes.jpg" className="  w-1/2 h-full object-cover" />
        </div>
        <div className="grid z-10 w-90 sm:w-120 md:w-150 lg:w-200  justify-center text-white">
          <h1 className="font-cinzel text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">Our Story</h1>
          <p className=" font-serif text-sm sm:text-lg md:text-xl lg:text-xl  text-center">
            Founded in 1964, our Italian restaurant began as a humble family dream
            rooted in a passion for authentic Italian cuisine, warm hospitality, and
            the joy of bringing people together. Inspired by generations of traditional
            recipes passed down through the family, we set out to create a place where
            every meal tells a story and every guest feels at home. Over the decades, we
            have remained committed to preserving the rich flavours of Italy, combining
            time-honoured cooking techniques with fresh ingredients and a touch of creativity.
            What began as a small family establishment has grown into a beloved dining destination,
            built on decades of cherished memories and loyal customers. Today, our legacy continues,
            welcoming each generation to experience the timeless taste, warmth, and tradition of Italian dining.
          </p>
        </div>

      </div>
    </div >
  )
}