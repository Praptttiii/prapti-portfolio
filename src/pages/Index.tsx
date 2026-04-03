import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <GitHubSection />
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground text-sm border-t border-border/30">
        <p>
          Designed & Built by{" "}
          <span className="gradient-text font-semibold">Prapti Patel</span>{" "}
          © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Index;
