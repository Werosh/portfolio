import { useState } from "react";
import GrainOverlay from "../components/dev-draft/GrainOverlay";
import LandingNav from "../components/dev-draft/LandingNav";
import LandingSidebar from "../components/dev-draft/LandingSidebar";
import LandingSettingsModal from "../components/dev-draft/LandingSettingsModal";
import HeroSection from "../components/dev-draft/HeroSection";
import ExperienceSection from "../components/dev-draft/ExperienceSection";
import ProjectsSection from "../components/dev-draft/ProjectsSection";
import ContactSection from "../components/dev-draft/ContactSection";
import LandingFooter from "../components/dev-draft/LandingFooter";
import { useActiveNavSection } from "../hooks/useActiveNavSection";

export default function LandingPage() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const activeSection = useActiveNavSection();

  return (
    <div className="dev-draft-root overflow-x-hidden bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <GrainOverlay />
      <LandingNav
        activeSection={activeSection}
        mobileOpen={mobileNavOpen}
        onMobileOpenChange={setMobileNavOpen}
        onOpenSettings={() => setSettingsOpen(true)}
      />
      <LandingSidebar
        activeSection={activeSection}
        onOpenSettings={() => setSettingsOpen(true)}
      />
      <LandingSettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
      <main id="main" className="pt-16 lg:ml-72">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <LandingFooter />
      </main>
    </div>
  );
}
