import { HeroSection } from "./components/HeroSection";
import { VideoSection } from "./components/VideoSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { CurriculumSection } from "./components/CurriculumSection";
import { BonusSection } from "./components/BonusSection";
import { PricingSection } from "./components/PricingSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <VideoSection />
      <BenefitsSection />
      <CurriculumSection />
      <BonusSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
