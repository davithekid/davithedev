"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, PhoneIcon, ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedGridPattern from "../../components/ui/animated-grid-pattern";
import ParticlesBackground from "@/components/ui/ParticlesBackground";

export default function MainHero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className="mask-[radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 h-full skew-y-12 z-[1]"
      />

      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse z-[1]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse z-[1]" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div className="inline-block">
              <span className="px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-sm font-medium font-mono">
                &lt;Back-End Developer /&gt;
              </span>
            </motion.div>

            <div className="space-y-6">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[ -0.05em] leading-[0.9]">
                <span className="block ">Davi Chagas</span>
              </h1>
              <h1 className="lg:text-7xl text-primary font-bold tracking-[ -0.05em] leading-[0.9]">
                Dev Back-end
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative group max-w-3xl mx-auto"
              >
                <p className="text-sm md:text-xl leading-relaxed font-mono">
                  {'{ '}
                  <span className="text-muted-foreground">
                    Desenvolvedor back-end com foco em <span className="">Java e Spring Boot</span>,
                    construindo aplicações web, APIs e integrações entre sistemas.
                  </span>
                  {' }'}

                </p>

                <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-violet-500/50 to-transparent hidden md:block" />
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button size="lg" asChild className="bg-violet-600 hover:bg-violet-700 rounded-full px-8 py-6">
                <Link href="#projetos">Projetos <ArrowUpRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="rounded-full px-8 py-6 border-violet-700">
                <Link href="#contato"><PhoneIcon className="mr-2 h-5 w-5" /> Contato</Link>
              </Button>
            </div>

            <div className="flex gap-4 justify-center pt-4">
              <a href="https://github.com/davithekid" target="_blank" className="p-3 rounded-full bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/20 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/chagas-davi" target="_blank" className="p-3 rounded-full bg-violet-500/10 border border-violet-500/20 hover:bg-violet-500/20 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground flex flex-col items-center gap-2">
        <span className="text-xs font-mono">scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </div>
  );
}