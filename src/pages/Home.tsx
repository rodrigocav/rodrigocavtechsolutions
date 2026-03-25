import Hero from "../components/Hero";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Reviews from "./reviews";
import Services from "./Services";


export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Contact /> 
    </>
  );
}