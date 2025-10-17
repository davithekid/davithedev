import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { ModeToggle } from "../theme/button";

const Navbar04Page = () => {
  return (
    <div className="py-6">
      <nav
        className="top-6 inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-(--breakpoint-xl) mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden lg:block" />

          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="./curriculo.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button className={'cursor-pointer'}>Baixar Currículo</Button>
              </a>
              <ModeToggle />
            </div>
           
              {/* Mobile Menu */}
            <div className="lg:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar04Page;
