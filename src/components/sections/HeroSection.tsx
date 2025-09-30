import { Button } from "@/components/ui/button";
import { Shield, Download, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Shield className="h-16 w-16 text-accent" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            NDPA Compliance Experts —{" "}
            <span className="text-accent">Protecting Your Data</span>,{" "}
            Building Trust
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            From training to audits to ongoing compliance monitoring, our certified consultants deliver end‑to‑end NDPA 2023 compliance solutions tailored to your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto"
            >
              📞 Book Free Compliance Assessment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 h-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Download NDPA Compliance Checklist
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-trust" />
              <span>NDPC‑Certified Consultants</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-trust" />
              <span>ISO‑Aligned Methodology</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-trust" />
              <span>120+ Organizations Registered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}