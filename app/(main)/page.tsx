import Stats from "../components/Stats/Stats";
import About from "../components/about/About";
import Blog from "../components/blog/Blog";
import Hero from "../components/hero/Hero";
import Leadership from "../components/leadership/Leadership";
import Partners from "../components/partners/Partners";
import Projects from "../components/projects/Projects";
import Services from "../components/services/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
      <Leadership />
      <Partners />
      <Blog />
    </div>
  );
}
