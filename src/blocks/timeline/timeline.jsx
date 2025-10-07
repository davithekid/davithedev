import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Student System Development",
    company: "SENAI Armando de Arruda Pereira",
    period: "2024 - Present",
    description:
      "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
    technologies: ["JavaScript", "Node.js", "PHP", "Next.js", "MySQL", 'Virtual Machine'],
  },
  {
    title: "Help Desk",
    company: "Grupo Braido",
    period: "2025-2025",
    description:
      "Led the development of enterprise-scale web applications, mentored junior developers, and implemented best practices for code quality and performance optimization.",
    technologies: ["Prometheus", "SASS", "Infra"],
  },

];

export default function Timeline() {
  return (
    <div className="max-w-(--breakpoint-sm) mx-auto py-12 md:py-20 px-6">
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center py-8">
        <span className="text-muted-foreground">&lt;</span>
        <span className="text-primary">TimeLine</span>
        <span className="text-muted-foreground">&gt;</span>
      </h2>

      <div className="relative ml-3">
        <div className="absolute left-0 top-4 bottom-0 border-l-2" />

        {experiences.map(({ company, description, period, technologies, title }, index) => (
          <div key={index} className="relative pl-8 pb-12 last:pb-0">
            <div
              className="absolute h-3 w-3 -translate-x-1/2 left-px top-3 rounded-full border-2 border-primary bg-background ring-8 ring-background" />

            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div
                  className="shrink-0 h-9 w-9 bg-accent rounded-full flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                </div>
                <span className="text-base font-medium">{company}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{period}</span>
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground text-pretty">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="rounded-full">
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
