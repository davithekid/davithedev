import { Button } from "@/components/ui/button";
import { FileDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const Cta10 = ({
    heading = "Vamos trabalhar juntos",
    description = "Veja meu currículo completo com experiências, tecnologias e projetos detalhados.",
    buttons = {
        primary: {
            text: "Abrir Currículo",
            url: "/curriculo-davi-chagas.pdf",
        },
    },
}) => {
    return (
        <section className="px-6 py-4">
            <div className="relative overflow-hidden rounded-[2.5rem] border bg-accent/50 px-8 py-12 md:px-16 md:py-20">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

                <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row lg:text-left text-center">
                    <div className="flex-1 space-y-4">
                        <h3 className="text-3xl font-black tracking-tighter md:text-5xl">
                            {heading}
                        </h3>
                        <p className="mx-auto max-w-xl text-muted-foreground md:text-lg font-light leading-relaxed lg:mx-0">
                            {description}
                        </p>
                    </div>

                    <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
                        {buttons.primary && (
                            <Button
                                asChild
                                size="lg"
                                className="h-16 rounded-2xl px-8 text-lg font-bold shadow-xl shadow-primary/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                <a
                                    href={buttons.primary.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3"
                                >

                                    <FileDown className="size-5" />
                                    {buttons.primary.text}
                                    <ArrowRight className="size-4 opacity-50" />
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Cta10 };