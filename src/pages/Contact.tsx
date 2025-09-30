import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Shield, Zap } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Emergency Compliance Hotline",
    description: "24/7 support for urgent compliance matters",
    detail: "+234 (0) 800 NDPA-HELP",
    availability: "Available 24/7"
  },
  {
    icon: Mail,
    title: "General Inquiries",
    description: "For non-urgent questions and consultations",
    detail: "info@ndpacompliance.ng",
    availability: "Response within 24 hours"
  },
  {
    icon: MapPin,
    title: "Lagos Office",
    description: "Main office and consultation center",
    detail: "Victoria Island, Lagos State",
    availability: "Mon-Fri: 8:00 AM - 6:00 PM"
  }
];

const offices = [
  {
    city: "Lagos",
    address: "Plot 1234, Ahmadu Bello Way, Victoria Island, Lagos State",
    phone: "+234 (0) 1 234 5678",
    email: "lagos@ndpacompliance.ng"
  },
  {
    city: "Abuja",
    address: "Suite 567, Central Business District, Abuja, FCT",
    phone: "+234 (0) 9 876 5432",
    email: "abuja@ndpacompliance.ng"
  },
  {
    city: "Port Harcourt",
    address: "Trans Amadi Industrial Layout, Port Harcourt, Rivers State",
    phone: "+234 (0) 84 123 456",
    email: "portharcourt@ndpacompliance.ng"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get Expert NDPA Guidance Today
              </h1>
              <p className="text-xl text-navy-100 mb-8">
                Connect with our certified consultants for personalized compliance solutions. 
                Emergency support available 24/7 for urgent compliance matters.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                How to Reach Us
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the best way to connect with our team based on your needs and urgency.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-trust/10 rounded-full w-fit">
                      <method.icon className="h-8 w-8 text-trust" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold text-navy mb-2">
                      {method.detail}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {method.availability}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h3>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Enter your last name" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email address" />
                      </div>
                      
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input id="company" placeholder="Enter your company name" />
                      </div>
                      
                      <div>
                        <Label htmlFor="inquiryType">Type of Inquiry</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">Free Consultation</SelectItem>
                            <SelectItem value="training">Training Programs</SelectItem>
                            <SelectItem value="audit">Compliance Audit</SelectItem>
                            <SelectItem value="registration">NDPC Registration</SelectItem>
                            <SelectItem value="emergency">Emergency Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Describe your compliance needs or questions..."
                          rows={4}
                        />
                      </div>
                      
                      <Button className="w-full" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Why Contact Us?</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="p-2 bg-trust/10 rounded-lg">
                      <Shield className="h-6 w-6 text-trust" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Expert Guidance</h4>
                      <p className="text-muted-foreground">
                        Get advice from NDPC-certified consultants with deep NDPA expertise.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="p-2 bg-trust/10 rounded-lg">
                      <Zap className="h-6 w-6 text-trust" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Quick Response</h4>
                      <p className="text-muted-foreground">
                        Emergency support available 24/7, general inquiries answered within 24 hours.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="p-2 bg-trust/10 rounded-lg">
                      <Clock className="h-6 w-6 text-trust" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Free Initial Consultation</h4>
                      <p className="text-muted-foreground">
                        Schedule a complimentary assessment to understand your compliance needs.
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="mt-8 bg-navy text-white">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-4">Emergency Compliance Support</h4>
                    <p className="text-navy-100 mb-4">
                      Facing an urgent compliance issue? Our emergency hotline provides 
                      immediate expert guidance when you need it most.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                      Call Emergency Hotline
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Our Office Locations
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Visit us at any of our offices across Nigeria for in-person consultations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{office.city} Office</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-trust mt-0.5" />
                        <p className="text-sm">{office.address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-trust" />
                        <p className="text-sm">{office.phone}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-trust" />
                        <p className="text-sm">{office.email}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;