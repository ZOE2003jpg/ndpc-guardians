import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight, Mail } from "lucide-react";

const insights = [
  {
    title: "NDPA Compliance Deadlines You Can't Miss in 2024",
    description: "Essential dates and milestones for maintaining continuous compliance throughout the year.",
    date: "Dec 15, 2023",
    readTime: "5 min read",
    category: "Deadlines"
  },
  {
    title: "Top 5 Mistakes Nigerian SMEs Make Under NDPA",
    description: "Common pitfalls and how to avoid costly compliance errors that affect small and medium enterprises.",
    date: "Dec 10, 2023",
    readTime: "7 min read",
    category: "SME Guide"
  },
  {
    title: "How to Prepare for an NDPC Audit: A Compliance Checklist",
    description: "Step-by-step preparation guide to ensure your organization is ready for regulatory inspection.",
    date: "Dec 5, 2023",
    readTime: "10 min read",
    category: "Audit Prep"
  }
];

export function InsightsUpdates() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Latest from Our Experts
              </h2>
              <p className="text-xl text-muted-foreground">
                Stay informed with expert insights, regulatory updates, and practical compliance guidance
              </p>
            </div>
            
            <div className="grid gap-6 mb-8">
              {insights.map((insight) => (
                <Card key={insight.title} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                        {insight.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {insight.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {insight.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {insight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed mb-4">
                      {insight.description}
                    </CardDescription>
                    <Button variant="ghost" size="sm" className="group/btn text-primary p-0">
                      Read more
                      <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
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
                📚 Access All Insights
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-accent" />
                  Stay Updated
                </CardTitle>
                <CardDescription>
                  Subscribe for the latest NDPA updates and compliance insights delivered to your inbox
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="border-accent/20 focus:border-accent"
                />
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  📩 Subscribe for NDPA Updates
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Unsubscribe anytime. Weekly updates on compliance requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Emergency Compliance Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Need immediate assistance with NDPA compliance issues?
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  📞 Emergency Hotline
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}