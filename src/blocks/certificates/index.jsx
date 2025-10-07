import { ArrowRight } from "lucide-react";
const Certificates = ({
    heading = "Meus Certificados",
    features = [
        {
            id: "1",
            title: "Fundamentos Linguagem de Programação C#",
            description:
                "SENAI Paulo Antonio Skaf",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
        },
        {
            id: "2",
            title: "Fundamentos Python",
            description:
                "Fundação Bradesco",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
        },
        {
            id: "3",
            title: "Orientação a Objetos Java",
            description:
                "Fundação Bradesco",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
        },
    
    ],
}) => {
    return (
        <section className="py-8">
            <div className="container flex flex-col gap-16 lg:px-16">
                <div className="lg:max-w-sm">
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center">
                        <span className="text-muted-foreground">&lt;</span>
                        <span className="text-primary">{heading}</span>
                        <span className="text-muted-foreground">&gt;</span>
                    </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
                    {features.map((feature) => (
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

export { Certificates };
