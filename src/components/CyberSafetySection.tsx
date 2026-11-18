import { useEffect, useState } from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, X } from 'lucide-react';
import type { CyberSafetyTopic, Language } from '../types';
import { CYBER_SAFETY_TOPICS, UI_COPY } from '../data/translations';

interface CyberSafetySectionProps {
  language: Language;
}

export function CyberSafetySection({ language }: CyberSafetySectionProps) {
  const copy = UI_COPY[language].cyberSafety;
  const [selectedTopic, setSelectedTopic] = useState<CyberSafetyTopic | null>(null);

  useEffect(() => {
    if (!selectedTopic) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedTopic(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTopic]);

  return (
    <section id="cyber-safety" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8">
          <p className="text-xs font-mono font-semibold text-[#1E40AF] mb-2">03 · CYBER SAFETY</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight text-balance">
            {copy.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {copy.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CYBER_SAFETY_TOPICS.map((topic) => (
            <article
              key={topic.id}
              className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-[#1E40AF]">
                    {topic.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1F3A] leading-snug mb-2">
                  {topic.title[language]}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {topic.summary[language]}
                </p>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1F3A] mb-1">
                      {copy.warningSignsHeading}
                    </h4>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                      {topic.warningSigns[language].slice(0, 2).map((sign, i) => (
                        <li key={i}>{sign}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-[#0B1F3A] mb-1">
                      {copy.howToSafeHeading}
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {topic.howToStaySafe[language].slice(0, 2).map((tip, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <ShieldCheck
                            className="w-3.5 h-3.5 text-[#1D4ED8] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] text-xs sm:text-sm font-semibold text-[#1E40AF] bg-[#EFF6FF] hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                >
                  <span>{copy.learnMoreBtn}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Accessible Detail Modal */}
      {selectedTopic && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cyber-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F3A]/60 backdrop-blur-xs"
          onClick={() => setSelectedTopic(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono font-semibold text-[#1E40AF]">
                  {selectedTopic.number}
                </span>
                <h3 id="cyber-modal-title" className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mt-1">
                  {selectedTopic.title[language]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTopic(null)}
                aria-label={copy.closeModalBtn}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              {selectedTopic.detailedGuide[language]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h4 className="text-sm font-bold text-red-950 mb-2">
                  {copy.warningSignsHeading}
                </h4>
                <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-red-900">
                  {selectedTopic.warningSigns[language].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#EFF6FF] border border-blue-200 rounded-xl p-4">
                <h4 className="text-sm font-bold text-[#0B1F3A] mb-2">
                  {copy.howToSafeHeading}
                </h4>
                <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-[#0B1F3A]">
                  {selectedTopic.howToStaySafe[language].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0B1F3A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                <PhoneCall className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-semibold">{copy.helplineCallout}</div>
                  <div className="text-slate-300 mt-0.5">
                    {selectedTopic.immediateAction[language]}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTopic(null)}
                className="px-4 py-2 min-h-[40px] bg-white text-[#0B1F3A] text-sm font-semibold rounded-lg hover:bg-slate-100 whitespace-nowrap shrink-0 cursor-pointer"
              >
                {copy.closeModalBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
