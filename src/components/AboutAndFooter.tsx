import { Lock, Mail, PhoneCall, ShieldCheck } from 'lucide-react';
import type { Language, NavSection } from '../types';
import { UI_COPY } from '../data/translations';

interface AboutAndFooterProps {
  language: Language;
  onNavigate: (section: NavSection) => void;
}

export function AboutAndFooter({ language, onNavigate }: AboutAndFooterProps) {
  const copy = UI_COPY[language];

  return (
    <>
      <section id="about" className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8">
            <p className="text-xs font-mono font-semibold text-[#1E40AF] mb-2">04 · ABOUT &amp; PRIVACY</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight">
              {copy.about.sectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
              <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#1D4ED8]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">
                {copy.about.independentTitle}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {copy.about.independentBody}
              </p>
            </article>

            <article className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6">
              <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5 text-[#1D4ED8]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">
                {copy.about.privacyTitle}
              </h3>
              <ul className="list-disc pl-4 space-y-1.5 text-sm text-slate-600 leading-relaxed">
                {copy.about.privacyPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </article>

            <article className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">
                  {copy.about.disclaimerTitle}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {copy.about.disclaimerBody}
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-sm font-bold text-[#0B1F3A] mb-1.5 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#1D4ED8]" aria-hidden="true" />
                  <span>{copy.about.contactTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {copy.about.contactBody}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B1F3A] text-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/15">
            <div>
              <div className="text-lg font-bold text-white">{copy.brandName}</div>
              <p className="text-sm text-slate-300 mt-1">{copy.tagline}</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                {copy.nav.home}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('scam-checker')}
                className="text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                {copy.nav.scamChecker}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('scheme-finder')}
                className="text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                {copy.nav.schemeFinder}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('cyber-safety')}
                className="text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                {copy.nav.cyberSafety}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                {copy.nav.about}
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-300">
            <div>{copy.footer.copyright}</div>
            <div className="flex items-center gap-2 font-mono tabular-nums">
              <PhoneCall className="w-3.5 h-3.5 text-blue-300 shrink-0" aria-hidden="true" />
              <span>{copy.footer.helpline}</span>
            </div>
            <div>{copy.footer.privacyNote}</div>
          </div>
        </div>
      </footer>
    </>
  );
}
