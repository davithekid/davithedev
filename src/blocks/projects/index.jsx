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
                "Sistema com foco em agendamentos online, autenticação e controle de horários, utilizando APIs REST, Docker e interface moderna com Shadcn UI.",
            image: "./croods.png",
            link: "https://github.com/davithekid/croods",
            tech: ["Next.Js", "Fastify", "Sequelize", "Docker", "Shadcn UI"],
        },
        {
            id: 2,
            title: "Zelos",
            description:
                "Sistema de chamados técnicos desenvolvido para o SENAI Armando Arruda Pereira.",
            dialog:
                "Plataforma integrada ao Active Directory, construída com Express e Sequelize, utilizando Docker para padronização do ambiente.",
            image:
                "./zelos.png",
            link: "https://github.com/davithekid/zelos",
            tech: ["Next.Js", "Express", "Sequelize", "Docker", "Active Directory"],
        },
        {
            id: 3,
            title: "Aqua",
            description: "Sistema de gestão e monitoramento do consumo de água.",
            dialog:
                "Aplicação hospedada na AWS EC2, com backend em Fastify e dashboards analíticos para visualização de dados.",
            image:
                "./aqua.png",
            link: "https://github.com/davithekid/aqua",
            tech: ["Next.Js", "Fastify", "Sequelize", "Docker", "Shadcn UI", "AWS EC2"],
        },
        {
            id: 4,
            title: "V-MAP",
            description: "Sistema de gestão de transporte escolar.",
            dialog:
                "Gerencia rotas, motoristas e veículos, priorizando simplicidade e performance com Express e Knex.",
            image:
                "./v-map.png",
            link: "https://github.com/davithekid/v-map",
            tech: ["Next.Js", "Express", "Knex"],
        },
        {
            id: 5,
            title: "Library API",
            description: "API focada em deploy na AWS EC2 com Docker.",
            dialog:
                "API de gerenciamento de livros, explorando boas práticas de backend e infraestrutura com Docker.",
            image:
                "https://emaster.cloud/wp-content/uploads/sites/10/2023/07/amazon-ec2-aa.jpg",
            link: "https://github.com/davithekid/library-api",
            tech: ["Fastify", "Sequelize", "Docker", "AWS EC2"],
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
                                <div className="border-border flex flex-col overflow-clip rounded-xl border mx-3 lg:mx-0 hover:border-primary hover:scale-102 cursor-pointer transition">
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
                                        {feature.dialog}
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {feature.tech.map((techItem, index) => (
                                        <span
                                            key={index}
                                            className="text-primary text-sm border rounded-full px-3 py-1"
                                        >
                                            {techItem}
                                        </span>
                                    ))}
                                </div>

                                <AlertDialogFooter>
                                    <AlertDialogCancel className="cursor-pointer">Fechar</AlertDialogCancel>
                                    <AlertDialogAction className="cursor-pointer">
                                        <Link href={feature.link} target="_blank">Ver Projeto</Link>
                                    </AlertDialogAction>
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
