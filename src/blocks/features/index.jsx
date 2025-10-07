import { Timer, Zap, ZoomIn } from "lucide-react";

const Feature16 = () => {
  const features = [
    {
      icon: <Timer className="size-6" />,
      title: "Performance",
      description:
        "Código otimizado, APIs rápidas e sistemas que priorizam eficiência, escalabilidade e tempo de resposta.",
    },
    {
      icon: <ZoomIn className="size-6" />,
      title: "Qualidade",
      description:
        "Arquiteturas limpas, boas práticas e testes que garantem estabilidade e manutenção a longo prazo.",
    },
    {
      icon: <Zap className="size-6" />,
      title: "Inovação",
      description:
        "Exploro novas tecnologias e abordagens para entregar soluções modernas e impactantes.",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        {/* Título */}
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center">
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-primary">O que eu entrego?</span>
          <span className="text-muted-foreground">&gt;</span>
        </h2>

        {/* Grid de features */}
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-accent p-8 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <span className="mb-6 flex size-14 items-center justify-center rounded-full bg-background shadow-inner">
                {feature.icon}
              </span>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature16 };
