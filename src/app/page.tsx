import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredibilityStrip from "@/components/CredibilityStrip";
import PainSection from "@/components/PainSection";
import SegmentsScroller from "@/components/SegmentsScroller";
import TaxReform from "@/components/TaxReform";
import SocialProof from "@/components/SocialProof";
import FeaturesGrid from "@/components/FeaturesGrid";
import PDVSection from "@/components/PDVSection";
import MobileSection from "@/components/MobileSection";
import SupportSection from "@/components/SupportSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CredibilityStrip />
      <PainSection />
      <SegmentsScroller />
      <TaxReform />
      <SocialProof />
      <FeaturesGrid />
      <PDVSection />
      <MobileSection />
      <SupportSection />
      <ContactSection />
      <Footer />
    </>
  );
}
