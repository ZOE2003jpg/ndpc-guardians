import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold">NDPC Compliance</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Nigeria's leading NDPA compliance consultancy, delivering certified solutions 
              for data protection and regulatory adherence.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+234 800 NDPA HELP</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@ndpacompliance.ng</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Lagos • Abuja • Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="transition-colors">Home</a></li>
              <li><a href="/services" className="transition-colors">Services</a></li>
              <li><a href="/ndpa" className="transition-colors">NDPA Guide</a></li>
              <li><a href="/insights" className="transition-colors">Insights</a></li>
              <li><a href="/case-studies" className="transition-colors">Case Studies</a></li>
              <li><a href="/about" className="transition-colors">About</a></li>
              <li><a href="/contact" className="transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/resources/checklist" className="transition-colors">NDPA Checklist</a></li>
              <li><a href="/resources/whitepapers" className="transition-colors">Whitepapers</a></li>
              <li><a href="/resources/webinars" className="transition-colors">Webinars</a></li>
              <li><a href="/resources/faqs" className="transition-colors">FAQs</a></li>
              <li><a href="/resources/assessment" className="transition-colors">Self-Assessment Tool</a></li>
              <li><a href="/resources/templates" className="transition-colors">Compliance Templates</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Stay Ahead of NDPA Updates</h3>
            <p className="text-sm text-primary-foreground/80">
              Subscribe for weekly compliance insights and regulatory updates
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button 
                size="sm" 
                className="w-full bg-accent text-accent-foreground"
              >
                Subscribe Today
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/privacy-policy" className="transition-colors">Privacy Policy</a>
              <a href="/cookie-policy" className="transition-colors">Cookie Policy</a>
              <a href="/terms" className="transition-colors">Terms & Conditions</a>
              <a href="/legal" className="transition-colors">Legal Notice</a>
            </div>
            <div className="text-sm text-primary-foreground/80">
              © 2024 NDPC Compliance. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}