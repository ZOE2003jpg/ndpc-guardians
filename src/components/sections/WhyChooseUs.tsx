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
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-5 text-[80px] md:text-[120px] font-bold text-navy/5 animate-pulse select-none" style={{animationDelay: '0.5s'}}>O</div>
        <div className="absolute bottom-20 right-5 text-[90px] md:text-[140px] font-bold text-navy/5 animate-pulse select-none" style={{animationDelay: '2s'}}>A</div>
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-4 md:mb-6">
            What Makes Us the Authority in NDPA Compliance?
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Proven expertise, certified professionals, and measurable results for Nigerian businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <Card className="h-full text-center shadow-lg border-2 border-transparent transform transition-all duration-300 bg-white/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-trust/10 rounded-xl">
                      <feature.icon className={`h-10 w-10 md:h-12 md:w-12 ${feature.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Card className="bg-gradient-to-r from-trust/5 to-success/5 border-trust/20 shadow-xl">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="relative">
                <div className="absolute -top-2 -left-2 text-4xl text-trust/20">"</div>
                <blockquote className="text-lg md:text-xl italic text-foreground mb-4 px-4">
                  Thanks to NDPA Guardians, we achieved NDPA compliance three months ahead of deadline with zero audit issues.
                </blockquote>
                <div className="absolute -bottom-2 -right-2 text-4xl text-trust/20">"</div>
              </div>
              <cite className="text-sm md:text-base text-muted-foreground font-medium">
                — CISO, Nigerian Fintech
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}