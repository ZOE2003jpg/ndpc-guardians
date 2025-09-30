import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CheckCircle2, AlertTriangle, Target, FileText } from "lucide-react";

const questions = [
  {
    id: 1,
    category: "Data Mapping",
    question: "Does your organization maintain a comprehensive inventory of all personal data you collect and process?",
    options: [
      { value: "yes", label: "Yes, we have a complete data inventory", score: 3 },
      { value: "partial", label: "Partially, we know some but not all", score: 2 },
      { value: "minimal", label: "Minimal awareness of data collected", score: 1 },
      { value: "no", label: "No, we don't track this", score: 0 }
    ]
  },
  {
    id: 2,
    category: "Legal Basis",
    question: "Have you identified and documented the legal basis for processing personal data under NDPA?",
    options: [
      { value: "documented", label: "Yes, fully documented for all processing", score: 3 },
      { value: "mostly", label: "Documented for most processing activities", score: 2 },
      { value: "some", label: "Documented for some activities only", score: 1 },
      { value: "none", label: "No legal basis documentation", score: 0 }
    ]
  },
  {
    id: 3,
    category: "Privacy Policies",
    question: "Are your privacy policies and notices compliant with NDPA requirements?",
    options: [
      { value: "compliant", label: "Yes, fully NDPA compliant", score: 3 },
      { value: "mostly", label: "Mostly compliant, minor updates needed", score: 2 },
      { value: "outdated", label: "Policies exist but need major updates", score: 1 },
      { value: "none", label: "No privacy policies in place", score: 0 }
    ]
  },
  {
    id: 4,
    category: "Data Subject Rights",
    question: "Do you have procedures in place to handle data subject rights requests (access, rectification, erasure)?",
    options: [
      { value: "established", label: "Yes, clear procedures and systems in place", score: 3 },
      { value: "basic", label: "Basic procedures, but could be improved", score: 2 },
      { value: "manual", label: "Manual processes, no formal procedures", score: 1 },
      { value: "none", label: "No procedures in place", score: 0 }
    ]
  },
  {
    id: 5,
    category: "Security",
    question: "What level of technical and organizational security measures have you implemented?",
    options: [
      { value: "comprehensive", label: "Comprehensive security measures in place", score: 3 },
      { value: "adequate", label: "Adequate security, some areas for improvement", score: 2 },
      { value: "basic", label: "Basic security measures only", score: 1 },
      { value: "minimal", label: "Minimal or no security measures", score: 0 }
    ]
  },
  {
    id: 6,
    category: "Registration",
    question: "Have you registered with the Nigeria Data Protection Commission (NDPC)?",
    options: [
      { value: "registered", label: "Yes, fully registered as required", score: 3 },
      { value: "process", label: "Registration in process", score: 2 },
      { value: "planning", label: "Planning to register soon", score: 1 },
      { value: "unaware", label: "Unaware of registration requirements", score: 0 }
    ]
  },
  {
    id: 7,
    category: "Training",
    question: "Have your staff been trained on NDPA requirements and data protection practices?",
    options: [
      { value: "comprehensive", label: "Comprehensive training for all relevant staff", score: 3 },
      { value: "basic", label: "Basic training provided", score: 2 },
      { value: "minimal", label: "Minimal or informal training", score: 1 },
      { value: "none", label: "No NDPA training provided", score: 0 }
    ]
  },
  {
    id: 8,
    category: "Documentation",
    question: "Do you maintain records of processing activities as required by NDPA?",
    options: [
      { value: "complete", label: "Complete and up-to-date records", score: 3 },
      { value: "partial", label: "Partial records maintained", score: 2 },
      { value: "basic", label: "Basic documentation only", score: 1 },
      { value: "none", label: "No formal records maintained", score: 0 }
    ]
  }
];

const Assessment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Free NDPA Compliance Assessment
              </h1>
              <p className="text-xl text-navy-100 mb-8">
                Evaluate your organization's current NDPA compliance status with our 
                comprehensive self-assessment tool. Get personalized recommendations in minutes.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Free Assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Expert Recommendations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Contact Information */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Provide your details to receive your personalized compliance report
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" placeholder="Enter company name" />
                    </div>
                    <div>
                      <Label htmlFor="role">Your Role</Label>
                      <Input id="role" placeholder="e.g., CEO, IT Manager, Legal" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Progress */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Assessment Progress</span>
                    <span className="text-sm text-muted-foreground">0 of {questions.length} questions</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </CardContent>
              </Card>

              {/* Assessment Questions */}
              <div className="space-y-8">
                {questions.map((q, index) => (
                  <Card key={q.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{q.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          Question {index + 1} of {questions.length}
                        </span>
                      </div>
                      <CardTitle className="text-lg leading-relaxed">
                        {q.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup>
                        {q.options.map((option, optionIndex) => (
                          <div key={optionIndex} className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-muted/50">
                            <RadioGroupItem value={option.value} id={`q${q.id}-${option.value}`} />
                            <Label 
                              htmlFor={`q${q.id}-${option.value}`}
                              className="flex-1 cursor-pointer"
                            >
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Submit */}
              <Card className="mt-8">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Button size="lg" className="mb-4">
                      <Target className="mr-2 h-5 w-5" />
                      Get My Compliance Score
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Your results will be emailed to you along with personalized recommendations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What You'll Get */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">
                  What You'll Receive
                </h2>
                <p className="text-xl text-muted-foreground">
                  Your comprehensive compliance assessment report includes:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <Target className="h-8 w-8 text-trust mb-4" />
                    <CardTitle>Compliance Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Overall compliance percentage with breakdown by category and priority areas for improvement.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <AlertTriangle className="h-8 w-8 text-trust mb-4" />
                    <CardTitle>Risk Assessment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Identification of compliance gaps and potential risks to your organization.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <FileText className="h-8 w-8 text-trust mb-4" />
                    <CardTitle>Action Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Step-by-step recommendations tailored to your organization's specific needs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Expert Guidance?
            </h2>
            <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
              After your assessment, book a free consultation with our NDPC-certified 
              experts to discuss your results and next steps.
            </p>
            <Button size="lg" className="bg-white text-navy">
              Schedule Free Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Assessment;