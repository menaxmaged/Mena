import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import OtherWork from "@/components/OtherWork";
import BeyondWebDev from "@/components/BeyondWebDev";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <OtherWork />
        <BeyondWebDev />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
