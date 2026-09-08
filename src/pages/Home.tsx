import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PillarsSection } from '../components/PillarsSection';
import { SystemConsoleSection } from '../components/SystemConsoleSection';
import { FeaturedProjectsSection } from '../components/FeaturedProjectsSection';
import { SkillsMatrixSection } from '../components/SkillsMatrixSection';
import { CallToActionSection } from '../components/CallToActionSection';

const Home: React.FC = () => {
  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      {/* Hero Section with Simba Proof Bar */}
      <HeroSection
        onExploreArchitecture={() => scrollTo('architecture-console')}
        onViewProjects={() => scrollTo('projects')}
        onContact={() => scrollTo('contact')}
      />

      {/* The 4 Architectural Pillars */}
      <PillarsSection onSelectCategory={() => scrollTo('skills-matrix')} />

      {/* Interactive System Architect Console (Simba-inspired playground) */}
      <SystemConsoleSection />

      {/* Outcomes & Case Studies ("Great builders build with certainty") */}
      <FeaturedProjectsSection />

      {/* Comprehensive 8-Category Technical Skills Matrix */}
      <SkillsMatrixSection />

      {/* Closing High-Conversion CTA Banner */}
      <CallToActionSection />
    </div>
  );
};

export default Home;
