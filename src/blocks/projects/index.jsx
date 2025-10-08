"use client";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
const Feature72 = ({
  heading = "Meus Projetos",
  features = [
    {
      id: 1,
      title: "Barbearia Croods",
      description: "Sistema de agendamento para uma barbearia real.",
      dialog:
        "Sistema desenvolvido para uma barbearia real, com agendamentos online, autenticação e controle de horários. Projeto focado em APIs REST, Docker e interface moderna com Shadcn UI.",
      image: "./croods.png",
      link: "https://github.com/davithekid/croods",
      tech: ["Next.Js", " Fastify", " Sequelize", " Docker", " Shadcn UI"],
    },
    {
      id: 2,
      title: "Zelos",
      description:
        "Sistema de chamados feito para a escola SENAI Armando Arruda Pereira.",
      dialog:
        "Plataforma de chamados técnicos integrada ao Active Directory, com backend em Express e Sequelize. Utiliza Docker para padronização do ambiente e facilita o controle de suporte técnico.",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      link: "https://github.com/davithekid/zelos",
      tech: ["Next.Js", " Express", " Sequelize", " Docker", " Active Directory"],
    },
    {
      id: 3,
      title: "Aqua",
      description: "Sistema de Gestão do consumo de água.",
      dialog:
        "Aplicação para monitorar o consumo de água em tempo real, hospedada na AWS EC2. Backend com Fastify e dashboards analíticos para visualização de dados.",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      link: "https://github.com/davithekid/aqua",
      tech: [
        "Next.Js",
        " Fastify",
        " Sequelize",
        " Docker",
        " Shadcn UI",
        " AWS EC2",
      ],
    },
    {
      id: 4,
      title: "V-MAP",
      description: "Sistema de Gestão de Transporte Escolar.",
      dialog:
        "Sistema para controle de transporte escolar, com gerenciamento de rotas, motoristas e veículos. Desenvolvido com Express e Knex, priorizando simplicidade e performance.",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      link: "https://github.com/davithekid/vmap",
      tech: ["Next.Js", " Express", " Knex"],
    },
    {
      id: 5,
      title: "Library API",
      description: "API simples cujo foco foi o deploy na AWS.",
      dialog:
        "API para gerenciamento de livros. Deploy feito em EC2 com Docker, explorando boas práticas de backend.",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      link: "https://github.com/davithekid/library-api",
      tech: ["Fastify", " Sequelize", " Docker", " AWS EC2"],
    },
  ],
}) => {
    return (
        <section className="py-32">
            <div className="container flex flex-col gap-16 lg:px-16">
                <div className="lg:max-w-sm mx-auto">
                    <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center">
                        <span className="text-muted-foreground">&lt;</span>
                        <span className="text-primary">{heading}</span>
                        <span className="text-muted-foreground">&gt;</span>
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {features.map((feature) => (
                        <AlertDialog key={feature.id}>
                            <AlertDialogTrigger asChild>
                                <div className="border-border flex flex-col overflow-clip rounded-xl border mx-3 lg:mx-0 hover:border-primary cursor-pointer transition">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="aspect-16/9 h-full w-full object-cover object-center"
                                    />
                                    <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                                        <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6 text-center">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground lg:text-lg text-center">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </AlertDialogTrigger>

                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>{feature.title}</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <p>{feature.dialog}</p>
                                        <p className="mt-4">Tecnologias: <span className="text-primary border rounded-2xl p-1.5">{feature.tech}</span></p>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel className={'cursor-pointer'}>Fechar</AlertDialogCancel>
                                    <AlertDialogAction className={'cursor-pointer'}><Link href={feature.link} target="blank">Ver Projeto</Link></AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Feature72 };
