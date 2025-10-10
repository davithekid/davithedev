'use client'
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Link from "next/link";

export default function NotFound() {
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
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tighter"
                        >
                            Página não encontrada
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-mono"
                        >
                            {"{ "}Página não encontrada <span className="text-violet-400">Erro 404</span>{" }"}
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
                                <Link href='/'>
                                    Voltar <ArrowUpRight className="h-5 w-5 ml-1" />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}