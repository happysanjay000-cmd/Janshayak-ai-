import { useState } from 'react';
import { Languages, Menu, X } from 'lucide-react';
import type { Language, NavSection } from '../types';
import { UI_COPY } from '../data/translations';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export function Header({ language, onToggleLanguage, activeSection, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const copy = UI_COPY[language];

  const navItems: Array<{ id: NavSection; label: string }> = [
    { id: 'home', label: copy.nav.home },
    { id: 'scam-checker', label: copy.nav.scamChecker },
    { id: 'scheme-finder', label: copy.nav.schemeFinder },
    { id: 'cyber-safety', label: copy.nav.cyberSafety },
    { id: 'about', label: copy.nav.about },
  ];

  const handleNavClick = (section: NavSection) => {
    setMobileMenuOpen(false);
    onNavigate(section);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark with Shield + Digital Security Symbol */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-2.5 text-[#0B1F3A] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-md py-1"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              d="M16 2.5L5 6.8V15.4C5 22.3 9.7 28.4 16 30C22.3 28.4 27 22.3 27 15.4V6.8L16 2.5Z"
              fill="#0B1F3A"
            />
            <path
              d="M16 5.2L7.5 8.6V15.3C7.5 20.8 11.1 25.8 16 27.3C20.9 25.8 24.5 20.8 24.5 15.3V8.6L16 5.2Z"
              fill="#1D4ED8"
            />
            <path
              d="M12.2 16.2L14.8 18.8L20.2 13.2"
              stroke="#FFFFFF"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-bold tracking-tight text-[#0B1F3A]">
            {copy.brandName}
          </span>
        </a>

        {/* Zone 2: 5 concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`whitespace-nowrap shrink-0 py-1.5 border-b-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-sm ${
                  isActive
                    ? 'border-[#1D4ED8] text-[#0B1F3A] font-semibold'
                    : 'border-transparent hover:text-[#0B1F3A] hover:border-slate-300'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary control (Language toggle) + mobile menu trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleLanguage}
            aria-label={language === 'hi' ? 'Switch language to English' : 'भाषा हिन्दी में बदलें'}
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] text-sm font-semibold text-[#0B1F3A] bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] cursor-pointer"
          >
            <Languages className="w-4 h-4 text-[#1D4ED8]" aria-hidden="true" />
            <span>{copy.langToggle}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#0B1F3A] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile Navigation"
          className="md:hidden bg-white border-t border-slate-200 px-4 py-3 space-y-1 shadow-sm"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`flex items-center justify-between px-3 min-h-[44px] rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#EFF6FF] text-[#1D4ED8] font-semibold'
                    : 'text-[#0B1F3A] hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      )}
    </header>
  );
}
