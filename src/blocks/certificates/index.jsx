import { CalendarDays } from "lucide-react";
const Certificates = ({
    heading = "Meus Certificados",
    features = [
        {
            id: 1,
            title: "Fundamentos Linguagem de Programação C#",
            description:
                "SENAI Paulo Antonio Skaf",
            image: "https://storage.googleapis.com/star-lab/blog/OGs/CSharp.png",
            date: '29/09/2022'
        },
        {
            id: 2,
            title: "Linguagem de Programação Python Básico",
            description:
                "Fundação Bradesco",
            image: "https://imgs.search.brave.com/H41DUKTjQ2jfrzvhqRnycaaGDYymBdBylOWOtLaDEbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9QeXRob25f/KHByb2dyYW1taW5n/X2xhbmd1YWdlKS9Q/eXRob25fKHByb2dy/YW1taW5nX2xhbmd1/YWdlKS1Mb2dvLndp/bmUuc3Zn",
            date: '20/09/2024'
        },
        {
            id: 3,
            title: "CCNA V7: INTRODUCTION TO NETWORKS",
            description:
                "Cisco",
            image: "https://imgs.search.brave.com/5Qf2F6aYSaQy95qFFLWrTTRuyNmrcwgPjceJ2dX8K-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA0L2Npc2NvLWxv/Z28tMC5wbmc",
            date: '10/12/2024'
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
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="border-border flex flex-col overflow-hidden rounded-xl border mx-3 lg:mx-0 hover:scale-105 transition-transform duration-200 hover:border-primary"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="aspect-16/9 h-full w-full object-cover object-center"
                            />

                            <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                                    {feature.title}
                                </h3>

                                <div className="flex justify-between items-center">
                                    <p className="text-muted-foreground lg:text-lg">
                                        {feature.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-muted-foreground lg:text-lg">
                                        <CalendarDays size={18} className="text-primary" />
                                        <span>{feature.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Certificates };
