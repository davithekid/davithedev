import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme/button";

export const NavMenu = (props) => (
  <NavigationMenu {...props}>
    <NavigationMenuList
      className="gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Inicio</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Tecnologias</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Serviços</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Projetos</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Certificados</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">TimeLine</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="#">Contato</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <div className="flex flex-col md:hidden items-center gap-3">
            <Button>Curriculo</Button>
            <ModeToggle/>
            </div>
    </NavigationMenuList>
  </NavigationMenu>
);
