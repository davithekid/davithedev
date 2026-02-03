import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme/button";
import { cn } from "@/lib/utils";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export const NavMenu = (props) => (
  <NavigationMenu {...props}>
    <VisuallyHidden.Root>
      <h2>Navegação Principal</h2>
    </VisuallyHidden.Root>

    <NavigationMenuList
      className="gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start"
    >
      {[
        { href: "#principal", label: "Início" },
        { href: "#tech", label: "Tecnologias" },
        { href: "#servicos", label: "Serviços" },
        { href: "#projetos", label: "Projetos" },
        { href: "#certificados", label: "Certificados" },
        { href: "#timeline", label: "Timeline" },
        { href: "#contato", label: "Contato" },
      ].map((item) => (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent cursor-pointer")}>
            <Link href={item.href}>
              {item.label}
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}

      <NavigationMenuItem className="lg:hidden flex items-center gap-4 pt-6 mt-2 border-t border-border w-full data-[orientation=horizontal]:hidden">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Tema</span>
            <ModeToggle />
          </div>
          <a
            href="./curriculo.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full cursor-pointer shadow-md">
              Baixar Currículo
            </Button>
          </a>
        </div>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);