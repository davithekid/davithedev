import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetHeader, 
  SheetTitle 
} from "@/components/ui/sheet"; 
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full cursor-pointer">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full pt-4">
          <Logo />
          <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
        </div>
      </SheetContent>
    </Sheet>
  );
};