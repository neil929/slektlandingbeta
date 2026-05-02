import { Navigation } from "@/components/slekt/navigation"
import { HeroSection } from "@/components/slekt/hero-section"
import { TrustBar } from "@/components/slekt/trust-bar"
import { MarketProblemSection } from "@/components/slekt/market-problem-section"
import { ProductsSection } from "@/components/slekt/products-section"
import { FamilyOfficeSection } from "@/components/slekt/family-office-section"
import { HowItWorksSection } from "@/components/slekt/how-it-works-section"
import { LayersSection } from "@/components/slekt/layers-section"
import { GenerationsSection } from "@/components/slekt/generations-section"
import { FounderSection } from "@/components/slekt/founder-section"
import { UseCasesSection } from "@/components/slekt/use-cases-section"
import { SecuritySection } from "@/components/slekt/security-section"
import { CtaSection } from "@/components/slekt/cta-section"
import { Footer } from "@/components/slekt/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <TrustBar />
      <MarketProblemSection />
      <ProductsSection />
      <FamilyOfficeSection />
      <HowItWorksSection />
      <LayersSection />
      <GenerationsSection />
      <FounderSection />
      <UseCasesSection />
      <SecuritySection />
      <CtaSection />
      <Footer />
    </main>
  )
}
