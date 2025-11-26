import { HeroSection } from './components/HeroSection';
import { TrendsSection } from './components/TrendsSection';
import { BenefitsSection } from './components/BenefitsSection';
import { CooperationModels } from './components/CooperationModels';
import { TrustSection } from './components/TrustSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FixedWhatsAppBar } from './components/FixedWhatsAppBar';
import { LanguageProvider } from './contexts/LanguageContext';
import { LanguageSelector } from './components/LanguageSelector';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <FixedWhatsAppBar />
        <LanguageSelector />
        <div className="pt-[76px]">
          <HeroSection />
          <TrendsSection />
          <BenefitsSection />
          <CooperationModels />
          <TrustSection />
          <TestimonialsSection />
          <AboutSection />
          <FAQSection />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}