'use client'
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedGridPattern from "../../components/ui/animated-grid-pattern";
import Link from "next/link";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className="mask-[radial-gradient(500px_circle_at_center,white,transparent)] inset-x-0 h-full skew-y-12"
      />

      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full text-violet-400 text-sm font-medium font-mono">
                &lt;Desenvolvedor Back-end /&gt;
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter"
            >
              Davi Chagas
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-mono"
            >
              {"{ "}construindo APIs com <span className="text-violet-400">Node.js</span>,
              explorando <span className="text-violet-400">infraestrutura</span> e <span className="text-violet-400">cloud.</span> {"}"}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4 flex-wrap"
            >
              <Button
                size="lg"
                asChild
                onClick={() => scrollToSection("projects")}
                className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 py-6 text-base font-mono"
              >
                <Link href='#projetos'>
                  Projetos <ArrowUpRight className="h-5 w-5 ml-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                onClick={() => scrollToSection("technologies")}
                className="border-violet-700 hover:bg-violet-500/10 rounded-full px-8 py-6 text-base font-mono shadow-none"
              >
                <Link href='#contato'>
                  <CirclePlay className="h-5 w-5 mr-2" /> Contato
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center pt-4"
            >
              <a
                href="https://github.com/davithekid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 flex items-center justify-center transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/chagas-davi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="text-sm font-mono">scroll</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </div>
  );
}