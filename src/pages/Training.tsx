import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, CheckCircle2, Star, BookOpen, Video, FileText } from "lucide-react";

const trainingPrograms = [
  {
    title: "NDPA Fundamentals for All Staff",
    level: "Beginner",
    duration: "2 hours",
    format: "Interactive Workshop",
    participants: "All Employees",
    description: "Essential NDPA knowledge every employee needs to know about data protection, privacy rights, and organizational responsibilities.",
    modules: [
      "Introduction to NDPA 2023",
      "Personal Data Identification", 
      "Basic Security Practices",
      "Incident Reporting Procedures"
    ],
    price: "₦50,000",
    popular: false
  },
  {
    title: "NDPA Compliance for Managers",
    level: "Intermediate",
    duration: "4 hours", 
    format: "Comprehensive Training",
    participants: "Middle & Senior Management",
    description: "In-depth training for managers on implementing NDPA compliance, managing data protection responsibilities, and ensuring team compliance.",
    modules: [
      "Managerial Responsibilities under NDPA",
      "Data Protection Impact Assessments",
      "Breach Response & Management",
      "Compliance Monitoring & Reporting"
    ],
    price: "₦150,000",
    popular: true
  },
  {
    title: "Technical NDPA Implementation", 
    level: "Advanced",
    duration: "6 hours",
    format: "Technical Workshop",
    participants: "IT & Security Teams",
    description: "Technical deep-dive for IT professionals on implementing NDPA compliance through technology solutions, security measures, and data architecture.",
    modules: [
      "Technical Security Requirements",
      "Data Architecture & Protection",
      "Privacy by Design Implementation",
      "Compliance Technology Solutions"
    ],
    price: "₦250,000",
    popular: false
  },
  {
    title: "NDPA for Customer Service Teams",
    level: "Beginner",
    duration: "3 hours",
    format: "Role-Specific Training", 
    participants: "Customer-Facing Staff",
    description: "Specialized training for customer service teams on handling data subject requests, privacy inquiries, and maintaining compliance in customer interactions.",
    modules: [
      "Data Subject Rights Handling",
      "Privacy Inquiry Responses",
      "Consent Management",
      "Customer Data Protection"
    ],
    price: "₦75,000",
    popular: false
  },
  {
    title: "Executive NDPA Strategy Session",
    level: "Executive",
    duration: "3 hours",
    format: "Strategic Workshop",
    participants: "C-Suite & Board Members", 
    description: "High-level strategic session for executives on NDPA implications, governance, risk management, and compliance strategy.",
    modules: [
      "NDPA Strategic Implications",
      "Governance & Oversight",
      "Risk Management Framework",
      "Compliance Investment Strategy"
    ],
    price: "₦500,000",
    popular: false
  },
  {
    title: "NDPA Train-the-Trainer Certification",
    level: "Expert",
    duration: "2 days",
    format: "Certification Program",
    participants: "Internal Trainers",
    description: "Comprehensive certification program to train internal staff to deliver NDPA training within your organization.",
    modules: [
      "Adult Learning Principles",
      "NDPA Content Mastery",
      "Training Delivery Techniques",
      "Assessment & Evaluation"
    ],
    price: "₦750,000",
    popular: true
  }
];

const testimonials = [
  {
    quote: "The training was incredibly practical and relevant to our daily operations. Our staff now feel confident handling data protection responsibilities.",
    author: "Sarah Adebayo",
    role: "HR Director",
    company: "Healthcare Group",
    rating: 5
  },
  {
    quote: "Excellent technical depth. The IT-focused training helped us implement proper security measures and compliance tools.",
    author: "Michael Chen",
    role: "IT Manager", 
    company: "Financial Services",
    rating: 5
  },
  {
    quote: "The executive session provided crucial strategic insights. We now have a clear compliance roadmap and governance framework.",
    author: "Dr. Amina Kano",
    role: "CEO",
    company: "Manufacturing Company",
    rating: 5
  }
];

const deliveryMethods = [
  {
    icon: Users,
    title: "On-site Training",
    description: "Delivered at your premises with customized content for your industry and specific needs."
  },
  {
    icon: Video,
    title: "Virtual Sessions", 
    description: "Interactive online training with live Q&A, perfect for distributed teams."
  },
  {
    icon: BookOpen,
    title: "Blended Learning",
    description: "Combination of online modules and in-person workshops for comprehensive learning."
  },
  {
    icon: FileText,
    title: "Self-Paced Modules",
    description: "Access training materials anytime with progress tracking and certification."
  }
];

const Training = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                NDPA Training & Awareness Programs
              </h1>
              <p className="text-xl text-navy-100 mb-8">
                Empower your team with comprehensive NDPA knowledge through our expert-led 
                training programs. From basic awareness to technical implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-navy">
                  View Training Schedule
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white">
                  Request Custom Training
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Comprehensive Training Portfolio
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Role-specific training programs designed to build NDPA compliance 
                competency across your entire organization.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className={`relative ${program.popular ? 'ring-2 ring-trust' : ''}`}>
                  {program.popular && (
                    <Badge className="absolute -top-2 left-4 bg-trust">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">{program.level}</Badge>
                      <div className="text-2xl font-bold text-trust">{program.price}</div>
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-trust" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-trust" />
                          <span>{program.participants}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm">
                        <BookOpen className="h-4 w-4 text-trust" />
                        <span>{program.format}</span>
                      </div>

                      <div>
                        <h4 className="font-semibold text-sm mb-2">Training Modules:</h4>
                        <ul className="space-y-1">
                          {program.modules.map((module, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span>{module}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full">
                        Book Training Session
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Methods */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Flexible Delivery Options
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the delivery method that works best for your organization and team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deliveryMethods.map((method, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-trust/10 rounded-full w-fit">
                      <method.icon className="h-8 w-8 text-trust" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{method.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real feedback from organizations who have transformed their compliance culture.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-base italic">
                      "{testimonial.quote}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
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
              Ready to Train Your Team?
            </h2>
            <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your training needs and create a customized 
              program for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-navy">
                Schedule Training Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white">
                Download Training Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Training;