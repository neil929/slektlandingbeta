import { Navigation } from "@/components/slekt/navigation"
import { HeroSection } from "@/components/slekt/hero-section"
import { ProblemSection } from "@/components/slekt/problem-section"
import { TrustBar } from "@/components/slekt/trust-bar"
import { ProductsSection } from "@/components/slekt/products-section"
import { FamilyOfficeSection } from "@/components/slekt/family-office-section"
import { HowItWorksSection } from "@/components/slekt/how-it-works-section"
import { TechnologySection } from "@/components/slekt/technology-section"
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
      {/* Section 1 - Hero with Layers */}
      <HeroSection />
      {/* Section 3 */}
      <ProblemSection />
      {/* Nordic Trust Band */}
      <TrustBar />
      {/* Section 4 */}
      <ProductsSection />
      {/* Section 5 */}
      <FamilyOfficeSection />
      {/* Section 6 */}
      <HowItWorksSection />
      {/* Section 7 */}
      <TechnologySection />
      {/* Section 8 */}
      <GenerationsSection />
      {/* Section 9 */}
      <FounderSection />
      {/* Section 10 */}
      <UseCasesSection />
      {/* Section 11 */}
      <SecuritySection />
      {/* Section 12 */}
      <CtaSection />
      <Footer />
    </main>
  )
}
