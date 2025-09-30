import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Shield, Scale, Users, FileText, AlertTriangle, CheckCircle2, Download } from "lucide-react";

const keyRequirements = [
  {
    icon: Shield,
    title: "Data Protection Principles",
    description: "Organizations must process personal data lawfully, fairly, and transparently."
  },
  {
    icon: Users,
    title: "Individual Rights",
    description: "Data subjects have rights to access, rectify, erase, and port their personal data."
  },
  {
    icon: FileText,
    title: "Data Controller Registration",
    description: "All data controllers must register with the Nigeria Data Protection Commission (NDPC)."
  },
  {
    icon: Scale,
    title: "Legal Basis for Processing",
    description: "Organizations must have a valid legal basis for processing personal data."
  }
];

const penalties = [
  {
    violation: "Failure to Register as Data Controller",
    penalty: "₦10 million or 2% of annual turnover",
    severity: "high"
  },
  {
    violation: "Non-compliance with Data Subject Rights",
    penalty: "₦5 million or 1% of annual turnover",
    severity: "medium"
  },
  {
    violation: "Inadequate Security Measures",
    penalty: "₦25 million or 4% of annual turnover",
    severity: "high"
  },
  {
    violation: "Data Breach Notification Failure",
    penalty: "�N15 million or 2% of annual turnover",
    severity: "high"
  }
];

const timeline = [
  {
    date: "Immediate",
    task: "Conduct Data Protection Impact Assessment",
    status: "required"
  },
  {
    date: "Within 30 days",
    task: "Register with NDPC as Data Controller/Processor",
    status: "required"
  },
  {
    date: "Within 60 days",
    task: "Implement Privacy by Design Measures",
    status: "required"
  },
  {
    date: "Within 90 days",
    task: "Complete Staff Training on NDPA Requirements",
    status: "recommended"
  }
];

const NDPA = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nigeria Data Protection Act 2023 Guide
              </h1>
              <p className="text-xl text-navy-100 mb-8">
                Comprehensive guide to understanding and complying with Nigeria's landmark 
                data protection legislation. Get the insights you need to protect your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-navy hover:bg-white/90">
                  <Download className="mr-2 h-5 w-5" />
                  Download NDPA Checklist
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                  Book Compliance Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                What is the NDPA 2023?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-6">
                  The Nigeria Data Protection Act 2023 (NDPA) is Nigeria's comprehensive data protection 
                  law that regulates how personal data is collected, processed, stored, and transferred. 
                  It applies to all organizations operating in Nigeria or processing personal data of 
                  Nigerian residents.
                </p>
                <p className="text-muted-foreground">
                  The Act establishes the Nigeria Data Protection Commission (NDPC) as the regulatory 
                  authority and introduces strict requirements for data controllers and processors, 
                  with significant penalties for non-compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Requirements */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Key NDPA Requirements
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Understanding the core obligations under the NDPA is essential for compliance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyRequirements.map((requirement, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-trust/10 rounded-full w-fit">
                      <requirement.icon className="h-8 w-8 text-trust" />
                    </div>
                    <CardTitle className="text-lg">{requirement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{requirement.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                NDPA Compliance Timeline
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Follow this timeline to ensure your organization meets all NDPA requirements.
              </p>

              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Badge 
                            variant={item.status === 'required' ? 'default' : 'secondary'}
                            className="px-3 py-1"
                          >
                            {item.date}
                          </Badge>
                          <div>
                            <h3 className="font-semibold text-lg">{item.task}</h3>
                            <p className="text-sm text-muted-foreground capitalize">
                              {item.status}
                            </p>
                          </div>
                        </div>
                        <CheckCircle2 className="h-6 w-6 text-success" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Penalties */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                NDPA Penalties & Sanctions
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12">
                Understanding the financial and operational risks of non-compliance.
              </p>

              <div className="space-y-4">
                {penalties.map((penalty, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <AlertTriangle className={`h-6 w-6 ${
                            penalty.severity === 'high' ? 'text-destructive' : 'text-yellow-500'
                          }`} />
                          <div>
                            <h3 className="font-semibold text-lg">{penalty.violation}</h3>
                            <p className="text-sm text-muted-foreground">
                              Maximum penalty: {penalty.penalty}
                            </p>
                          </div>
                        </div>
                        <Badge 
                          variant={penalty.severity === 'high' ? 'destructive' : 'secondary'}
                        >
                          {penalty.severity.toUpperCase()} RISK
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    Who needs to comply with the NDPA 2023?
                  </AccordionTrigger>
                  <AccordionContent>
                    The NDPA applies to all organizations that process personal data in Nigeria, 
                    including local businesses, multinational corporations, government agencies, 
                    and non-profit organizations. It also applies to organizations outside Nigeria 
                    that process personal data of Nigerian residents.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left">
                    What constitutes personal data under the NDPA?
                  </AccordionTrigger>
                  <AccordionContent>
                    Personal data includes any information that can directly or indirectly identify 
                    a natural person, such as names, phone numbers, email addresses, location data, 
                    biometric data, and online identifiers like IP addresses.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left">
                    How long do organizations have to register with the NDPC?
                  </AccordionTrigger>
                  <AccordionContent>
                    Organizations must register with the Nigeria Data Protection Commission (NDPC) 
                    within 30 days of commencing data processing activities or within 30 days of 
                    the Act's commencement date, whichever is later.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left">
                    What are the requirements for international data transfers?
                  </AccordionTrigger>
                  <AccordionContent>
                    International transfers of personal data are only permitted to countries with 
                    adequate data protection laws or through approved safeguards such as binding 
                    corporate rules, standard contractual clauses, or explicit consent from data subjects.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-left">
                    What should organizations do in case of a data breach?
                  </AccordionTrigger>
                  <AccordionContent>
                    Organizations must notify the NDPC within 72 hours of becoming aware of a 
                    personal data breach. If the breach poses high risks to individuals, affected 
                    data subjects must also be notified without undue delay.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Help with NDPA Compliance?
            </h2>
            <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
              Our NDPC-certified experts are ready to guide your organization through 
              every aspect of NDPA compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-navy hover:bg-white/90">
                Schedule Free Assessment
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                <Download className="mr-2 h-5 w-5" />
                Download Compliance Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NDPA;