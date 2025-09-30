import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h1 className="text-4xl font-bold text-navy mb-8">Terms & Conditions</h1>
              <p className="text-muted-foreground mb-8">Last updated: March 2024</p>
              
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              
              <h2>2. Services Description</h2>
              <p>We provide NDPA compliance consulting, training, and related professional services to organizations in Nigeria.</p>
              
              <h2>3. Professional Advice Disclaimer</h2>
              <p>Our services are provided for informational purposes. While we strive for accuracy, you should consult with qualified legal professionals for specific legal advice.</p>
              
              <h2>4. Limitation of Liability</h2>
              <p>Our liability is limited to the extent permitted by law. We shall not be liable for any indirect, incidental, or consequential damages.</p>
              
              <h2>5. Intellectual Property</h2>
              <p>All content, materials, and intellectual property remain our property unless otherwise specified.</p>
              
              <h2>6. Contact Information</h2>
              <p>Questions about these Terms should be directed to legal@ndpacompliance.ng</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;