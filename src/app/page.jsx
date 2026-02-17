'use client'
import { motion } from "framer-motion";
import Contact02Page from "@/blocks/contact";
import { Feature16 } from "@/blocks/features";
import Footer05Page from "@/blocks/footer/footer";
import { Feature72 } from "@/blocks/projects";
import { Techs } from "@/blocks/techs";
import Timeline from "@/blocks/timeline/timeline";
import Navbar04Page from "@/components/navbar/navbar-04";
import MainHero from "@/blocks/hero";
import { Cta10 } from "@/blocks/cta";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      <nav>
        <header>
          <Navbar04Page />
        </header>
      </nav>

      <motion.section
        id="principal"
        className="mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        <MainHero />
      </motion.section>

      <motion.section
        id="tech"
        className="mx-auto container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        variants={fadeUp}
      >
        <Techs />
      </motion.section>

      <motion.section
        id="servicos"
        className="mx-auto bg-violet-50 dark:bg-zinc-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeUp}
      >
        <Feature16 />
      </motion.section>

      <motion.section
        id="projetos"
        className="mx-auto container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        variants={fadeUp}
      >
        <Feature72 />
      </motion.section>

      <motion.section
        id="timeline"
        className="mx-auto container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        variants={fadeUp}
      >
        <Timeline />
      </motion.section>

      <motion.section
        id="contato"
        className="mx-auto container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        variants={fadeUp}
      >
        <Contact02Page />
      </motion.section>

      <Cta10/>

      <footer>
        <Footer05Page />
      </footer>
    </>
  );
}
