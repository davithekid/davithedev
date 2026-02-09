import * as React from "react";
import { CalendarDays, Award } from "lucide-react";
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
      title: "Microsoft AI-900 - Cloud AI Services",
      description: "Microsoft",
      image: "https://imgs.search.brave.com/1X0RnvItL9OOj86Uqe1XwxMhkQya-7fXziLTObmzIIw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXR0/aW5lZ3JvdXAuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA0L2ludGVsaWdl/bmNpYS1hcnRpZmlj/aWFsLWxhdHRpbmUt/Z3JvdXAuanBn",
      date: "29/10/2024",
    },
  ],
}) => {
  return (
    <section className="py-12 bg-transparent">
      <div className="container px-6 lg:px-16">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
              <span className="text-muted-foreground font-light">&lt;</span>
              <span className="text-primary px-1">{heading}</span>
              <span className="text-muted-foreground font-light">&gt;</span>
            </h2>
            <div className="flex gap-2 relative">
              <CarouselPrevious className="static translate-y-0 h-9 w-9 md:h-10 md:w-10 border-primary/20 hover:bg-primary hover:text-white transition-colors" />
              <CarouselNext className="static translate-y-0 h-9 w-9 md:h-10 md:w-10 border-primary/20 hover:bg-primary hover:text-white transition-colors" />
            </div>
          </div>

          <CarouselContent className="-ml-4">
            {features.map((feature) => (
              <CarouselItem
                key={feature.id}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full py-2">
                  <Card className="overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full flex flex-col group shadow-sm hover:shadow-md">
                    <div className="overflow-hidden relative aspect-video">
                       <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2">
                         <BadgeDate text={feature.date} />
                      </div>
                    </div>
                    
                    <CardContent className="flex flex-col flex-1 p-5 md:p-6">
                      <h3 className="mb-4 text-lg font-bold line-clamp-2 min-h-[3rem] group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>

                      <div className="mt-auto flex flex-col gap-3">
                        <p className="text-muted-foreground text-sm font-medium border-l-2 border-primary/20 pl-3">
                          {feature.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground/80 bg-muted/30 p-2 rounded-md">
                          <CalendarDays size={14} className="text-primary" />
                          <span>Concluído em {feature.date.split(' ').pop()}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

const BadgeDate = ({ text }) => (
  <div className="bg-background/90 backdrop-blur shadow-sm border border-border px-2 py-1 rounded text-[10px] font-bold text-primary">
    {text.includes("2024") ? "2024" : "2022"}
  </div>
);

export { Certificates };