import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, MessageCircle } from "lucide-react";

const faqCategories = [
  "General NDPA", "Registration", "Compliance", "Data Protection", "Training", "Penalties"
];

const faqs = [
  {
    id: 1,
    category: "General NDPA",
    question: "What is the Nigeria Data Protection Act (NDPA) 2023?",
    answer: "The NDPA 2023 is Nigeria's comprehensive data protection law that regulates how personal data is collected, processed, stored, and transferred by organizations operating in Nigeria or processing data of Nigerian residents."
  },
  {
    id: 2,
    category: "General NDPA",
    question: "Who needs to comply with the NDPA?",
    answer: "The NDPA applies to all data controllers and processors, including businesses, government agencies, and non-profit organizations that process personal data in Nigeria or of Nigerian residents, regardless of where they are located."
  },
  {
    id: 3,
    category: "Registration",
    question: "How do I register with the NDPC?",
    answer: "Organizations must register online through the NDPC portal by submitting required documentation, paying applicable fees, and providing details about their data processing activities. Registration must be completed within 30 days of commencing data processing."
  },
  {
    id: 4,
    category: "Registration",
    question: "What is the difference between Data Controller and Data Processor registration?",
    answer: "A Data Controller determines the purposes and means of processing personal data, while a Data Processor processes data on behalf of the Controller. Organizations may need to register as both depending on their activities."
  },
  {
    id: 5,
    category: "Compliance",
    question: "What are the key compliance requirements under NDPA?",
    answer: "Key requirements include: obtaining valid consent, implementing appropriate security measures, conducting DPIAs, maintaining processing records, respecting data subject rights, and reporting breaches within 72 hours."
  },
  {
    id: 6,
    category: "Compliance",
    question: "How long do I have to respond to data subject requests?",
    answer: "Organizations must respond to data subject requests without undue delay and within one month of receipt. This can be extended by two months for complex requests, with proper notification to the data subject."
  },
  {
    id: 7,
    category: "Data Protection",
    question: "What constitutes personal data under the NDPA?",
    answer: "Personal data includes any information that can identify a natural person directly or indirectly, such as names, addresses, phone numbers, email addresses, IP addresses, location data, and biometric information."
  },
  {
    id: 8,
    category: "Data Protection",
    question: "Can I transfer personal data outside Nigeria?",
    answer: "International data transfers are only permitted to countries with adequate protection or through appropriate safeguards like binding corporate rules, standard contractual clauses, or explicit consent."
  },
  {
    id: 9,
    category: "Training",
    question: "Do I need to train my staff on NDPA compliance?",
    answer: "Yes, organizations must ensure staff involved in data processing are adequately trained on NDPA requirements, data protection principles, and their specific responsibilities."
  },
  {
    id: 10,
    category: "Training",
    question: "How often should NDPA training be conducted?",
    answer: "Training should be conducted regularly, at least annually, and whenever there are significant changes to data processing activities, regulations, or staff roles."
  },
  {
    id: 11,
    category: "Penalties",
    question: "What are the penalties for NDPA non-compliance?",
    answer: "Penalties range from ₦10 million to ₦25 million or 2% to 4% of annual turnover, whichever is higher, depending on the severity of the violation. Additional sanctions may include suspension of operations."
  },
  {
    id: 12,
    category: "Penalties",
    question: "How can I avoid NDPA penalties?",
    answer: "Maintain compliance by: registering with NDPC, implementing proper security measures, training staff, conducting DPIAs, maintaining accurate records, and having incident response procedures in place."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-navy-100 mb-8">
                Find answers to common questions about NDPA compliance, registration, 
                and data protection requirements in Nigeria.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search FAQs..." 
                    className="pl-10 bg-white text-navy"
                  />
                </div>
                <Button className="bg-white text-navy">
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-navy mb-4">Browse by Category</h2>
              <div className="flex flex-wrap justify-center gap-2">
                <Button variant="default" size="sm">All</Button>
                {faqCategories.map((category) => (
                  <Button key={category} variant="outline" size="sm">
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq) => (
                  <Card key={faq.id}>
                    <AccordionItem value={`item-${faq.id}`} className="border-none">
                      <CardHeader className="pb-0">
                        <AccordionTrigger className="text-left">
                          <div className="flex items-start gap-3 w-full">
                            <Badge variant="outline" className="mt-1 flex-shrink-0">
                              {faq.category}
                            </Badge>
                            <span className="font-semibold">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                      </CardHeader>
                      <AccordionContent>
                        <CardContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      </AccordionContent>
                    </AccordionItem>
                  </Card>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Our experts are here to help with personalized guidance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5" />
                      Contact Our Experts
                    </CardTitle>
                    <CardDescription>
                      Get personalized answers from our NDPC-certified consultants
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full">
                      Schedule Free Consultation
                    </Button>
                    <Button variant="outline" className="w-full">
                      Send Us a Question
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <HelpCircle className="h-5 w-5" />
                      Additional Resources
                    </CardTitle>
                    <CardDescription>
                      Explore our comprehensive resource library
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      NDPA Compliance Checklist
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Self-Assessment Tool
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Training Programs
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="bg-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Urgent Compliance Help?
            </h2>
            <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
              Our emergency compliance hotline is available 24/7 for urgent 
              data protection matters and compliance crises.
            </p>
            <Button size="lg" className="bg-white text-navy">
              Call Emergency Hotline: +234 (0) 800 NDPA-HELP
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;