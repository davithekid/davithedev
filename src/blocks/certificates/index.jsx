import * as React from "react";
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Certificates = ({
  heading = "Meus Certificados",
  features = [
    {
      id: 1,
      title: "Fundamentos Linguagem de Programação C#",
      description: "SENAI Paulo Antonio Skaf",
      image: "https://storage.googleapis.com/star-lab/blog/OGs/CSharp.png",
      date: "29/09/2022",
    },
    {
      id: 2,
      title: "Linguagem de Programação Python Básico",
      description: "Fundação Bradesco",
      image: "https://imgs.search.brave.com/H41DUKTjQ2jfrzvhqRnycaaGDYymBdBylOWOtLaDEbY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9QeXRob25f/KHByb2dyYW1taW5n/X2xhbmd1YWdlKS9Q/eXRob25fKHByb2dy/YW1taW5nX2xhbmd1/YWdlKS1Mb2dvLndp/bmUuc3Zn",
      date: "20/09/2024",
    },
    {
      id: 3,
      title: "CCNA V7: INTRODUCTION TO NETWORKS",
      description: "Cisco",
      image: "https://imgs.search.brave.com/5Qf2F6aYSaQy95qFFLWrTTRuyNmrcwgPjceJ2dX8K-8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE0/LzA0L2Npc2NvLWxv/Z28tMC5wbmc",
      date: "10/12/2024",
    },
    {
      id: 4,
      title: "Implantação de Serviços de IA em Nuvem - AI-900",
      description: "Microsoft",
      image: "https://imgs.search.brave.com/vCNsUygTv0kEJzDmghelAozKu-0TsjSG6EgZveKsRMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/cy50ZWNub2Jsb2cu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzAxL21pY3Jv/c29mdC0zNjUtY2Fw/YS03LTM0MHgxOTEu/cG5n",
      date: "16/10/2024 a 29/10/2024.",
    },
  ],
}) => {
  return (
    <section className="py-8">
      <div className="container flex flex-col gap-12 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            <span className="text-muted-foreground">&lt;</span>
            <span className="text-primary">{heading}</span>
            <span className="text-muted-foreground">&gt;</span>
          </h2>
        </div>
        <div className="relative w-full px-4 md:px-0">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {features.map((feature) => (
                <CarouselItem
                  key={feature.id}
                  className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full p-1">
                    <Card className="overflow-hidden border-border hover:border-primary transition-all duration-300 h-full flex flex-col group">
                      <div className="overflow-hidden">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="flex flex-col flex-1 p-6">
                        <h3 className="mb-4 text-xl font-bold line-clamp-2 min-h-[3.5rem]">
                          {feature.title}
                        </h3>

                        <div className="mt-auto flex flex-col gap-4">
                          <p className="text-muted-foreground text-sm italic">
                            {feature.description}
                          </p>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarDays size={16} className="text-primary" />
                            <span>{feature.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Certificates };