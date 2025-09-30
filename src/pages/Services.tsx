import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, FileText, Database, Settings, Package, Code } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Training & Awareness",
    description: "Comprehensive NDPA training programs for all staff levels, from executives to front-line employees.",
    features: ["Role-specific training modules", "Interactive workshops", "Certification programs", "Ongoing awareness campaigns"],
    href: "/training"
  },
  {
    icon: FileText,
    title: "Data Protection Training Programs",
    description: "Specialized training focused on data handling, privacy rights, and protection procedures.",
    features: ["Data handling protocols", "Privacy rights education", "Incident response training", "Regular compliance updates"],
    href: "/training/data-protection"
  },
  {
    icon: Shield,
    title: "Audit & DPIAs",
    description: "Thorough compliance audits and Data Protection Impact Assessments to identify and mitigate risks.",
    features: ["Gap analysis", "Risk assessments", "DPIA facilitation", "Remediation planning"],
    href: "/audit"
  },
  {
    icon: Database,
    title: "Registration Support",
    description: "Complete assistance with NDPC Data Controller and Data Processor registration processes.",
    features: ["Application preparation", "Documentation support", "Submission facilitation", "Follow-up assistance"],
    href: "/registration"
  },
  {
    icon: Settings,
    title: "Compliance Tools Deployment",
    description: "Implementation of technology solutions to automate and streamline compliance processes.",
    features: ["Privacy management platforms", "Consent management tools", "Data mapping software", "Monitoring dashboards"],
    href: "/tools"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web solutions built with security and compliance at their core, ensuring NDPA readiness.",
    features: ["Secure web applications", "Compliance-ready platforms", "Data protection integration", "Modern responsive design"],
    href: "/web-development"
  },
  {
    icon: Package,
    title: "Full NDPA Program",
    description: "End-to-end compliance solution covering all aspects of NDPA requirements and ongoing support.",
    features: ["Complete program design", "Implementation support", "Ongoing monitoring", "Regular updates"],
    href: "/full-program"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive NDPA Compliance Services
              </h1>
              <p className="text-xl text-navy-100 mb-8">
                From initial assessment to ongoing compliance monitoring, our expert team delivers 
                tailored solutions that protect your data and build customer trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-navy hover:bg-white/90">
                  Book Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                  Download Service Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Our Service Portfolio
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose from our comprehensive range of NDPA compliance services, 
                or combine multiple services for complete protection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-trust/10 rounded-lg">
                        <service.icon className="h-6 w-6 text-trust" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="h-1.5 w-1.5 bg-trust rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Compliance Journey?
            </h2>
            <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
              Our experts are ready to assess your current compliance status and 
              recommend the right combination of services for your organization.
            </p>
            <Button size="lg" className="bg-white text-navy hover:bg-white/90">
              Schedule Free Assessment
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;