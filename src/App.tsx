import { useEffect, useState } from 'react';
import type { Language, NavSection } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ScamCheckerSection } from './components/ScamCheckerSection';
import { SchemeFinderSection } from './components/SchemeFinderSection';
import { CyberSafetySection } from './components/CyberSafetySection';
import { AboutAndFooter } from './components/AboutAndFooter';

export default function App() {
  const [language, setLanguage] = useState<Language>('hi');
  const [activeSection, setActiveSection] = useState<NavSection>('home');

  useEffect(() => {
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  }, [language]);

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B1F3A]">
      <Header
        language={language}
        onToggleLanguage={handleToggleLanguage}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        <HeroSection language={language} onNavigate={handleNavigate} />
        <ScamCheckerSection language={language} />
        <SchemeFinderSection language={language} />
        <CyberSafetySection language={language} />
      </main>

      <AboutAndFooter language={language} onNavigate={handleNavigate} />
    </div>
  );
}
