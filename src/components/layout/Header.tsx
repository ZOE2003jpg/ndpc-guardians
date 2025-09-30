import { MegaMenu } from "@/components/navigation/MegaMenu";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Shield className="h-7 w-7 md:h-8 md:w-8 text-trust" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-navy">NDPA Guardians</h1>
              <p className="text-xs md:text-sm text-muted-foreground">Compliance Experts</p>
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