import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, ArrowRight } from "lucide-react";

const insights = [
  {
    title: "NDPA Compliance Deadlines You Can't Miss in 2024",
    excerpt: "Stay ahead of critical NDPA deadlines with our comprehensive timeline and compliance checklist for 2024.",
    category: "Compliance",
    date: "March 15, 2024",
    readTime: "8 min read",
    author: "Dr. Adebayo Ogundimu",
    featured: true
  },
  {
    title: "Top 5 Mistakes Nigerian SMEs Make Under NDPA",
    excerpt: "Learn from common pitfalls and ensure your SME avoids costly compliance mistakes.",
    category: "SME Guide",
    date: "March 10, 2024", 
    readTime: "6 min read",
    author: "Kemi Adeyemi",
    featured: true
  },
  {
    title: "How to Prepare for an NDPC Audit: A Compliance Checklist",
    excerpt: "Essential preparation steps to ensure your organization is ready for an NDPC compliance audit.",
    category: "Audit Prep",
    date: "March 5, 2024",
    readTime: "12 min read", 
    author: "Chukwudi Okwu",
    featured: true
  },
  {
    title: "Data Subject Rights Under NDPA: What Organizations Must Know",
    excerpt: "Complete guide to implementing and managing data subject rights requests under the NDPA.",
    category: "Legal Guide",
    date: "February 28, 2024",
    readTime: "10 min read",
    author: "Dr. Adebayo Ogundimu",
    featured: false
  },
  {
    title: "International Data Transfers: NDPA Requirements Explained",
    excerpt: "Navigate the complexities of cross-border data transfers under Nigerian data protection law.",
    category: "International",
    date: "February 20, 2024",
    readTime: "9 min read",
    author: "Kemi Adeyemi", 
    featured: false
  },
  {
    title: "Privacy by Design: Implementing NDPA Principles in Tech",
    excerpt: "Practical guide for technology companies to embed privacy principles into product development.",
    category: "Technology",
    date: "February 15, 2024",
    readTime: "7 min read",
    author: "Chukwudi Okwu",
    featured: false
  }
];

const categories = ["All", "Compliance", "SME Guide", "Audit Prep", "Legal Guide", "International", "Technology"];

const Insights = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                NDPA Insights & Expert Analysis
              </h1>
              <p className="text-xl text-navy-100 mb-8">
                Stay informed with the latest updates, expert insights, and practical guidance 
                on Nigeria Data Protection Act compliance from our certified consultants.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search insights..." 
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

        {/* Featured Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
              Featured Insights
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {insights.filter(post => post.featured).map((post, index) => (
                <Card key={index} className="group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-trust transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter & All Posts */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">All Insights</h2>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <Button 
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {insights.map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with NDPA Insights
            </h2>
            <p className="text-xl text-navy-100 mb-8 max-w-2xl mx-auto">
              Get the latest compliance updates, expert analysis, and practical guidance 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white text-navy"
              />
              <Button className="bg-white text-navy">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Insights;