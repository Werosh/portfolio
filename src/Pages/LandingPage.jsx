import { useEffect, useState } from "react";
import GrainOverlay from "../components/dev-draft/GrainOverlay";
import LandingNav from "../components/dev-draft/LandingNav";
import LandingSidebar from "../components/dev-draft/LandingSidebar";
import LandingSettingsModal from "../components/dev-draft/LandingSettingsModal";
import HeroSection from "../components/dev-draft/HeroSection";
import CoreTechSection from "../components/dev-draft/CoreTechSection";
import ExperienceSection from "../components/dev-draft/ExperienceSection";
import ProjectsSection from "../components/dev-draft/ProjectsSection";
import ContactSection from "../components/dev-draft/ContactSection";
import LandingFooter from "../components/dev-draft/LandingFooter";
import { useActiveNavSection } from "../hooks/useActiveNavSection";
import { trackVisitorFromClient } from "../services/visitorTrackingApi";

export default function LandingPage() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const activeSection = useActiveNavSection();

  useEffect(() => {
    trackVisitorFromClient().catch((err) => {
      console.error("Visitor tracking failed:", err);
    });
  }, []);

  return (
    <div className="dev-draft-root overflow-x-hidden bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <GrainOverlay />
      <LandingNav />
      <LandingSidebar
        activeSection={activeSection}
        onOpenSettings={() => setSettingsOpen(true)}
      />
      <LandingSettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
      <main id="main" className="pt-16 max-w-[100vw] overflow-x-hidden lg:ml-72">
        <HeroSection />
        <CoreTechSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <LandingFooter />
      </main>
    </div>
  );
}
