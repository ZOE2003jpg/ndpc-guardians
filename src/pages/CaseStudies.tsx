import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Landmark, Users, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    icon: Building2,
    title: "Healthcare Provider Transformation",
    client: "Major Nigerian Healthcare Group",
    sector: "Healthcare",
    challenge: "Complex multi-location data processing with patient records across 15 facilities requiring NDPA compliance within 6 months.",
    solution: "Comprehensive NDPA compliance program including staff training, policy development, and technology implementation.",
    results: [
      "100% NDPA compliance achieved 3 months ahead of deadline",
      "65% improvement in data handling processes",
      "Zero audit findings during NDPC inspection",
      "₦25M in potential penalties avoided"
    ],
    timeline: "6 months",
    featured: true
  },
  {
    icon: Landmark,
    title: "Financial Services Compliance Success",
    client: "Leading Nigerian Bank",
    sector: "Financial Services", 
    challenge: "Legacy systems processing millions of customer records needed NDPA alignment without business disruption.",
    solution: "Phased compliance approach with system modernization, staff training, and ongoing monitoring implementation.",
    results: [
      "Seamless compliance transition with zero downtime",
      "₦50M in potential penalties avoided",
      "40% reduction in data processing time",
      "Enhanced customer trust and satisfaction"
    ],
    timeline: "8 months",
    featured: true
  },
  {
    icon: Users,
    title: "SME Rapid Compliance Implementation",
    client: "Growing E-commerce Platform",
    sector: "Technology/E-commerce",
    challenge: "Fast-growing startup needed quick NDPA compliance to maintain business growth and investor confidence.",
    solution: "Streamlined compliance package with automated tools, focused training, and continuous support.",
    results: [
      "Complete compliance achieved in 6 weeks",
      "50% reduction in compliance management time",
      "Successful Series B funding secured",
      "Scalable compliance framework established"
    ],
    timeline: "6 weeks",
    featured: true
  },
  {
    icon: Building2,
    title: "Manufacturing Giant Compliance Overhaul",
    client: "Multinational Manufacturing Company",
    sector: "Manufacturing",
    challenge: "International company with Nigerian operations needed to align global data practices with NDPA requirements.",
    solution: "Customized compliance framework integrating international standards with NDPA requirements.",
    results: [
      "Harmonized global and local compliance standards",
      "30% improvement in data governance",
      "Successful international audit completion",
      "Enhanced operational efficiency"
    ],
    timeline: "12 months",
    featured: false
  },
  {
    icon: Users,
    title: "Educational Institution Data Protection",
    client: "Leading Nigerian University",
    sector: "Education",
    challenge: "University with 50,000+ students needed comprehensive NDPA compliance for academic and administrative data.",
    solution: "Campus-wide compliance program with specialized training for faculty and staff.",
    results: [
      "Full institutional compliance achieved",
      "Enhanced student data security",
      "Improved administrative processes",
      "Model compliance program for other institutions"
    ],
    timeline: "10 months", 
    featured: false
  },
  {
    icon: Landmark,
    title: "Government Agency Compliance",
    client: "Federal Government Agency",
    sector: "Government",
    challenge: "Large government agency needed NDPA compliance while maintaining citizen service delivery.",
    solution: "Public sector-specific compliance approach with citizen privacy protection focus.",
    results: [
      "Successful government compliance implementation",
      "Enhanced citizen trust and transparency",
      "Improved inter-agency data sharing protocols",
      "Model for other government entities"
    ],
    timeline: "14 months",
    featured: false
  }
];

const sectors = ["All", "Healthcare", "Financial Services", "Technology/E-commerce", "Manufacturing", "Education", "Government"];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                NDPA Compliance Success Stories
              </h1>
              <p className="text-xl text-navy-100 mb-8">
                Discover how organizations across Nigeria have achieved NDPA compliance 
                and transformed their data protection practices with our expert guidance.
              </p>
              <Button size="lg" className="bg-white text-navy">
                Schedule Your Success Story
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real results from real organizations who trusted us with their NDPA compliance journey.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.filter(study => study.featured).map((study, index) => (
                <Card key={index} className="group">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-trust/10 rounded-lg">
                        <study.icon className="h-6 w-6 text-trust" />
                      </div>
                      <div>
                        <Badge variant="outline">{study.sector}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-trust transition-colors">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {study.client}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Challenge:</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm text-muted-foreground">
                          Timeline: {study.timeline}
                        </span>
                        <Button variant="outline" size="sm">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sector Filter & All Case Studies */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">All Case Studies</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {sectors.map((sector) => (
                  <Button 
                    key={sector}
                    variant={sector === "All" ? "default" : "outline"}
                    size="sm"
                  >
                    {sector}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-trust/10 rounded-lg">
                        <study.icon className="h-6 w-6 text-trust" />
                      </div>
                      <div>
                        <Badge variant="outline">{study.sector}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{study.title}</CardTitle>
                    <CardDescription>{study.client}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Results:</h4>
                        <ul className="space-y-1">
                          {study.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t">
                        <span className="text-sm text-muted-foreground">
                          {study.timeline}
                        </span>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Results Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Our Track Record Speaks
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Consistent results across industries and organization sizes.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-trust mb-2">100%</div>
                <div className="text-muted-foreground">Audit Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-trust mb-2">₦200M+</div>
                <div className="text-muted-foreground">Penalties Avoided</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-trust mb-2">50+</div>
                <div className="text-muted-foreground">Organizations Helped</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-trust mb-2">65%</div>
                <div className="text-muted-foreground">Avg. Process Improvement</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
              Join the growing list of organizations that have achieved NDPA compliance 
              with confidence and peace of mind.
            </p>
            <Button size="lg" className="bg-white text-navy">
              Start Your Success Story
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;