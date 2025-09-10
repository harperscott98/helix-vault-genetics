import DnaHeader from "@/components/DnaHeader";
import DnaHero from "@/components/DnaHero";
import MarketplaceSection from "@/components/MarketplaceSection";
import PrivacySection from "@/components/PrivacySection";
import ResearchSection from "@/components/ResearchSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DnaHeader />
      <main>
        <DnaHero />
        <MarketplaceSection />
        <PrivacySection />
        <ResearchSection />
      </main>
    </div>
  );
};

export default Index;
