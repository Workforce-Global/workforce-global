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
import SectionGuard from "../components/SectionGuard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SectionGuard section="header">
        <Navigation />
      </SectionGuard>
      <main>
        <SectionGuard section="hero">
          <HeroSection />
        </SectionGuard>
        <SectionGuard section="about">
          <AboutSection />
        </SectionGuard>
        <SectionGuard section="services">
          <ServicesSection />
        </SectionGuard>
        <SectionGuard section="projects">
          <ProjectsSection />
        </SectionGuard>
        <SectionGuard section="clients">
          <ClientsSection />
        </SectionGuard>
        <SectionGuard section="innovation">
          <InnovationSection />
        </SectionGuard>
        <SectionGuard section="process">
          <ProcessSection />
        </SectionGuard>
        <SectionGuard section="technologies">
          <TechnologiesSection />
        </SectionGuard>
        <SectionGuard section="whyus">
          <WhyUsSection />
        </SectionGuard>
        <SectionGuard section="global">
          <GlobalSection />
        </SectionGuard>
        <SectionGuard section="testimonials">
          <TestimonialsSection />
        </SectionGuard>
        <SectionGuard section="team">
          <TeamSection />
        </SectionGuard>
        <SectionGuard section="cta">
          <CTASection />
        </SectionGuard>
        <SectionGuard section="contact">
          <ContactSection />
        </SectionGuard>
      </main>
      <SectionGuard section="footer">
        <PremiumFooter />
      </SectionGuard>
    </div>
  );
};

export default Index;
