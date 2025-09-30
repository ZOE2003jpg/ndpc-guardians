import { MegaMenu } from "@/components/navigation/MegaMenu";
import { Button } from "@/components/ui/button";
import dalinksLogo from "@/assets/dalinks-logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <img 
                src={dalinksLogo} 
                alt="DALINK'S NIGERIA LTD Logo" 
                className="h-8 w-8 md:h-10 md:w-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-navy">DALINK'S NIGERIA LTD</h1>
              <p className="text-xs md:text-sm text-muted-foreground">Data Protection Experts</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <MegaMenu />
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button size="sm" className="bg-accent text-accent-foreground text-sm md:text-base px-3 md:px-4 py-2 shadow-lg transform transition-transform">
              Get Started
            </Button>
            
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