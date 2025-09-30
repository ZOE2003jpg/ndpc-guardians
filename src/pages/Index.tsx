import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceSnapshot } from "@/components/sections/ServiceSnapshot";
import { NDPASpotlight } from "@/components/sections/NDPASpotlight";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CaseStudyPreview } from "@/components/sections/CaseStudyPreview";
import { InsightsUpdates } from "@/components/sections/InsightsUpdates";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { PrimaryCTA } from "@/components/sections/PrimaryCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServiceSnapshot />
        <NDPASpotlight />
        <WhyChooseUs />
        <CaseStudyPreview />
        <InsightsUpdates />
        <TestimonialsCarousel />
        <PrimaryCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
