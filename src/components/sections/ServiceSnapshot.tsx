import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, CheckCircle, FileText, Settings, Shield, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Training & Awareness",
    description: "Equip employees with NDPA knowledge through in‑house sessions, tailored programs, and workshops.",
    icon: BookOpen,
    color: "text-primary"
  },
  {
    title: "Data Protection Training Programs",
    description: "Role‑specific training that ensures compliance across different departments.",
    icon: Users,
    color: "text-accent"
  },
  {
    title: "Audit & DPIAs",
    description: "Trusted gap analyses, risk identification, and full Data Protection Impact Assessments.",
    icon: CheckCircle,
    color: "text-trust"
  },
  {
    title: "Registration Support",
    description: "Complete facilitation with NDPC for Data Controller/Processor registration.",
    icon: FileText,
    color: "text-primary"
  },
  {
    title: "Compliance Tools Deployment",
    description: "Secure, technology‑driven compliance platforms integrated into your workflow.",
    icon: Settings,
    color: "text-accent"
  },
  {
    title: "Full NDPA Program",
    description: "From design to monitoring, our holistic compliance lifecycle service.",
    icon: Shield,
    color: "text-trust"
  }
];

export function ServiceSnapshot() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Compliance Solutions, Built for Every Stage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional NDPA compliance services designed to protect your business and ensure regulatory adherence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
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
            🔗 See All Services
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}