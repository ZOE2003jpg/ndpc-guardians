import { MegaMenu } from "@/components/navigation/MegaMenu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dalinksLogo from "@/assets/dalinks-logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={dalinksLogo} 
                alt="DALINK'S NIGERIA LTD Logo" 
                className="h-12 w-12 md:h-16 md:w-16 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-navy">DALINK'S NIGERIA LTD</h1>
              <p className="text-xs md:text-sm text-muted-foreground">Data Protection Experts</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <MegaMenu />
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/contact">
              <Button size="sm" className="bg-accent text-accent-foreground text-sm md:text-base px-3 md:px-4 py-2 shadow-lg transform transition-transform hover:scale-105">
                Get Started
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden p-2">
              <span className="sr-only">Open menu</span>
              <div className="space-y-1">
                <div className="w-5 h-0.5 bg-current"></div>
                <div className="w-5 h-0.5 bg-current"></div>
                <div className="w-5 h-0.5 bg-current"></div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}