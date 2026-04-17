import { Hero }            from "../components/sections/Hero";
import { About }           from "../components/sections/About";
import { FlagshipProject } from "../components/sections/FlagshipProject";
import { OtherProjects }   from "../components/sections/OtherProjects";
import { Capabilities }    from "../components/sections/Capabilities";
import { Philosophy }      from "../components/sections/Philosophy";
import { Contact }         from "../components/sections/Contact";

export function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <FlagshipProject />
      <OtherProjects />
      <Capabilities />
      <Philosophy />
      <Contact />
    </main>
  );
}
