import { useState } from 'react';
import { ArrowRight, Landmark, PhoneCall, ShieldAlert, ShieldCheck } from 'lucide-react';
import type { Language, NavSection } from '../types';
import { UI_COPY } from '../data/translations';
import heroSafetyImg from '../assets/images/hero_digital_safety_1794792166606.jpg';

interface HeroSectionProps {
  language: Language;
  onNavigate: (section: NavSection) => void;
}

export function HeroSection({ language, onNavigate }: HeroSectionProps) {
  const [imgError, setImgError] = useState(false);
  const copy = UI_COPY[language];

  return (
    <section id="home" className="bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-10 pb-12 sm:pt-14 sm:pb-16">
        {/* Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-medium text-[#1E40AF] mb-3">
              {copy.independentNotice}
            </p>

            <h1 className="text-[clamp(2rem,3.6vw,3.15rem)] font-bold text-[#0B1F3A] leading-[1.18] tracking-tight text-balance max-w-2xl mb-4">
              {copy.hero.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7">
              {copy.hero.subtitle}
            </p>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <button
                type="button"
                onClick={() => onNavigate('scam-checker')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm sm:text-base font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8] cursor-pointer"
              >
                <ShieldAlert className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>{copy.hero.primaryCta}</span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate('scheme-finder')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-white hover:bg-slate-50 text-[#0B1F3A] border border-slate-300 text-sm sm:text-base font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8] cursor-pointer"
              >
                <Landmark className="w-4 h-4 text-[#1D4ED8] shrink-0" aria-hidden="true" />
                <span>{copy.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Emergency Cyber Helpline 1930 Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 p-4 rounded-xl bg-[#0B1F3A] text-white">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-lg bg-[#1D4ED8] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">{copy.hero.helplineLabel}</div>
                  <a
                    href="tel:1930"
                    className="text-2xl font-bold font-mono tabular-nums tracking-tight text-white hover:underline"
                  >
                    {copy.hero.helplineNumber}
                  </a>
                </div>
              </div>
              <div className="sm:border-l sm:border-white/20 sm:pl-5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                {copy.hero.helplineDesc}
              </div>
            </div>
          </div>

          {/* Visual Asset Slot with Resilience Fallback */}
          <div className="lg:col-span-5 flex items-stretch">
            <div className="w-full rounded-2xl overflow-hidden border border-slate-200 bg-[#0B1F3A] min-h-[260px] lg:min-h-full relative">
              {!imgError ? (
                <img
                  src={heroSafetyImg}
                  alt={
                    language === 'hi'
                      ? 'JanSahayak AI डिजिटल सुरक्षा कवच और नागरिक सहायता चित्रण'
                      : 'JanSahayak AI digital safety shield and citizen support illustration'
                  }
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full min-h-[260px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#0B1F3A] via-[#122E53] to-[#1D4ED8] text-white">
                  <ShieldCheck className="w-14 h-14 text-white mb-3" aria-hidden="true" />
                  <p className="text-lg font-semibold">{copy.brandName}</p>
                  <p className="text-sm text-slate-200 mt-1">{copy.tagline}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Two Prominent Feature Cards */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] tracking-tight">
              {copy.featureCards.heading}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1">
              {copy.featureCards.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature Card 1: Scam & Fake Message Checker */}
            <article className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-semibold text-[#1E40AF]">
                    {copy.featureCards.scamCard.index}
                  </span>
                  <ShieldAlert className="w-5 h-5 text-[#1D4ED8]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2.5">
                  {copy.featureCards.scamCard.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {copy.featureCards.scamCard.desc}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('scam-checker')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-[#0B1F3A] hover:bg-[#122E53] text-white text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                >
                  <span>{copy.featureCards.scamCard.cta}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>

            {/* Feature Card 2: Government Scheme Finder */}
            <article className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-semibold text-[#1E40AF]">
                    {copy.featureCards.schemeCard.index}
                  </span>
                  <Landmark className="w-5 h-5 text-[#1D4ED8]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A] mb-2.5">
                  {copy.featureCards.schemeCard.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {copy.featureCards.schemeCard.desc}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => onNavigate('scheme-finder')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                >
                  <span>{copy.featureCards.schemeCard.cta}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
