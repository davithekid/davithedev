import { Certificates } from "@/blocks/certificates";
import Contact02Page from "@/blocks/contact";
import { Feature16 } from "@/blocks/features";
import Footer05Page from "@/blocks/footer/footer";
import Hero07 from "@/blocks/hero";
import { Feature72 } from "@/blocks/projects";
import { Techs } from "@/blocks/techs";
import Timeline from "@/blocks/timeline/timeline";
import Navbar04Page from "@/components/navbar/navbar-04";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <header>
          <Navbar04Page />
        </header>
      </nav>

      <section id="principal" className="mx-auto">
        <Hero07 />
      </section>

      <section id="tech" className="mx-auto container">
        <Techs />
      </section>

      <section id="servicos" className="mx-auto  bg-violet-50 dark:bg-zinc-900">
        <Feature16 />
      </section>

      <section  id="projetos" className="mx-auto container">
        <Feature72 />
      </section>

      <section id="certificados" className="mx-auto container">
        <Certificates />
      </section>

      <section id="timeline" className="mx-auto container">
        <Timeline />
      </section>


      <section id="contato" className="mx-auto container">
        <Contact02Page />
      </section>

      <footer>
        <Footer05Page />
      </footer>
    </>
  );
}
