import { Timer, Zap, ZoomIn } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Desempenho",
    description:
      "Busco sempre escrever código limpo e eficiente, pensando em respostas rápidas e uma boa experiência para o usuário.",
  },
  {
    icon: ZoomIn,
    title: "Boas Práticas",
    description:
      "Valorizo organização, padrões e clareza no código — criando bases sólidas para crescer e manter projetos com qualidade.",
  },
  {
    icon: Zap,
    title: "Aprendizado Contínuo",
    description:
      "Gosto de explorar novas tecnologias e entender como posso aplicá-las de forma prática em projetos reais.",
  },
];

const Feature16 = () => {
  return (
    <section className="py-16 md:py-24 flex justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-center mb-12 lg:mb-20">
          <span className="text-muted-foreground">&lt;</span>
          <span className="text-primary">O que eu entrego?</span>
          <span className="text-muted-foreground">&gt;</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={index}
                className="group relative rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
              >
                <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-7" aria-hidden="true" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-card-foreground">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature16 };