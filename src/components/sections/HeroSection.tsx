import { Button } from "@/components/ui/button";
import { Shield, Download, CheckCircle2, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy via-navy/95 to-navy/90 text-white overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-[120px] md:text-[200px] font-bold text-white/5 animate-pulse select-none">O</div>
        <div className="absolute top-40 right-20 text-[100px] md:text-[180px] font-bold text-white/5 animate-pulse select-none" style={{animationDelay: '1s'}}>A</div>
        <div className="absolute bottom-40 left-20 text-[80px] md:text-[140px] font-bold text-white/5 animate-pulse select-none" style={{animationDelay: '2s'}}>O</div>
        <div className="absolute bottom-60 right-10 text-[90px] md:text-[160px] font-bold text-white/5 animate-pulse select-none" style={{animationDelay: '0.5s'}}>A</div>
      </div>
      
      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-trust/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-success/40 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}} />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-trust/25 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '3.5s'}} />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-success/35 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4.5s'}} />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="block">NDPA Compliance</span>
              <span className="block text-trust animate-fade-in" style={{animationDelay: '0.5s'}}>
                Experts
              </span>
              <span className="block text-sm md:text-base lg:text-lg font-normal text-navy-100 mt-2">
                Protecting Your Data, Building Trust
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-navy-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{animationDelay: '1s'}}>
              From training to audits to ongoing compliance monitoring, our certified 
              consultants deliver end‑to‑end NDPA 2023 compliance solutions tailored to your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{animationDelay: '1.5s'}}>
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto shadow-lg transform transition-transform duration-200"
              >
                <Phone className="mr-2 h-5 w-5" />
                👉 Book Free Compliance Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground text-base md:text-lg px-6 md:px-8 py-4 md:py-6 h-auto shadow-lg transform transition-transform duration-200"
              >
                <Download className="mr-2 h-5 w-5" />
                📄 Download NDPA Compliance Checklist
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm md:text-base animate-fade-in" style={{animationDelay: '2s'}}>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 md:h-5 md:w-5 text-success" />
                <span>NDPC‑Certified Consultants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-success" />
                <span>ISO‑Aligned Methodology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-success" />
                <span>120+ Organizations Served</span>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="flex-1 max-w-md lg:max-w-lg xl:max-w-xl animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-trust to-success rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <div className="text-center space-y-4 md:space-y-6">
                  <Shield className="h-16 w-16 md:h-20 md:w-20 text-trust mx-auto" />
                  <h3 className="text-xl md:text-2xl font-bold">Complete NDPA Protection</h3>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm">
                    <div className="bg-white/5 rounded-lg p-3 md:p-4">
                      <div className="font-semibold text-trust">Assessment</div>
                      <div className="text-navy-100">Free Compliance Check</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 md:p-4">
                      <div className="font-semibold text-trust">Training</div>
                      <div className="text-navy-100">Expert-Led Programs</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 md:p-4">
                      <div className="font-semibold text-trust">Audit</div>
                      <div className="text-navy-100">NDPC Registration</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 md:p-4">
                      <div className="font-semibold text-trust">Support</div>
                      <div className="text-navy-100">24/7 Guidance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}