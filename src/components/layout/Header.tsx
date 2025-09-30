import { Button } from "@/components/ui/button";
import { MegaMenu } from "@/components/navigation/MegaMenu";
import { Shield } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">
              NDPC Compliance
            </span>
          </div>
          
          <nav className="hidden lg:flex">
            <MegaMenu />
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              📞 Emergency Hotline
            </Button>
            <Button size="sm" className="bg-accent text-accent-foreground">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}