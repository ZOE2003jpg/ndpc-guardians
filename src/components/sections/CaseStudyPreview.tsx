import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Landmark, Users, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Healthcare Provider",
    description: "Achieved NDPA certification in record time; improved data handling processes by 65%.",
    icon: Building2,
    sector: "Healthcare",
    metrics: "65% improvement",
    color: "text-trust"
  },
  {
    title: "Financial Services Firm",
    description: "Avoided ₦50m potential penalties through early compliance gap closure.",
    icon: Landmark,
    sector: "Financial Services",
    metrics: "₦50m saved",
    color: "text-primary"
  },
  {
    title: "SME Success",
    description: "Affordable compliance monitoring solution deployed company‑wide in 6 weeks.",
    icon: Users,
    sector: "Small Business",
    metrics: "6 weeks deployment",
    color: "text-accent"
  }
];

export function CaseStudyPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Compliance Into Strategic Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real businesses across Nigeria's key sectors
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {caseStudies.map((study) => (
            <Card key={study.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <study.icon className={`h-10 w-10 ${study.color}`} />
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                    {study.sector}
                  </span>
                </div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="leading-relaxed">
                  {study.description}
                </CardDescription>
                <div className="pt-2 border-t border-border/50">
                  <p className={`text-sm font-semibold ${study.color}`}>
                    Key Result: {study.metrics}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="group hover:bg-primary hover:text-primary-foreground"
          >
            🔗 Explore All Case Studies
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}