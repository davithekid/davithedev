import { ArrowRight } from "lucide-react";
const Feature73 = ({
    heading = "My Projects",
    linkUrl = "https://www.shadcnblocks.com",
    features = [
        {
            id: "feature-1",
            title: "Zelos - Sistema de Chamado",
            description:
                "Sistema de chamados criado para a escola SENAI Armando de Arruda Peireita.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
        },
        {
            id: "feature-2",
            title: "V-MAP",
            description:
                "Sistema de Gestão de Transporte Escolar.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
        },
        {
            id: "feature-3",
            title: "Aqua",
            description:
                "Sistema de Gestão do consumo de água.",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
        },
    ],
}) => {
    return (
        <section className="py-10">
            <div className="container flex flex-col gap-16 lg:px-16">
                <div className="lg:max-w-sm">
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center">
                        <span className="text-muted-foreground">&lt;</span>
                        <span className="text-primary">{heading}</span>
                        <span className="text-muted-foreground">&gt;</span>
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {features[0] && (
                        <div className="border-border flex flex-col overflow-clip rounded-xl border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                            <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                                <img
                                    src={features[0].image}
                                    alt={features[0].title}
                                    className="aspect-16/9 h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {features[0].title}
                                </h3>
                                <p className="text-muted-foreground lg:text-lg">
                                    {features[0].description}
                                </p>
                            </div>
                        </div>
                    )}
                    {features.slice(1).map((feature) => (
                        <div
                            key={feature.id}
                            className="border-border flex flex-col overflow-clip rounded-xl border"
                        >
                            <div>
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="aspect-16/9 h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground lg:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Feature73 };
