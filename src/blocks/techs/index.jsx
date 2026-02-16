"use client";

import { Cog, PenTool, ServerCog, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Back-End",
    description:
      "Desenvolvimento de APIs REST robustas com foco em regras de negócio complexas, persistência de dados e arquitetura limpa.",
    items: ["Spring Boot", "JPA / Hibernate", "Node.js", "SQL Databases"],
    color: "from-blue-500/20",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Front-End",
    description:
      "Criação de interfaces responsivas e performáticas, focadas na experiência do usuário e integração fluída com APIs.",
    items: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
    color: "from-purple-500/20",
  },
  {
    icon: <ServerCog className="h-6 w-6" />,
    title: "DevOps & Infra",
    description:
      "Gerenciamento de deploys, containerização de aplicações e configuração de ambientes em nuvem escaláveis.",
    items: ["Docker", "AWS (EC2/S3)", "CI/CD", "Linux & Git"],
    color: "from-orange-500/20",
  },
];

const TechCard = ({ service }) => (
  <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10">
    <div className={`absolute -right-10 -top-10 h-32 w-32 bg-gradient-to-br to-transparent blur-3xl transition-opacity opacity-0 group-hover:opacity-100`} />

    <div className="relative z-10 space-y-6">
      <div className="flex items-center gap-4">
        <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {service.icon}
        </div>
        <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <ul className="grid grid-cols-2 gap-y-3">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary opacity-70" />
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

const Techs = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center mb-16">
            <span className="text-muted-foreground">&lt;</span>
            <span className="text-primary">Minha Stack</span>
            <span className="text-muted-foreground">&gt;</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <TechCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Techs };