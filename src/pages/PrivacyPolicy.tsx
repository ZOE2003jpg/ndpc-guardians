import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h1 className="text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
              <p className="text-muted-foreground mb-8">Last updated: March 2024</p>
              
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
              
              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
              
              <h2>3. Information Sharing</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
              
              <h2>4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
              
              <h2>5. Your Rights</h2>
              <p>Under the NDPA 2023, you have rights including access, rectification, erasure, and portability of your personal data.</p>
              
              <h2>6. Contact Information</h2>
              <p>If you have questions about this Privacy Policy, please contact us at privacy@ndpacompliance.ng</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;