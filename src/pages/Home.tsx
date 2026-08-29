import { Hero }            from "../components/sections/Hero";
import { About }           from "../components/sections/About";
import { OtherProjects }   from "../components/sections/OtherProjects";
import { Capabilities }    from "../components/sections/Capabilities";
import { Philosophy }      from "../components/sections/Philosophy";
import { Contact }         from "../components/sections/Contact";

export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <OtherProjects />
      <Capabilities />
      <Philosophy />
      <Contact />
    </main>
  );
}
