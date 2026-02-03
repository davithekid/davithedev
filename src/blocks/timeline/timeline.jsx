import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Calendar, 
  BriefcaseBusiness, 
  GraduationCap, 
  Terminal,
  ChevronRight
} from "lucide-react";

const experiences = [
  {
    title: "Aprendiz de TI",
    company: "Grupo Braido",
    period: "2025 - 2025",
    description:
      "Suporte técnico especializado e gestão de infraestrutura. Atuação direta no monitoramento de ambientes críticos e administração de sistemas SaaS, garantindo a alta disponibilidade dos serviços.",
    technologies: ["Prometheus", "SaaS", "Infraestrutura", "Servidores", "TOTVS"],
    icon: <BriefcaseBusiness className="h-5 w-5 text-primary" />,
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas",
    company: "SENAI Armando de Arruda Pereira",
    period: "2024 - 2025",
    description:
      "Formação focada em arquitetura de software e desenvolvimento Fullstack. aprendendo sobre lógica de programação, banco de dados, e desenvolvimento web moderno.",
    technologies: ["JavaScript", "Node.js", 'PHP', "Next.js", "MySQL", "Docker", "Linux"],
    icon: <GraduationCap className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Fundamentos na Linguagem C#",
    company: "SENAI Paulo Antonio Skaf",
    period: "2022",
    description:
      "Introdução sólida à computação, abrangendo lógica de programação orientada a objetos, fundamentos de redes de computadores e sistemas operacionais.",
    technologies: ["C#", "Redes", "Sistemas Operacionais"],
    icon: <Terminal className="h-5 w-5 text-emerald-500" />,
  },
];

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto py-12 md:py-20 px-6">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center mb-16">
        <span className="text-muted-foreground font-light">&lt;</span>
        <span className="text-primary px-2">Timeline</span>
        <span className="text-muted-foreground font-light">&gt;</span>
      </h2>

      <div className="relative ml-3 border-l-2 border-muted">
        {experiences.map(({ company, description, period, technologies, title, icon }, index) => (
          <div key={index} className="relative pl-10 pb-16 last:pb-0 group">
            <div className="absolute h-4 w-4 -translate-x-1/2 left-[-1px] top-1.5 rounded-full border-2 border-primary bg-background ring-4 ring-background group-hover:scale-125 transition-transform duration-300" />

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="shrink-0 h-10 w-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 shadow-sm">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors tracking-tight">
                      {title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm">
                      <Building2 className="h-3.5 w-3.5" />
                      <span>{company}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-mono text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{period}</span>
                </div>
              </div>

              <div className="relative">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-pretty border-l-2 border-primary/10 pl-4 py-1">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {technologies.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="rounded-md bg-background/50 text-[11px] font-medium border-primary/20 hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}