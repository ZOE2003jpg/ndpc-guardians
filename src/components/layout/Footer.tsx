import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import dalinksLogo from "@/assets/dalinks-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={dalinksLogo} 
                alt="DALINK'S NIGERIA LTD Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold">DALINK'S NIGERIA LTD</span>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Nigeria's leading NDPA compliance consultancy, delivering certified solutions 
              for data protection and regulatory adherence.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+234 905 0500 166</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>info@dalinksnigltd.ng</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Osun • Abuja • Lagos</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="transition-colors hover:text-accent">Home</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-accent">Services</Link></li>
              <li><Link to="/ndpa" className="transition-colors hover:text-accent">NDPA Guide</Link></li>
              <li><Link to="/insights" className="transition-colors hover:text-accent">Insights</Link></li>
              <li><Link to="/case-studies" className="transition-colors hover:text-accent">Case Studies</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-accent">About</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-accent">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources/checklist" className="transition-colors hover:text-accent">NDPA Checklist</Link></li>
              <li><Link to="/insights" className="transition-colors hover:text-accent">Whitepapers</Link></li>
              <li><Link to="/training" className="transition-colors hover:text-accent">Webinars</Link></li>
              <li><Link to="/resources/faqs" className="transition-colors hover:text-accent">FAQs</Link></li>
              <li><Link to="/resources/assessment" className="transition-colors hover:text-accent">Self-Assessment Tool</Link></li>
              <li><Link to="/resources/checklist" className="transition-colors hover:text-accent">Compliance Templates</Link></li>
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
              <Link to="/privacy-policy" className="transition-colors hover:text-accent">Privacy Policy</Link>
              <Link to="/privacy-policy" className="transition-colors hover:text-accent">Cookie Policy</Link>
              <Link to="/terms" className="transition-colors hover:text-accent">Terms & Conditions</Link>
              <Link to="/about" className="transition-colors hover:text-accent">Legal Notice</Link>
            </div>
            <div className="text-sm text-primary-foreground/80">
              © 2024 DALINK'S NIGERIA LTD. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}