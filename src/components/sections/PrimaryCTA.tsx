import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Phone, FileText } from "lucide-react";

export function PrimaryCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="relative container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-primary-foreground/10 backdrop-blur border-primary-foreground/20">
          <CardContent className="p-12 text-center">
            <div className="flex justify-center mb-8">
              <Shield className="h-16 w-16 text-accent" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Protect Your Business and Prove Compliance?
            </h2>
            
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Let's secure your NDPA compliance with our certified experts. The earlier you act, 
              the safer your organization becomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                👉 Book Free NDPA Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 h-auto"
              >
                <FileText className="mr-2 h-5 w-5" />
                Request Proposal Document →
              </Button>
            </div>
            
            <div className="text-sm text-primary-foreground/80">
              <p>Free 30-minute consultation • No obligation • Expert guidance</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}