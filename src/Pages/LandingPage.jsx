import { useState } from "react";
import GrainOverlay from "../components/dev-draft/GrainOverlay";
import LandingNav from "../components/dev-draft/LandingNav";
import LandingSidebar from "../components/dev-draft/LandingSidebar";
import LandingSettingsModal from "../components/dev-draft/LandingSettingsModal";
import HeroSection from "../components/dev-draft/HeroSection";
import ExperienceSection from "../components/dev-draft/ExperienceSection";
import LabSection from "../components/dev-draft/LabSection";
import ProjectsSection from "../components/dev-draft/ProjectsSection";
import ContactSection from "../components/dev-draft/ContactSection";
import LandingFooter from "../components/dev-draft/LandingFooter";

export default function LandingPage() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="dev-draft-root overflow-x-hidden bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <GrainOverlay />
      <LandingNav />
      <LandingSidebar onOpenSettings={() => setSettingsOpen(true)} />
      <LandingSettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
      <main className="lg:ml-72">
        <HeroSection />
        <ExperienceSection />
        <LabSection />
        <ProjectsSection />
        <ContactSection />
        <LandingFooter />
      </main>
    </div>
  );
}
