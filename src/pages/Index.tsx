import Navigation from "../components/Navigation";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ClientsSection from "../components/sections/ClientsSection";
import InnovationSection from "../components/sections/InnovationSection";
import ProcessSection from "../components/sections/ProcessSection";
import TechnologiesSection from "../components/sections/TechnologiesSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import GlobalSection from "../components/sections/GlobalSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import TeamSection from "../components/sections/TeamSection";
import CTASection from "../components/sections/CTASection";
import ContactSection from "../components/sections/ContactSection";
import PremiumFooter from "../components/PremiumFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-jet text-soft-white overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ClientsSection />
        <InnovationSection />
        <ProcessSection />
        <TechnologiesSection />
        <WhyUsSection />
        <GlobalSection />
        <TestimonialsSection />
        <TeamSection />
        <CTASection />
        <ContactSection />
      </main>
      <PremiumFooter />
    </div>
  );
};

export default Index;
