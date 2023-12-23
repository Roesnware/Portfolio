import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import NavBar from "@/components/main/NavBar";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Blur from "@/components/main/Blur"
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <NavBar />
        <Skills />
        <Projects />
        {/* <Blur top={750} left={1560}/>
        <Blur top={1860} left={1020}/>
        <Blur top={2860} left={520}/>
        <Blur top={2860} left={520}/>
        <Blur top={3160} left={1620}/> */}
        <Contact />
        <Footer />
      </div>
    </main>
  );
}