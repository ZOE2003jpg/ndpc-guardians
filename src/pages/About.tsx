import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Award, Target, CheckCircle2 } from "lucide-react";

const team = [
  {
    name: "Dr. Adebayo Ogundimu",
    role: "Managing Partner & Lead Consultant",
    credentials: "CIPP, CIPM, NDPC Certified",
    experience: "15+ years in data protection and privacy law"
  },
  {
    name: "Kemi Adeyemi",
    role: "Senior Compliance Manager",
    credentials: "CIPT, ISO 27001 Lead Auditor",
    experience: "12+ years in risk management and compliance"
  },
  {
    name: "Chukwudi Okwu",
    role: "Training & Development Director",
    credentials: "Certified Privacy Trainer, MBA",
    experience: "10+ years in corporate training and development"
  }
];

const achievements = [
  { number: "120+", label: "Organizations Registered" },
  { number: "4,800+", label: "Employees Trained" },
  { number: "70+", label: "Compliance Systems Implemented" },
  { number: "100%", label: "Audit Success Rate" }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nigeria's Leading NDPA Compliance Experts
              </h1>
              <p className="text-xl text-navy-100 mb-8">
                We are Nigeria's premier data protection consultancy, dedicated to helping 
                organizations navigate the complexities of NDPA 2023 with confidence and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  To empower Nigerian organizations with the knowledge, tools, and confidence 
                  needed to achieve and maintain NDPA compliance while building customer trust 
                  through responsible data handling.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>Expert guidance tailored to Nigerian regulations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>Practical solutions that work for your business</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    <span>Ongoing support for sustainable compliance</span>
                  </div>
                </div>
              </div>
              <div className="bg-navy/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the trusted partner of choice for organizations seeking excellence 
                  in data protection, helping build a Nigeria where personal data is 
                  respected, protected, and handled with the highest standards of care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Why Organizations Trust Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our unique combination of expertise, experience, and local knowledge 
                makes us the ideal partner for your NDPA compliance journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 text-trust mx-auto mb-4" />
                  <CardTitle>NDPA Specialization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Deep expertise in Nigeria Data Protection Act 2023 with proven track record of successful implementations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Award className="h-12 w-12 text-trust mx-auto mb-4" />
                  <CardTitle>Certified Experts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    NDPC-certified consultants with international privacy certifications and local regulatory knowledge.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-trust mx-auto mb-4" />
                  <CardTitle>Proven Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    100% audit success rate with measurable improvements in compliance posture and risk reduction.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Users className="h-12 w-12 text-trust mx-auto mb-4" />
                  <CardTitle>End-to-End Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Complete lifecycle support from initial assessment through implementation to ongoing monitoring.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Numbers that demonstrate our commitment to excellence and client success.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-trust mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our team combines deep technical expertise with practical business experience 
                to deliver results that matter.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-trust font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Credentials:</p>
                      <p className="text-sm text-muted-foreground">{member.credentials}</p>
                      <p className="text-sm font-medium">Experience:</p>
                      <p className="text-sm text-muted-foreground">{member.experience}</p>
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
              Ready to Work with Nigeria's NDPA Experts?
            </h2>
            <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
              Let our experienced team guide your organization to NDPA compliance 
              with confidence and peace of mind.
            </p>
            <Button size="lg" className="bg-white text-navy hover:bg-white/90">
              Schedule a Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;