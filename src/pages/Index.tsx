import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import ReviewsSection from "@/components/ReviewsSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PricingSection from "@/components/PricingSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <ReviewsSection />
      <HowWeWorkSection />
      <PricingSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
