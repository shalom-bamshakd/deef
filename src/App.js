import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CommunitySection from './CommunitySection';
import SuccessStoriesSection from './SuccessStoriesSection';
import FooterSection from './FooterSection';
import NavBar from './NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <CommunitySection />
      <SuccessStoriesSection />
      <FooterSection />
    </div>
  );
}

export default App;
