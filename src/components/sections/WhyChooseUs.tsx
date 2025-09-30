import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Award, TrendingUp, Layers } from "lucide-react";

const features = [
  {
    title: "Laser‑Focused NDPA Specialization",
    description: "We don't just \"do\" data compliance. We live and breathe NDPA 2023, giving you unmatched expertise.",
    icon: Target,
    color: "text-primary"
  },
  {
    title: "Certified & Accredited Experts",
    description: "Our NDPC‑certified consultants and accredited partners guarantee world‑class, regulator‑approved guidance.",
    icon: Award,
    color: "text-accent"
  },
  {
    title: "Proven Outcomes",
    description: "Registered 120+ organizations, trained 4,800+ employees, and implemented compliance systems for 70+ companies.",
    icon: TrendingUp,
    color: "text-trust"
  },
  {
    title: "End‑to‑End Coverage",
    description: "From training your first employee to implementing compliance technology, we deliver the full cycle.",
    icon: Layers,
    color: "text-primary"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Makes Us the Authority in NDPA Compliance?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven expertise, certified professionals, and measurable results for Nigerian businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4">
                  <feature.icon className={`h-12 w-12 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8 text-center">
              <blockquote className="text-lg italic text-foreground mb-4">
                "Thanks to [Your Firm], we achieved NDPA compliance three months ahead of deadline with zero audit issues."
              </blockquote>
              <cite className="text-sm text-muted-foreground font-medium">
                — CISO, Nigerian Fintech
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}