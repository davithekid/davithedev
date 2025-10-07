import { Timer, Zap, ZoomIn } from "lucide-react";

const Feature16 = () => {
  const features = [
    {
      icon: <Timer className="size-6" />,
      title: "Desempenho",
      description:
        "Busco sempre escrever código limpo e eficiente, pensando em respostas rápidas e uma boa experiência para o usuário.",
    },
    {
      icon: <ZoomIn className="size-6" />,
      title: "Boas Práticas",
      description:
        "Valorizo organização, padrões e clareza no código — criando bases sólidas para crescer e manter projetos com qualidade.",
    },
    {
      icon: <Zap className="size-6" />,
      title: "Aprendizado Contínuo",
      description:
        "Gosto de explorar novas tecnologias e entender como posso aplicá-las de forma prática em projetos reais.",
    },
  ];

  return (
    <section className="py-6">
      <div className="container">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center">
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-primary">O que eu entrego?</span>
          <span className="text-muted-foreground">&gt;</span>
        </h2>

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
