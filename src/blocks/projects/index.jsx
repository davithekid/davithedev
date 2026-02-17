"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Gestão financeira pessoal",
    description: "Desenvolvimento de API REST utilizando Java e Spring Boot com arquitetura em camadas (Controller, Service e Repository)",
    dialog: "Desenvolvimento de API REST utilizando Java e Spring Boot com arquitetura em camadas (Controller, Service e Repository)",
    image: "/spring-boot.webp",
    link: "https://github.com/davithekid/api_spring-boot",
    tech: ["Java", "Spring boot", "JPA", "Swagger"],
  },
  {
    id: 2,
    title: "Zelos",
    description: "Sistema de chamados e controle de patrimônio (Hackathon)",
    dialog: "Desenvolvimento de API REST em Node.js (Express) seguindo arquitetura MVC e separação de responsabilidades.",
    image: "/zelos.png",
    link: "https://github.com/davithekid/zelos",
    tech: ["Next.Js", "Express", "Sequelize", "Docker", "Active Directory"],
  },
  {
    id: 3,
    title: "Aqua",
    description: "Sistema de gestão e monitoramento do consumo de água. (TCC SENAI)",
    dialog: "Aplicação hospedada na AWS EC2, com backend em Fastify e dashboards analíticos para visualização de dados.",
    image: "/aqua.png",
    link: "https://github.com/tcc-aqua/aqua",
    tech: ["Next.Js", "Fastify", "Sequelize", "Docker", "Shadcn UI", "AWS EC2", "Swagger"],
  },
  {
    id: 5,
    title: "Tam Artsy",
    description: "Plataforma de Vendas de Produtos Artesanais.",
    dialog: "Feito para uma cliente real, consiste em uma aplicação de catálogo para exposição e venda de produtos artesanais.",
    image: "/tamartsy.png",
    link: "https://tamartsy.vercel.app/",
    tech: ["NextJs", "Shadcn"],
  },
];

const Feature72 = ({ heading = "Meus Projetos" }) => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
            <span className="text-muted-foreground/30 font-mono">&lt;</span>
            <span className="text-primary">{heading}</span>
            <span className="text-muted-foreground/30 font-mono">/&gt;</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <AlertDialog key={project.id}>
              <AlertDialogTrigger asChild>
                <article className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-xs font-semibold flex items-center gap-2 tracking-wide uppercase">
                        <Code2 size={16} className="text-primary" /> 
                        Ver detalhes técnicos
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="text-[10px] uppercase font-bold tracking-widest text-primary/80">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] text-muted-foreground font-medium">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </article>
              </AlertDialogTrigger>

              <AlertDialogContent className="max-w-[90vw] sm:max-w-[550px] overflow-hidden p-0 border-none rounded-3xl">
                <div className="relative h-48 w-full">
                  <img src={project.image} alt="" className="w-full h-full object-cover opacity-40 grayscale-[50%]" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                </div>
                
                <div className="px-6 pb-8 -mt-12 relative z-10">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-3xl font-bold tracking-tight">
                      {project.title}
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-base leading-relaxed text-foreground/90 mt-2">
                      {project.dialog}
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <div className="my-6">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                      Stack do Projeto
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <Badge key={item} variant="secondary" className="px-3 py-1 text-xs font-medium bg-secondary/50 border-none hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <AlertDialogFooter className="flex-col sm:flex-row gap-3">
                    <AlertDialogCancel className="sm:flex-1 rounded-xl h-12 font-medium">
                      Voltar
                    </AlertDialogCancel>
                    <AlertDialogAction asChild className="sm:flex-1 rounded-xl h-12 font-bold shadow-lg shadow-primary/25 transition-transform active:scale-95">
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        className="flex items-center justify-center gap-2"
                      >
                        {project.link.includes("github") ? <Github size={18} /> : <ExternalLink size={18} />}
                        Explorar Projeto
                      </Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </div>
              </AlertDialogContent>
            </AlertDialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature72 };