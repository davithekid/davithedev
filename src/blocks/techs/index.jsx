"use client";

import { Code, Cog, PenTool, ServerCog } from "lucide-react";

const Techs = () => {
    const services = [
        {
            icon: <Cog className="h-6 w-6" />,
            title: "Back-End Engineering",
            description:
                "Robust APIs and scalable architectures built with modern frameworks and clean code principles.",
            items: ["Node.js (Fastify / Express)", "Sequelize ORM", "Spring Boot"],
        },
        {
            icon: <PenTool className="h-6 w-6" />,
            title: "Front-End Development",
            description:
                "Clean, responsive, and accessible interfaces using modern component-based design systems.",
            items: ["Next.js", "TailwindCSS", "Shadcn/UI"],
        },
        {
            icon: <Code className="h-6 w-6" />,
            title: "Full Stack Integration",
            description:
                "Seamless connection between front and back, integrating APIs, authentication and optimized performance.",
            items: ["RESTful APIs", "JWT Auth", "React Hooks"],
        },
        {
            icon: <ServerCog className="h-6 w-6" />,
            title: "DevOps & Infrastructure",
            description:
                "Automation, deployment and scalability with modern tooling and best practices.",
            items: ["Docker", "Linux", "AWS (EC2)", "Git "],
        },
    ];

    return (
        <section className="py-32">
            <div className="container">
                <div className="mx-auto max-w-6xl space-y-12">
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-center">
                            <span className="text-muted-foreground">&lt;</span>
                            <span className="text-primary">My Tech Stack</span>
                            <span className="text-muted-foreground">&gt;</span>
                        </h2>
    
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="border-border space-y-6 rounded-2xl border p-8 transition-all hover:shadow-lg hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="bg-muted rounded-full p-3">{service.icon}</div>
                                    <h3 className="text-xl font-semibold">{service.title}</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="space-y-2">
                                    {service.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-center gap-2">
                                            <div className="bg-foreground h-1.5 w-1.5 rounded-full" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Techs };
