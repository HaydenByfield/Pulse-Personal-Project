export default function Menu() {
  return (
    <div className="  relative overflow-x-auto  h-screen bg-second">
      <div className="grid grid-rows-[60px_100px_2fr] sm:grid-rows-[60px_100px_2fr] md:grid-rows-[auto_60px_auto] lg:grid-rows-[auto_auto_auto] gap-4 p-6">
        <h1 className="font-script text-5xl sm:text-7xl md:text7xl lg:text-8xl">Menu</h1>
        <div className="flex justify-between items-end">
          <h2 className="font-cinzel text-md sm:text-xl md:text-2xl lg:text-3xl italic">Signature Dishes</h2>
          <a href="/menu" className="font-cinzel text-[10px] text-md sm:text-lg md:text-lg lg:text-xl underline hover:text-blue-500 cursor-pointer">View entire menu →</a>
        </div>
        <div className="flex justify-between gap-4 ">
          <div className=" flex flex-col gap-6">
            <img src=" /images/italian-food1.jpg" className="w-[320px] sm:w-[200px] md:w-[240px] lg:w-[320px] xl:w-[400px] h-1/4 sm:h-1/2 object-cover" />
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-3  text-lg sm:text-xl md:text-2xl lg:text-3xl w-50 sm:w-50 md:w-60 lg:w-80 xl:w-100 text-fourth">
              <p className="hidden md:block font-serif">01</p>
              <div className="font-serif text-third ">Moules Marinière à la crème</div>
            </div>
            <p className="font-serif text-justify tracking-tight text-md sm:text-md md:text-lg lg:text-xl w-50 sm:w-50 md:w-60 lg:w-80 xl:w-100">Moules Marinière à la crème: A variation of moules marinière, made with mussels and cream.</p>
          </div>
          <div className="flex flex-col gap-6">
            <img src="/images/italian-food2.jpg" className="w-[320px] sm:w-[200px] md:w-[240px] lg:w-[320px] xl:w-[400px] h-1/4 sm:h-1/2 object-cover" />
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl w-50 sm:w-50 md:w-60 lg:w-80 xl:w-100 text-fourth">
              <p className="hidden md:block font-serif">02</p>
              <div className="font-serif text-third w-50">Pâtes au canard </div>
            </div>
            <p className="font-serif text-justify tracking-tight text-md sm:text-md md:text-lg lg:text-xl w-50 sm:w-50 md:w-60 lg:w-80 xl:w-100"> Pâtes au canard: Pasta with duck confit and sauces like orange glaze or red wine reduction.</p>
          </div>
          <div className="flex flex-col gap-6">
            <img src="/images/italian-food3.jpg" className="w-[320px] sm:w-[200px] md:w-[240px] lg:w-[320px] xl:w-[400px] h-1/4 sm:h-1/2 object-cover" />
            <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl w-50 sm:w-50 md:w-60 lg:w-80 xl:w-100 text-fourth">
              <p className=" hidden md:blockfont-serif">03</p>
              <div className="font-serif text-third">Quenelles </div>
            </div>
            <p className="font-serif text-justify tracking-tighter text-md sm:text-md md:text-lg lg:text-xl w-50 sm:w-50 md:w-60 lg:w-80 xl:w-100">Quenelles: These are light dumplings made by blending fish, poultry, or meat with breadcrumbs, eggs, and cream, then poaching them until tender</p>
          </div>
        </div>
      </div>
    </div>
  )
}