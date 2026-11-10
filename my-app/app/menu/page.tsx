export default function Menu() {
  return (
    <div className="h-screen overflow-auto text-white bg-fourth">
      <div id="title" className="flex flex-col justify-end items-center bg-black w-full h-1/4">
        <img src="/images/italian-background.jpg" className=" sticky top-20 left-0 z-0 h-full w-full object-cover object-center opacity-30" />
        <h1 className="font-script text-6xl z-10">Our Menu </h1>
        <div className="text-3xl z-10">──── ୨୧ ────</div>
      </div>
      {/*<img src="/images/menu-background.png" className=" sticky top-0 left-0 z-0 object-cover w-full h-full opacity-30" />*/}
      <div id="menu" className=" grid gap-20 p-6 ">
        <div id="Appetizers" className="grid z-10 justify-start sm:justify-center items-center">
          <h1 className="font-cinzel text-3xl sm:text-4xl">Appetizers</h1>
          <div id="ap-lst" className="flex flex-col lg:flex-row justify-between gap-4">
            <div id="section-1" className="grid gap-4 border-r-0 lg:border-r-2 pr-0 lg:pr-10  h-full">
              <div className="flex items-center gap-4">
                <img src="/images/arancini.png" className=" h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className=" text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Arancini</h4>
                  <p className=" text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Italian rice balls that are stuffed, coated with breadcrumbs and deep-fried</p>
                </div>
                <p className="font-serif  text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$1200</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/antipasto.png" className=" h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className=" text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Caprese Antipasto Skewers</h4>
                  <p className=" text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Delightful italian dish that combines fresh basil, juicy tomatoes, and mini mozzarella balls, all drizzled with a tangy balsamic glaze</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$2000</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/meatballs.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className=" text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Ricotta Meatballs</h4>
                  <p className=" text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Tender, homemade ricotta meatballs infused with fresh herbs and Parmesan, simmered in a rich, slow-cooked tomato sauce for a comforting taste of authentic Italian tradition.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$2000</p>
              </div>
            </div>

            <div id="section-2" className="grid gap-4 pl-0 lg:pl-10">
              <div className="flex items-center gap-4">
                <img src="/images/crostini.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className=" text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Crostini</h4>
                  <p className=" text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Crispy, golden slices of toasted Italian bread topped with fresh, vibrant ingredients, drizzled with extra virgin olive oil for a simple yet elegant Italian appetizer.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$1000</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/caprese-salad.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className=" text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Caprese Salad</h4>
                  <p className=" text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Fresh slices of ripe tomatoes layered with creamy mozzarella and fragrant basil, finished with extra virgin olive oil and a delicate balsamic glaze for a refreshing taste of Italy.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$1200</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/minestrone-soup.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className=" text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Minestrone Soup</h4>
                  <p className=" text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A hearty Italian vegetable soup filled with seasonal vegetables, tender beans, and pasta, slowly simmered in a rich tomato broth with fragrant herbs for a warm and comforting classic.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$800</p>
              </div>
            </div>
          </div>
        </div>

        <div id="Main-Dishes" className="grid z-10 justify-start sm:justify-center items-center">
          <h1 className="font-cinzel text-3xl sm:text-4xl">Main Dishes</h1>
          <div id="ap-lst" className="flex flex-col lg:flex-row justify-between gap-4">
            <div id="section-1" className=" grid gap-4 border-r-0 lg:border-r-2 pr-0 lg:pr-10 h-full">
              <div className="flex items-center gap-4">
                <img src="/images/pasta-bolognese.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className=" text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Bolognese Pasta</h4>
                  <p className=" text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Traditional Italian pasta tossed in a rich, slow-simmered beef and tomato ragù, infused with aromatic herbs and finished with freshly grated Parmesan for a comforting Italian classic.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$3200</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/pizza.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Classic Italian Pizza</h4>
                  <p className=" text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A hand-stretched, thin-crust pizza topped with rich tomato sauce, creamy mozzarella, and fresh basil, baked to golden perfection for an authentic taste of traditional Italy.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$3400</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/lasagne.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Grandma's Lasagna</h4>
                  <p className=" text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Layers of tender pasta, rich homemade meat sauce, creamy béchamel, and melted mozzarella, baked to golden perfection using Grandma's cherished Italian recipe for a comforting taste of home.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$3000</p>
              </div>
            </div>

            <div id="section-2" className="grid gap-4 pl-0 lg:pl-10">
              <div className="flex items-center gap-4">
                <img src="/images/Porchetta.png" className="h-20 w-30 lg:h-30 lg:w-40  object-cover" />
                <div>
                  <h4 className=" text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Porchetta</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Traditional Italian slow-roasted pork seasoned with fragrant rosemary, garlic, and aromatic herbs, wrapped in crispy golden crackling and served tender and full of rich, rustic flavour.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$4200</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/risotto-meze.png" className="h-20 w-30 lg:h-30 lg:w-40  object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Risotto Meze</h4>
                  <p className=" text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Creamy Italian Arborio rice slowly cooked to perfection with rich broth, Parmesan, and fragrant herbs, creating a delicate, velvety dish full of comforting Mediterranean flavours.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$3500</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/chicken-vesuvio.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Chicken Vesuvio</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Tender roasted chicken seasoned with garlic, oregano, and white wine, served with golden crispy potatoes and sweet green peas in a rich, buttery pan sauce for a classic Italian-American favourite.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$4000</p>
              </div>
            </div>
          </div>
        </div>
        <div id="Desserts" className="grid z-10 justify-start sm:justify-center items-center">
          <h1 className="font-cinzel text-3xl sm:text-4xl">Desserts</h1>
          <div id="ap-lst" className="flex flex-col lg:flex-row justify-between gap-4">
            <div id="section-1" className="grid gap-4 border-r-0 lg:border-r-2 pr-0 lg:pr-10 h-full">
              <div className="flex items-center gap-4">
                <img src="/images/panna-cotta.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Panna Cotta</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A silky-smooth Italian cream dessert delicately infused with vanilla, gently set to perfection and served with a sweet berry coulis for an elegant finish to your dining experience.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$2200</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/tiramisu.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Tiramisu</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Layers of delicate espresso-soaked ladyfingers and rich mascarpone cream, dusted with fine cocoa powder for a decadent Italian dessert that melts in every bite.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$2500</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/gelato.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Gelato</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">Authentic Italian-style ice cream, crafted with fresh ingredients for a luxuriously smooth and creamy texture, available in a selection of delightful flavours for a refreshing, sweet finish.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$2000</p>
              </div>
            </div>

            <div id="section-2" className="grid gap-4 pl-0 lg:pl-10">
              <div className="flex items-center gap-4">
                <img src="/images/panettone.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Panettone</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A traditional Italian sweet bread baked to golden perfection, filled with candied citrus peel and plump raisins, offering a light, fluffy texture and delicate sweetness in every slice.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$2100</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/cassata.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Cassata</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A classic Sicilian dessert featuring layers of soft sponge cake, sweet ricotta cream, and candied fruits, finished with a delicate marzipan coating for a beautifully rich and festive Italian treat.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$3200</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/pastiera.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Pastiera</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A traditional Neapolitan pastry filled with creamy ricotta, tender wheat berries, and fragrant citrus zest, baked in a delicate golden crust for a beautifully sweet taste of Italian heritage.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$3000</p>
              </div>
            </div>
          </div>
        </div>
        <div id="Drinks" className="grid z-10 justify-start sm:justify-center items-center">
          <h1 className="font-cinzel text-3xl sm:text-4xl">Drinks</h1>
          <div id="ap-lst" className="flex flex-col lg:flex-row justify-between gap-4">
            <div id="section-1" className="grid gap-4 border-r-0 lg:border-r-2 pr-0 lg:pr-10 h-full">
              <div className="flex items-center gap-4">
                <img src="/images/negroni.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Negroni</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A classic Italian aperitivo-inspired drink, traditionally combining bitter, citrusy, and aromatic flavours for a bold and sophisticated taste with a beautifully balanced finish.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$1800</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/aperol-spritz.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Aperol Spritz</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A refreshing Italian-inspired sparkling aperitivo with bright citrus notes, delicate bitterness, and a lively bubbly finish, offering a light and vibrant flavour.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$1700</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/bellini.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Bellini</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A delicate Italian-inspired sparkling peach drink, blending sweet, juicy peach flavours with crisp bubbles for a light, fruity, and refreshing finish.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$1800</p>
              </div>
            </div>

            <div id="section-2" className="grid gap-4 pl-0 lg:pl-10">
              <div className="flex items-center gap-4">
                <img src="/images/wine.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Wine</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A carefully curated selection of fine Italian wines, featuring rich reds, crisp whites, and delicate rosés, chosen to complement our authentic dishes and celebrate Italy's renowned winemaking tradition.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$3000</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/soda.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Soda</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A refreshing selection of chilled, fizzy soft drinks, offering a variety of classic flavours to perfectly complement your meal and quench your thirst.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$300</p>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/fruit-cocktail.png" className="h-20 w-30 lg:h-30 lg:w-40 object-cover" />
                <div>
                  <h4 className="text-md sm:text-lg md:text-xl lg:text-2xl font-cinzel">Fruit Cocktails</h4>
                  <p className="text-sm sm:text-md md:text-lg lg:text-lg font-serif w-50 sm:w-50 md:w-70 lg:w-70 xl:w-100 text-justify tracking-tighter">A vibrant blend of fresh, tropical fruits bursting with natural sweetness and refreshing flavours, beautifully served for a bright and delightful taste of summer.</p>
                </div>
                <p className="font-serif text-lg sm:text-xl md:text-2xl lg:2xl xl:text-3xl">$1500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}