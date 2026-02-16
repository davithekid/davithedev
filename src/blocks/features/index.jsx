import { Timer, Zap, ZoomIn } from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "APIs previsíveis",
    description:
      "Implemento endpoints com validação de dados, tratamento global de exceções e respostas padronizadas, evitando erros inesperados.",
    color: "from-blue-500/10",
  },
  {
    icon: ZoomIn,
    title: "Organização em camadas",
    description:
      "Separo responsabilidades entre controller, service e repository, mantendo regras de negócio isoladas e fácil manutenção.",
    color: "from-emerald-500/10",
  },
  {
    icon: Zap,
    title: "Pronto para Produção",
    description:
      "Aplicações preparadas para o mundo real com Docker, Linux e ambientes escaláveis, garantindo estabilidade fora do local.",
    color: "from-amber-500/10",
  },
];

const Feature16 = () => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute top-0 left-1/2 -z-10 h-[400px] w-full -translate-x-1/2 opacity-20 blur-[120px] bg-primary/30 rounded-full" />

      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center mb-16">
            <span className="text-muted-foreground">&lt;</span>
            <span className="text-primary">O que eu entrego?</span>
            <span className="text-muted-foreground">&gt;</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={index}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-card/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-primary/10 hover:-translate-y-2"
              >
                <div className={`absolute -inset-px bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="relative z-10">
                  <div className="mb-8 inline-flex size-14 items-center justify-center rounded-2xl bg-secondary/80 text-primary ring-1 ring-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-3">
                    <Icon className="size-7" />
                  </div>

                  <h3 className="mb-4 text-xl font-bold tracking-tight">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base opacity-90">
                    {feature.description}
                  </p>
                </div>

                <div className="relative z-10 mt-8 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-12 rounded-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature16 };