"use client";

import { Code, Cog, PenTool, ServerCog } from "lucide-react";

const Techs = () => {
   const services = [
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Back-End",
    description:
      "Desenvolvo APIs e estruturas escaláveis, buscando código limpo e boas práticas, em constante evolução a cada projeto.",
    items: ["Spring Boot","Node.js", "Laravel", "Nginx", "Apache"],
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Front-End",
    description:
      "Crio interfaces limpas, responsivas e funcionais usando sistemas modernos de componentes, sempre com atenção à experiência do usuário.",
    items: ["Next.js / React", "TailwindCSS", "SEO", "Acessibilidade"],
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Integração Full Stack",
    description:
      "Conecto front e back de forma prática, integrando APIs, autenticação e buscando desempenho eficiente em cada projeto.",
    items: ["APIs RESTful", "JWT Auth", "React Hooks"],
  },
  {
    icon: <ServerCog className="h-6 w-6" />,
    title: "DevOps & Infraestrutura",
    description:
      "Aprendendo a automatizar, implantar e escalar sistemas usando ferramentas modernas, sempre em evolução.",
    items: ["Docker", "Linux", "AWS (EC2)", "Git", "MySQL"],
  },
];

    return (
        <section className="py-32">
            <div className="container">
                <div className="mx-auto max-w-6xl space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center">
                            <span className="text-muted-foreground">&lt;</span>
                            <span className="text-primary">Minha Stack</span>
                            <span className="text-muted-foreground">&gt;</span>
                        </h2>
    
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="border-primary/50     space-y-6 rounded-2xl border p-8 transition-all hover:shadow-lg hover:-translate-y-1 mx-3  lg:mx-0"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-muted rounded-full p-3 text-primary">{service.icon}</div>
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="space-y-2">
                                    {service.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-center gap-2">
                                            <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Techs };
