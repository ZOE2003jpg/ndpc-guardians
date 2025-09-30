import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Users, Award, Phone, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import dalinksLogo from "@/assets/dalinks-logo.png";

export default function Landing() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={dalinksLogo} 
                alt="DALINK'S NIGERIA LTD Logo" 
                className="h-12 w-12 object-contain"
              />
            </Link>
            <Link to="/home">
              <Button variant="outline" size="sm">
                Go to Full Website <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your NDPA 2023 Compliance <br />
                <span className="text-primary">Starts Here</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Certified experts helping Nigerian businesses stay NDPA-compliant, 
                avoid penalties, and build digital trust.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/resources/assessment">
                  <Button size="lg" className="text-lg px-8 py-6 h-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    👉 Get Free Compliance Assessment
                  </Button>
                </Link>
                <Link to="/resources/checklist">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                    <Download className="mr-2 h-5 w-5" />
                    📄 Download NDPA Checklist
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Authority Block */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-3">
                <Award className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-bold text-lg">NDPC-Certified Experts</h3>
                <p className="text-sm text-muted-foreground">Licensed professionals</p>
              </div>
              <div className="text-center space-y-3">
                <Shield className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-bold text-lg">120+ Organizations Registered</h3>
                <p className="text-sm text-muted-foreground">Proven track record</p>
              </div>
              <div className="text-center space-y-3">
                <Users className="h-12 w-12 text-primary mx-auto" />
                <h3 className="font-bold text-lg">4,800+ Employees Trained</h3>
                <p className="text-sm text-muted-foreground">Comprehensive coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Comprehensive NDPA Solutions, <span className="text-primary">Made Simple</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-xl mb-3">Training & Awareness</h3>
                  <p className="text-muted-foreground mb-4">
                    Expert-led programs to ensure your team understands NDPA requirements.
                  </p>
                  <Link to="/home#services" className="text-primary hover:underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-xl mb-3">Audits & DPIAs</h3>
                  <p className="text-muted-foreground mb-4">
                    Thorough assessments to identify and mitigate data protection risks.
                  </p>
                  <Link to="/home#services" className="text-primary hover:underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-xl mb-3">Data Controller Registration</h3>
                  <p className="text-muted-foreground mb-4">
                    Seamless registration process with NDPC to ensure legal compliance.
                  </p>
                  <Link to="/home#services" className="text-primary hover:underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>

                <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="font-bold text-xl mb-3">Ongoing Compliance Monitoring</h3>
                  <p className="text-muted-foreground mb-4">
                    Continuous support to maintain compliance and adapt to changes.
                  </p>
                  <Link to="/home#services" className="text-primary hover:underline inline-flex items-center">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Choose <span className="text-primary">DALINK'S NIGERIA LTD</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Focused on NDPA 2023</h3>
                    <p className="text-muted-foreground">Not generic compliance—specialized in Nigerian data protection law.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Practical Implementation</h3>
                    <p className="text-muted-foreground">Beyond advisory—we help you implement real solutions.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">End-to-End Coverage</h3>
                    <p className="text-muted-foreground">From training to monitoring—complete compliance lifecycle.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Proven Outcomes</h3>
                    <p className="text-muted-foreground">Measurable compliance results you can trust.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Trusted by <span className="text-primary">Businesses Nationwide</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="p-8 border rounded-lg bg-card shadow-sm">
                  <p className="text-lg italic mb-4">
                    "We achieved NDPA compliance months ahead of deadline."
                  </p>
                  <p className="font-semibold">— COO, Healthcare Firm</p>
                </div>

                <div className="p-8 border rounded-lg bg-card shadow-sm">
                  <p className="text-lg italic mb-4">
                    "The checklist gave us clarity, their process gave us results."
                  </p>
                  <p className="font-semibold">— DPO, Fintech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Book Your Free NDPA <br />Consultation Today
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Act early, reduce risks, and stay on the right side of regulators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/resources/assessment">
                  <Button size="lg" className="text-lg px-10 py-7 h-auto shadow-lg">
                    <Phone className="mr-2 h-5 w-5" />
                    👉 Start My Compliance Assessment Now
                  </Button>
                </Link>
              </div>

              <Link to="/home" className="block text-primary hover:underline text-lg">
                Continue to Full Website →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-foreground">Cookie Policy</Link>
              <span>|</span>
              <Link to="/contact" className="hover:text-foreground">Contact</Link>
            </div>
            <div className="text-center md:text-right">
              <p>Hotline: +234 XXX XXX XXXX | Email: info@dalinks.ng</p>
              <p className="text-xs mt-1">© 2025 DALINK'S NIGERIA LTD. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t shadow-lg p-4">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground flex-1">
                🔒 We care about your privacy. This site uses cookies to improve your browsing and keep your information secure. 
                Read our <Link to="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link> and <Link to="/terms" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>
              <div className="flex gap-2">
                <Button onClick={() => setShowCookieBanner(false)}>
                  Accept & Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
