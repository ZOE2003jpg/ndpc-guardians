import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Wrench, Scale } from "lucide-react";

export function NDPASpotlight() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Nigeria Data Protection Act 2023.{" "}
              <span className="text-foreground">Your Obligation.</span>{" "}
              <span className="text-accent">Our Specialization.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              The NDPA sets clear rules for how businesses must protect and process personal data. 
              Missed deadlines and non‑compliance can result in stiff penalties, reputational damage, 
              and regulatory action.
            </p>
            
            <p className="text-base text-muted-foreground">
              Our certified experts ensure your organization meets every requirement while maintaining 
              operational efficiency and building customer trust through transparent data practices.
            </p>
          </div>
          
          <div className="space-y-4">
            <Card className="border-accent/20 bg-card/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download NDPA Checklist
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-primary/20 hover:bg-primary/5"
                  >
                    <Wrench className="mr-2 h-5 w-5" />
                    Try Free Self‑Assessment Tool
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="ghost" 
                    className="w-full hover:bg-muted/50"
                  >
                    <Scale className="mr-2 h-5 w-5" />
                    See Key Requirements & Penalties →
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="sm" variant="secondary" className="text-xs">
                Healthcare Guidance
              </Button>
              <Button size="sm" variant="secondary" className="text-xs">
                Finance Guidance
              </Button>
              <Button size="sm" variant="secondary" className="text-xs">
                SMEs & Large Enterprises
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}