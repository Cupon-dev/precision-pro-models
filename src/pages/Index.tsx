import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofBar } from "@/components/SocialProofBar";
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturedTemplates } from "@/components/FeaturedTemplates";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TrustSection } from "@/components/TrustSection";
import { FAQSection } from "@/components/FAQSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <CategoriesSection />
      <FeaturedTemplates />
      <BeforeAfterSection />
      <PricingSection />
      <TestimonialsSection />
      <TrustSection />
      <FAQSection />
      <ResourcesSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
