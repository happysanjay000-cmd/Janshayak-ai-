import { useState, type FormEvent } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  ExternalLink,
  FileText,
  Landmark,
  Loader2,
  Search,
  ShieldAlert,
} from 'lucide-react';
import type { ApiErrorInfo, Language, SchemeProfileInput, SchemeSearchResult } from '../types';
import {
  AGE_GROUPS,
  CATEGORIES,
  EDUCATION_LEVELS,
  INDIAN_STATES,
  INTEREST_AREAS,
  OCCUPATIONS,
  UI_COPY,
} from '../data/translations';

interface SchemeFinderSectionProps {
  language: Language;
}

export function SchemeFinderSection({ language }: SchemeFinderSectionProps) {
  const copy = UI_COPY[language].schemeFinder;
  const scamCopy = UI_COPY[language].scamChecker;

  const [profile, setProfile] = useState<SchemeProfileInput>({
    state: INDIAN_STATES[0].value,
    ageGroup: AGE_GROUPS[1].value,
    occupation: OCCUPATIONS[0].value,
    category: CATEGORIES[0].value,
    education: EDUCATION_LEVELS[1].value,
    interest: INTEREST_AREAS[0].value,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiErrorInfo | null>(null);
  const [result, setResult] = useState<SchemeSearchResult | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'scheme_find',
          profile,
          language,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        setResult(null);
        setError({
          errorCode: data?.errorCode,
          message:
            data?.message ||
            (language === 'hi'
              ? 'योजनाओं की जानकारी लोड नहीं हो सकी। कृपया पुनः प्रयास करें।'
              : 'Unable to load government schemes right now. Please try again.'),
        });
        return;
      }

      setResult(data.result as SchemeSearchResult);
    } catch {
      setResult(null);
      setError({
        errorCode: 'NETWORK_ERROR',
        message:
          language === 'hi'
            ? 'नेटवर्क त्रुटि: सर्वर से संपर्क नहीं हो सका।'
            : 'Network error: Unable to reach the server.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="scheme-finder" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8">
          <p className="text-xs font-mono font-semibold text-[#1E40AF] mb-2">02 · SCHEME FINDER</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight text-balance">
            {copy.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {copy.sectionSubtitle}
          </p>
        </div>

        {/* Profile Selector Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-5 sm:p-6 mb-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            <div>
              <label htmlFor="scheme-state" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                {copy.fields.state}
              </label>
              <select
                id="scheme-state"
                value={profile.state}
                onChange={(e) => setProfile((p) => ({ ...p, state: e.target.value }))}
                className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0B1F3A] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
              >
                {INDIAN_STATES.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item[language]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="scheme-age" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                {copy.fields.ageGroup}
              </label>
              <select
                id="scheme-age"
                value={profile.ageGroup}
                onChange={(e) => setProfile((p) => ({ ...p, ageGroup: e.target.value }))}
                className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0B1F3A] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
              >
                {AGE_GROUPS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item[language]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="scheme-occupation" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                {copy.fields.occupation}
              </label>
              <select
                id="scheme-occupation"
                value={profile.occupation}
                onChange={(e) => setProfile((p) => ({ ...p, occupation: e.target.value }))}
                className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0B1F3A] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
              >
                {OCCUPATIONS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item[language]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="scheme-category" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                {copy.fields.category}
              </label>
              <select
                id="scheme-category"
                value={profile.category}
                onChange={(e) => setProfile((p) => ({ ...p, category: e.target.value }))}
                className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0B1F3A] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
              >
                {CATEGORIES.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item[language]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="scheme-education" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                {copy.fields.education}
              </label>
              <select
                id="scheme-education"
                value={profile.education}
                onChange={(e) => setProfile((p) => ({ ...p, education: e.target.value }))}
                className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0B1F3A] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
              >
                {EDUCATION_LEVELS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item[language]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="scheme-interest" className="block text-xs font-semibold text-[#0B1F3A] mb-1.5">
                {copy.fields.interest}
              </label>
              <select
                id="scheme-interest"
                value={profile.interest}
                onChange={(e) => setProfile((p) => ({ ...p, interest: e.target.value }))}
                className="w-full min-h-[44px] rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-[#0B1F3A] focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20"
              >
                {INTEREST_AREAS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item[language]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-slate-200">
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              {copy.portalNotice}
            </p>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:bg-slate-400 text-white text-sm sm:text-base font-semibold rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                  <span>{copy.searchingBtn}</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" aria-hidden="true" />
                  <span>{copy.searchBtn}</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Error State */}
        {error && (
          <div role="alert" className="bg-white border border-red-300 rounded-xl p-6 text-red-950 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="text-base font-bold">
                  {error.errorCode === 'MISSING_API_KEY'
                    ? scamCopy.missingKeyTitle
                    : language === 'hi'
                    ? 'योजना खोज विफल रही'
                    : 'Scheme Search Could Not Complete'}
                </h3>
                <p className="text-sm text-slate-700 mt-1">{error.message}</p>
                {error.errorCode === 'MISSING_API_KEY' && (
                  <p className="text-xs text-slate-600 mt-2">{scamCopy.missingKeyDesc}</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-xl p-10 text-center">
            <Loader2 className="w-8 h-8 text-[#1D4ED8] animate-spin mx-auto mb-3" aria-hidden="true" />
            <p className="text-base font-semibold text-[#0B1F3A]">{copy.searchingBtn}</p>
            <p className="text-sm text-slate-500 mt-1">
              {language === 'hi'
                ? 'आधिकारिक .gov.in स्रोतों से प्रासंगिक योजनाओं का मिलान किया जा रहा है...'
                : 'Cross-referencing relevant schemes with official .gov.in portals...'}
            </p>
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-[#0B1F3A]">{copy.resultsTitle}</h3>
              <p className="text-xs text-slate-500 font-mono tabular-nums">
                {result.schemes.length} {language === 'hi' ? 'योजनाएं मिलीं' : 'schemes found'} ·{' '}
                {result.checkedAt.slice(0, 10)}
              </p>
            </div>

            {result.generalGuidance && (
              <div className="p-4 rounded-xl bg-[#EFF6FF] border border-blue-200 text-sm text-[#0B1F3A] leading-relaxed">
                {result.generalGuidance}
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {result.schemes.map((scheme, index) => (
                <article
                  key={`${scheme.name}-${index}`}
                  className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    {/* Clean unboxed metadata header */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 mb-2">
                      {scheme.verifiedStatus === 'verified' ? (
                        <span className="inline-flex items-center gap-1 font-semibold text-emerald-800">
                          <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{copy.verifiedLabel}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 font-semibold text-amber-800">
                          <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{copy.unverifiedLabel}</span>
                        </span>
                      )}
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">
                        {copy.lastVerifiedLabel}: {scheme.lastVerifiedDate}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#0B1F3A] leading-snug mb-1">
                      {scheme.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-[#1E40AF] flex items-center gap-1.5 mb-4">
                      <Landmark className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>{scheme.department}</span>
                    </p>

                    <div className="space-y-3 text-sm text-slate-700">
                      <div>
                        <div className="text-xs font-bold text-[#0B1F3A] mb-0.5">
                          {copy.benefitsLabel}
                        </div>
                        <p className="leading-relaxed">{scheme.mainBenefits}</p>
                      </div>

                      {scheme.eligibilityCriteria.length > 0 && (
                        <div>
                          <div className="text-xs font-bold text-[#0B1F3A] mb-1">
                            {copy.eligibilityLabel}
                          </div>
                          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm">
                            {scheme.eligibilityCriteria.map((crit, idx) => (
                              <li key={idx}>{crit}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {scheme.requiredDocuments.length > 0 && (
                        <div>
                          <div className="text-xs font-bold text-[#0B1F3A] mb-1">
                            {copy.documentsLabel}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 flex items-start gap-1.5">
                            <FileText className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{scheme.requiredDocuments.join(' · ')}</span>
                          </p>
                        </div>
                      )}

                      {scheme.applicationProcess && (
                        <div>
                          <div className="text-xs font-bold text-[#0B1F3A] mb-0.5">
                            {copy.processLabel}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {scheme.applicationProcess}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 truncate max-w-[55%]">
                      {scheme.officialWebsite}
                    </span>
                    <a
                      href={scheme.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] bg-[#0B1F3A] hover:bg-[#122E53] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                    >
                      <span>{copy.visitPortalBtn}</span>
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {result.groundingSources.length > 0 && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-[#0B1F3A] mb-2">{copy.groundingTitle}</h4>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
                  {result.groundingSources.map((src, i) => (
                    <li key={i}>
                      <a
                        href={src.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#1E40AF] hover:underline"
                      >
                        <span>{src.title}</span>
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-xs text-slate-600">{result.portalDisclaimer}</p>
          </div>
        )}
      </div>
    </section>
  );
}
