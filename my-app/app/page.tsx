import Image from "next/image";
import Landing from "./components/home/landing"
import Story from "./components/home/story"
import Menu from "./components/home/menu"
import Experience from "./components/home/experience"
import Contact from "./components/home/contact"

export default function Home() {
  return (
    <div>
      <main className="">
        <Landing />
        <section id="story">
          <Story />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
