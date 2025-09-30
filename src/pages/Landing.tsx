import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Users, Award, Phone, Download, ArrowRight, Sparkles, TrendingUp, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import dalinksLogo from "@/assets/dalinks-logo.png";
import landingHero from "@/assets/landing-hero.jpg";
import landingPattern from "@/assets/landing-pattern.jpg";

export default function Landing() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Premium Header with Glassmorphism */}
      <header className="fixed top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                <img 
                  src={dalinksLogo} 
                  alt="DALINK'S NIGERIA LTD Logo" 
                  className="h-14 w-14 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </Link>
            <Link to="/home">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Go to Full Website 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section with Premium Design */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <img 
              src={landingHero} 
              alt="Professional Business" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-accent/85" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-trust/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}} />
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s'}} />
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{animationDelay: '1.5s'}} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`max-w-5xl mx-auto text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">Nigeria's #1 NDPA Compliance Partner</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                Your NDPA 2023 Compliance <br />
                <span className="bg-gradient-to-r from-accent via-trust to-accent bg-clip-text text-transparent animate-fade-in">
                  Starts Here
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
                Certified experts helping Nigerian businesses stay NDPA-compliant, 
                <span className="font-semibold"> avoid penalties</span>, and build 
                <span className="font-semibold"> digital trust</span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <Link to="/resources/assessment" className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-7 h-auto shadow-2xl bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-all duration-300 group"
                  >
                    <Phone className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    👉 Get Free Compliance Assessment
                  </Button>
                </Link>
                <Link to="/resources/checklist" className="animate-fade-in" style={{animationDelay: '0.4s'}}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-10 py-7 h-auto border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 group"
                  >
                    <Download className="mr-2 h-6 w-6 group-hover:translate-y-1 transition-transform" />
                    📄 Download NDPA Checklist
                  </Button>
                </Link>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto pt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">120+</div>
                  <div className="text-sm text-white/80">Organizations</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">4,800+</div>
                  <div className="text-sm text-white/80">Trained Staff</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">100%</div>
                  <div className="text-sm text-white/80">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white rounded-full" />
            </div>
          </div>
        </section>

        {/* Authority Block with Premium Cards */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative">
          <div className="absolute inset-0 opacity-5">
            <img src={landingPattern} alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Why Trust Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Industry-Leading <span className="text-primary">Credentials</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-card border-2 border-primary/10 rounded-3xl p-8 hover:border-primary/30 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                  <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">NDPC-Certified Experts</h3>
                  <p className="text-muted-foreground leading-relaxed">Licensed professionals with deep expertise in Nigerian data protection laws</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-trust rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-card border-2 border-accent/10 rounded-3xl p-8 hover:border-accent/30 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                  <div className="bg-gradient-to-br from-accent to-trust p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">120+ Organizations</h3>
                  <p className="text-muted-foreground leading-relaxed">Proven track record helping businesses achieve full NDPA compliance</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-trust to-primary rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-card border-2 border-trust/10 rounded-3xl p-8 hover:border-trust/30 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                  <div className="bg-gradient-to-br from-trust to-primary p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3">4,800+ Employees Trained</h3>
                  <p className="text-muted-foreground leading-relaxed">Comprehensive training programs ensuring organization-wide compliance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do - Premium Grid */}
        <section className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-6 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
                  Our Services
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Comprehensive NDPA Solutions, <br />
                  <span className="bg-gradient-to-r from-primary via-accent to-trust bg-clip-text text-transparent">
                    Made Simple
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  End-to-end compliance services tailored to your business needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Users,
                    title: "Training & Awareness",
                    desc: "Expert-led programs to ensure your team understands NDPA requirements.",
                    color: "from-primary to-accent"
                  },
                  {
                    icon: Shield,
                    title: "Audits & DPIAs",
                    desc: "Thorough assessments to identify and mitigate data protection risks.",
                    color: "from-accent to-trust"
                  },
                  {
                    icon: CheckCircle2,
                    title: "Data Controller Registration",
                    desc: "Seamless registration process with NDPC to ensure legal compliance.",
                    color: "from-trust to-primary"
                  },
                  {
                    icon: TrendingUp,
                    title: "Ongoing Compliance Monitoring",
                    desc: "Continuous support to maintain compliance and adapt to changes.",
                    color: "from-primary to-trust"
                  }
                ].map((service, idx) => (
                  <div key={idx} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity`} />
                    <div className="relative bg-card border-2 border-muted hover:border-primary/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className={`bg-gradient-to-r ${service.color} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{service.desc}</p>
                      <Link to="/home#services" className="inline-flex items-center text-primary font-semibold hover:gap-3 transition-all group">
                        Learn More 
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-trust/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-6 py-2 rounded-full bg-trust/10 text-trust font-semibold text-sm mb-4">
                  The DALINK'S Advantage
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Why Choose <span className="text-primary">DALINK'S NIGERIA LTD</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: Lock, title: "Focused on NDPA 2023", desc: "Not generic compliance—specialized in Nigerian data protection law." },
                  { icon: Sparkles, title: "Practical Implementation", desc: "Beyond advisory—we help you implement real solutions." },
                  { icon: CheckCircle2, title: "End-to-End Coverage", desc: "From training to monitoring—complete compliance lifecycle." },
                  { icon: TrendingUp, title: "Proven Outcomes", desc: "Measurable compliance results you can trust." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-2xl group-hover:scale-110 transition-transform shadow-lg">
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                  Client Success Stories
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Trusted by <span className="text-primary">Businesses Nationwide</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative bg-card border-2 border-primary/10 rounded-3xl p-10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-5 h-5 text-accent">⭐</div>
                      ))}
                    </div>
                    <p className="text-lg italic mb-6 leading-relaxed">
                      "We achieved NDPA compliance months ahead of deadline. Their expertise and guidance were invaluable."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent" />
                      <div>
                        <p className="font-semibold">COO</p>
                        <p className="text-sm text-muted-foreground">Healthcare Firm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-trust rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative bg-card border-2 border-accent/10 rounded-3xl p-10 hover:border-accent/30 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-5 h-5 text-accent">⭐</div>
                      ))}
                    </div>
                    <p className="text-lg italic mb-6 leading-relaxed">
                      "The checklist gave us clarity, their process gave us results. Highly recommend for any Nigerian business."
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent to-trust" />
                      <div>
                        <p className="font-semibold">DPO</p>
                        <p className="text-sm text-muted-foreground">Fintech Company</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Premium */}
        <section className="py-32 bg-gradient-to-br from-primary via-accent to-primary relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-glow" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}} />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 text-white">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-4">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">Limited Time Offer</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Book Your Free NDPA <br />Consultation Today
              </h2>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Act early, reduce risks, and stay on the right side of regulators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                <Link to="/resources/assessment">
                  <Button 
                    size="lg" 
                    className="text-xl px-12 py-8 h-auto shadow-2xl bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-all duration-300 group"
                  >
                    <Phone className="mr-3 h-7 w-7 group-hover:rotate-12 transition-transform" />
                    👉 Start My Compliance Assessment Now
                  </Button>
                </Link>
              </div>

              <Link 
                to="/home" 
                className="inline-flex items-center text-white hover:text-white/80 text-lg font-semibold mt-8 group"
              >
                Continue to Full Website 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="py-12 border-t border-border/50 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy-policy" className="hover:text-foreground transition-colors font-medium">Privacy Policy</Link>
              <span className="text-border">|</span>
              <Link to="/terms" className="hover:text-foreground transition-colors font-medium">Cookie Policy</Link>
              <span className="text-border">|</span>
              <Link to="/contact" className="hover:text-foreground transition-colors font-medium">Contact</Link>
            </div>
            <div className="text-center md:text-right">
              <p className="font-medium">Hotline: +234 XXX XXX XXXX | Email: info@dalinks.ng</p>
              <p className="text-xs mt-2">© 2025 DALINK'S NIGERIA LTD. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Premium Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-card/95 backdrop-blur-xl border-2 border-primary/20 rounded-2xl shadow-2xl p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Lock className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    🔒 We care about your privacy. This site uses cookies to improve your browsing and keep your information secure. 
                    Read our <Link to="/privacy-policy" className="text-primary hover:underline font-semibold">Privacy Policy</Link> and <Link to="/terms" className="text-primary hover:underline font-semibold">Cookie Policy</Link>.
                  </p>
                </div>
                <Button 
                  onClick={() => setShowCookieBanner(false)}
                  className="bg-primary hover:bg-primary/90 shadow-lg"
                >
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
