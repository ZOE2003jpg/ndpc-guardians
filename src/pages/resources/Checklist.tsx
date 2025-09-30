import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle2, AlertCircle, Clock } from "lucide-react";

const checklistSections = [
  {
    title: "Data Mapping & Inventory",
    priority: "High",
    items: [
      { task: "Identify all personal data collected", completed: false },
      { task: "Document data processing purposes", completed: false },
      { task: "Map data flows within organization", completed: false },
      { task: "Identify third-party data sharing", completed: false },
      { task: "Create data retention schedules", completed: false }
    ]
  },
  {
    title: "Legal Basis Assessment",
    priority: "High", 
    items: [
      { task: "Determine legal basis for each processing activity", completed: false },
      { task: "Review consent mechanisms", completed: false },
      { task: "Assess legitimate interests", completed: false },
      { task: "Document legal basis decisions", completed: false }
    ]
  },
  {
    title: "Privacy Policies & Notices",
    priority: "High",
    items: [
      { task: "Update privacy policy for NDPA compliance", completed: false },
      { task: "Create layered privacy notices", completed: false },
      { task: "Implement clear consent forms", completed: false },
      { task: "Translate notices to local languages", completed: false }
    ]
  },
  {
    title: "Data Subject Rights",
    priority: "Medium",
    items: [
      { task: "Establish data subject request procedures", completed: false },
      { task: "Create request forms and portals", completed: false },
      { task: "Train staff on rights fulfillment", completed: false },
      { task: "Set up response time tracking", completed: false }
    ]
  },
  {
    title: "Security Measures",
    priority: "High",
    items: [
      { task: "Conduct security risk assessment", completed: false },
      { task: "Implement access controls", completed: false },
      { task: "Set up data encryption", completed: false },
      { task: "Create incident response plan", completed: false },
      { task: "Regular security testing", completed: false }
    ]
  },
  {
    title: "NDPC Registration",
    priority: "Critical",
    items: [
      { task: "Prepare registration documentation", completed: false },
      { task: "Submit Data Controller registration", completed: false },
      { task: "Submit Data Processor registration (if applicable)", completed: false },
      { task: "Pay registration fees", completed: false }
    ]
  },
  {
    title: "Staff Training",
    priority: "Medium",
    items: [
      { task: "Develop NDPA training materials", completed: false },
      { task: "Conduct general staff training", completed: false },
      { task: "Specialized training for IT staff", completed: false },
      { task: "Train customer service on data requests", completed: false }
    ]
  },
  {
    title: "Documentation & Records",
    priority: "Medium",
    items: [
      { task: "Create Record of Processing Activities", completed: false },
      { task: "Document Data Protection Impact Assessments", completed: false },
      { task: "Maintain consent records", completed: false },
      { task: "Keep training records", completed: false }
    ]
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "Critical": return "destructive";
    case "High": return "default";
    case "Medium": return "secondary";
    default: return "outline";
  }
};

const Checklist = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                NDPA Compliance Checklist
              </h1>
              <p className="text-xl text-navy-100 mb-8">
                Interactive checklist to guide your organization through every step 
                of NDPA compliance. Track your progress and ensure nothing is missed.
              </p>
              <Button size="lg" className="bg-white text-navy">
                <Download className="mr-2 h-5 w-5" />
                Download PDF Checklist
              </Button>
            </div>
          </div>
        </section>

        {/* Progress Overview */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success" />
                    Your Compliance Progress
                  </CardTitle>
                  <CardDescription>
                    Track your progress through the NDPA compliance checklist
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm text-muted-foreground">0/34 items completed</span>
                    </div>
                    <Progress value={0} className="h-2" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-destructive">4</div>
                        <div className="text-sm text-muted-foreground">Critical</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">15</div>
                        <div className="text-sm text-muted-foreground">High Priority</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-secondary">15</div>
                        <div className="text-sm text-muted-foreground">Medium Priority</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-success">0</div>
                        <div className="text-sm text-muted-foreground">Completed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Checklist Sections */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-navy mb-4">
                  Complete NDPA Compliance Checklist
                </h2>
                <p className="text-xl text-muted-foreground">
                  Follow this comprehensive checklist to ensure full NDPA compliance
                </p>
              </div>

              <div className="space-y-8">
                {checklistSections.map((section, sectionIndex) => (
                  <Card key={sectionIndex}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center gap-3">
                          <div className="text-lg">{section.title}</div>
                          <Badge variant={getPriorityColor(section.priority) as any}>
                            {section.priority}
                          </Badge>
                        </CardTitle>
                        <div className="text-sm text-muted-foreground">
                          0/{section.items.length} completed
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center space-x-3 p-3 rounded-lg border">
                            <Checkbox id={`${sectionIndex}-${itemIndex}`} />
                            <label 
                              htmlFor={`${sectionIndex}-${itemIndex}`}
                              className="flex-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {item.task}
                            </label>
                            <div className="flex items-center gap-2">
                              {section.priority === "Critical" && (
                                <AlertCircle className="h-4 w-4 text-destructive" />
                              )}
                              {section.priority === "High" && (
                                <Clock className="h-4 w-4 text-primary" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Action Items */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="h-5 w-5" />
                      Download Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      PDF Checklist
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      Excel Template
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="mr-2 h-4 w-4" />
                      NDPA Quick Guide
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need Expert Help?</CardTitle>
                    <CardDescription>
                      Our certified consultants can guide you through the compliance process
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full">
                      Schedule Free Assessment
                    </Button>
                    <Button variant="outline" className="w-full">
                      Book Consultation Call
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Get personalized guidance on your compliance journey
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Checklist;