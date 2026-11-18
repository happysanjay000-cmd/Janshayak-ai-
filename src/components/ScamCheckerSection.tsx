import { useState, type FormEvent } from 'react';
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  Copy,
  Eraser,
  Info,
  Loader2,
  Share2,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
} from 'lucide-react';
import type { ApiErrorInfo, Language, RiskLevel, ScamAnalysisResult, ScamInputType } from '../types';
import { SCAM_SAMPLES, UI_COPY } from '../data/translations';

interface ScamCheckerSectionProps {
  language: Language;
}

const INDICATOR_LABELS: Record<
  keyof ScamAnalysisResult['detectedIndicators'],
  Record<Language, string>
> = {
  urgencyOrThreat: { hi: 'अनावश्यक जल्दबाजी या धमकी', en: 'Urgency / Threatening Language' },
  fakeKyc: { hi: 'फर्जी KYC अपडेट दावा', en: 'Fake KYC Update Claim' },
  otpOrPinRequest: { hi: 'OTP या PIN की मांग', en: 'OTP or PIN Request' },
  suspiciousPayment: { hi: 'संदिग्ध भुगतान अनुरोध', en: 'Suspicious Payment Request' },
  fakeJobOffer: { hi: 'फर्जी नौकरी का ऑफर', en: 'Fake Job Offer' },
  fakePrizeOrLottery: { hi: 'फर्जी इनाम या लॉटरी', en: 'Fake Prize / Lottery Claim' },
  apkDownload: { hi: 'संदिग्ध APK डाउनलोड', en: 'Suspicious APK Download' },
  phishingLink: { hi: 'फिशिंग / नकली वेबसाइट लिंक', en: 'Potential Phishing Link' },
};

export function ScamCheckerSection({ language }: ScamCheckerSectionProps) {
  const copy = UI_COPY[language].scamChecker;
  const [inputType, setInputType] = useState<ScamInputType>('sms');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiErrorInfo | null>(null);
  const [result, setResult] = useState<ScamAnalysisResult | null>(null);
  const [copied, setCopied] = useState(false);
  const [sharedMsg, setSharedMsg] = useState('');

  const inputTabs: ScamInputType[] = ['sms', 'whatsapp', 'link', 'email'];

  const handleAnalyze = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setCopied(false);
    setSharedMsg('');

    const trimmed = content.trim();
    if (trimmed.length < 5) {
      setError({
        errorCode: 'INVALID_INPUT',
        message:
          language === 'hi'
            ? 'कृपया जांच के लिए कम से कम 5 अक्षरों का संदेश या लिंक पेस्ट करें।'
            : 'Please paste a message or link of at least 5 characters.',
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'scam_check',
          inputType,
          content: trimmed,
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
              ? 'अभी AI विश्लेषण पूरा नहीं हो सका। कृपया कुछ देर बाद प्रयास करें।'
              : 'Unable to complete AI analysis right now. Please try again shortly.'),
        });
        return;
      }

      setResult(data.result as ScamAnalysisResult);
    } catch {
      setResult(null);
      setError({
        errorCode: 'NETWORK_ERROR',
        message:
          language === 'hi'
            ? 'नेटवर्क त्रुटि: सर्वर से संपर्क नहीं हो सका। कृपया अपना इंटरनेट जांचें।'
            : 'Network error: Unable to reach the server. Please check your connection.',
      });
    } finally {
      setLoading(false);
    }
  };

  const buildShareText = (res: ScamAnalysisResult) => {
    return [
      `JanSahayak AI — Scam Analysis Report`,
      `Risk Level: ${res.riskLevel} (AI Risk Estimate: ${res.riskScore}/100)`,
      `Hindi Explanation: ${res.hindiExplanation}`,
      `Recommended Actions: ${res.recommendedActions.join(' | ')}`,
      `National Cyber Crime Helpline: 1930 | cybercrime.gov.in`,
      `Note: ${res.scoreDisclaimer}`,
    ].join('\n\n');
  };

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(buildShareText(result));
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setSharedMsg(language === 'hi' ? 'कॉपी करने में समस्या आई' : 'Could not copy to clipboard');
    }
  };

  const handleShare = async () => {
    if (!result) return;
    const text = buildShareText(result);
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'JanSahayak AI — Scam Check Result',
          text,
        });
        setSharedMsg(copy.sharedBtn);
        setTimeout(() => setSharedMsg(''), 2500);
        return;
      } catch {
        // Fallback to clipboard if user cancels or share unavailable
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      setSharedMsg(copy.copiedBtn);
      setTimeout(() => setSharedMsg(''), 2500);
    } catch {
      setSharedMsg(language === 'hi' ? 'साझा करने में असमर्थ' : 'Unable to share');
    }
  };

  const getRiskBannerStyles = (level: RiskLevel) => {
    if (level === 'HIGH RISK') {
      return {
        container: 'bg-red-50 border-red-300 text-red-950',
        scoreText: 'text-red-800',
        Icon: ShieldAlert,
        iconColor: 'text-red-700',
      };
    }
    if (level === 'SUSPICIOUS') {
      return {
        container: 'bg-amber-50 border-amber-300 text-amber-950',
        scoreText: 'text-amber-800',
        Icon: ShieldQuestion,
        iconColor: 'text-amber-700',
      };
    }
    return {
      container: 'bg-emerald-50 border-emerald-300 text-emerald-950',
      scoreText: 'text-emerald-800',
      Icon: ShieldCheck,
      iconColor: 'text-emerald-700',
    };
  };

  return (
    <section id="scam-checker" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8">
          <p className="text-xs font-mono font-semibold text-[#1E40AF] mb-2">01 · SCAM CHECKER</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight text-balance">
            {copy.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            {copy.sectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Column */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-xl p-5 sm:p-6">
            <form onSubmit={handleAnalyze} noValidate>
              {/* Input Type Selector */}
              <div
                role="tablist"
                aria-label="Message type"
                className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-lg mb-5"
              >
                {inputTabs.map((tab) => {
                  const active = inputType === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setInputType(tab)}
                      className={`px-3 py-2 min-h-[40px] text-xs sm:text-sm font-semibold rounded-md transition-colors duration-150 whitespace-nowrap truncate cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] ${
                        active
                          ? 'bg-white text-[#0B1F3A] shadow-sm'
                          : 'text-slate-600 hover:text-[#0B1F3A]'
                      }`}
                    >
                      {copy.inputTypes[tab]}
                    </button>
                  );
                })}
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label htmlFor="scam-message-input" className="sr-only">
                  {copy.inputTypes[inputType]}
                </label>
                <textarea
                  id="scam-message-input"
                  rows={6}
                  maxLength={4000}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder={copy.placeholder[inputType]}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm sm:text-base text-[#0B1F3A] placeholder:text-slate-400 focus:border-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/20 resize-y"
                />
                <div className="flex items-center justify-between text-xs text-slate-500 mt-1.5 font-mono tabular-nums">
                  <span>{content.length} / 4000</span>
                  {content.length > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        setContent('');
                        setError(null);
                      }}
                      className="inline-flex items-center gap-1 text-slate-600 hover:text-[#0B1F3A] font-sans font-medium cursor-pointer"
                    >
                      <Eraser className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{copy.clearBtn}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Quick Sample Buttons */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-slate-600 mb-2">{copy.samplesLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {SCAM_SAMPLES.map((sample) => (
                    <button
                      key={sample.id}
                      type="button"
                      onClick={() => {
                        setInputType(sample.type);
                        setContent(sample.text);
                        setError(null);
                      }}
                      className="px-3 py-1.5 min-h-[36px] text-xs font-medium text-[#1E40AF] bg-[#EFF6FF] hover:bg-blue-100 border border-blue-200 rounded-md transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                    >
                      {sample.label[language]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Safety Notice */}
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 mb-5 flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#1E40AF] shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-xs text-slate-700 leading-relaxed">
                  <strong className="font-semibold text-[#0B1F3A]">{copy.safetyBannerTitle}: </strong>
                  {copy.safetyBannerText}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:bg-slate-400 text-white text-base font-semibold rounded-lg transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                    <span>{copy.analyzingBtn}</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="w-5 h-5" aria-hidden="true" />
                    <span>{copy.analyzeBtn}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result / Status Column */}
          <div className="lg:col-span-6">
            {error && (
              <div
                role="alert"
                className="bg-white border border-red-300 rounded-xl p-6 text-red-950"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="text-base font-bold">
                      {error.errorCode === 'MISSING_API_KEY'
                        ? copy.missingKeyTitle
                        : language === 'hi'
                        ? 'जांच पूरी नहीं हो सकी'
                        : 'Analysis Could Not Complete'}
                    </h3>
                    <p className="text-sm text-slate-700 mt-1 leading-relaxed">{error.message}</p>
                    {error.errorCode === 'MISSING_API_KEY' && (
                      <p className="text-xs text-slate-600 mt-2">{copy.missingKeyDesc}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {!error && !result && !loading && (
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 text-slate-600">
                <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">{copy.resultTitle}</h3>
                <p className="text-sm leading-relaxed mb-5">
                  {language === 'hi'
                    ? 'बाईं ओर कोई संदिग्ध SMS, WhatsApp संदेश, ईमेल या लिंक पेस्ट करें और "AI से जांच करें" पर क्लिक करें। विश्लेषण इन 3 स्तरों में दिखाया जाएगा:'
                    : 'Paste any suspicious SMS, WhatsApp text, email, or link on the left and click "Analyze with AI". Results classify messages into three levels:'}
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-[#0B1F3A]">{copy.riskLabels['LOW RISK']}:</strong>{' '}
                      {copy.riskDescriptions['LOW RISK']}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldQuestion className="w-4 h-4 text-amber-700 shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-[#0B1F3A]">{copy.riskLabels.SUSPICIOUS}:</strong>{' '}
                      {copy.riskDescriptions.SUSPICIOUS}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-red-700 shrink-0 mt-1" aria-hidden="true" />
                    <span>
                      <strong className="text-[#0B1F3A]">{copy.riskLabels['HIGH RISK']}:</strong>{' '}
                      {copy.riskDescriptions['HIGH RISK']}
                    </span>
                  </li>
                </ul>
              </div>
            )}

            {loading && (
              <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
                <Loader2 className="w-8 h-8 text-[#1D4ED8] animate-spin mb-3" aria-hidden="true" />
                <p className="text-base font-semibold text-[#0B1F3A]">{copy.analyzingBtn}</p>
                <p className="text-sm text-slate-500 mt-1">
                  {language === 'hi'
                    ? 'फर्जी KYC, APK, OTP मांग और फिशिंग संकेतों की जांच की जा रही है...'
                    : 'Inspecting for urgency, fake KYC, OTP requests, APK traps, and phishing patterns...'}
                </p>
              </div>
            )}

            {result && !loading && (
              <div className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 space-y-5">
                {/* Risk Header */}
                {(() => {
                  const style = getRiskBannerStyles(result.riskLevel);
                  const RiskIcon = style.Icon;
                  return (
                    <div className={`border rounded-xl p-4 ${style.container}`}>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5">
                          <RiskIcon className={`w-6 h-6 shrink-0 ${style.iconColor}`} aria-hidden="true" />
                          <div>
                            <div className="text-base sm:text-lg font-bold">
                              {copy.riskLabels[result.riskLevel]}
                            </div>
                            <div className="text-xs opacity-90">
                              {copy.riskDescriptions[result.riskLevel]}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium opacity-80">{copy.scoreLabel}</div>
                          <div className={`text-2xl font-bold font-mono tabular-nums ${style.scoreText}`}>
                            {result.riskScore}/100
                          </div>
                        </div>
                      </div>
                      <p className="text-xs mt-3 pt-2.5 border-t border-black/10 opacity-90">
                        {result.scoreDisclaimer}
                      </p>
                    </div>
                  );
                })()}

                {/* Clear Hindi Explanation (Always shown) */}
                <div>
                  <h3 className="text-sm font-bold text-[#0B1F3A] mb-1.5">
                    {copy.hindiExplanationTitle}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed bg-[#F8FAFC] border border-slate-200 rounded-lg p-3.5">
                    {result.hindiExplanation}
                  </p>
                  {language === 'en' && result.englishSummary && (
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {result.englishSummary}
                    </p>
                  )}
                </div>

                {/* Detected Indicators Grid */}
                <div>
                  <h4 className="text-sm font-bold text-[#0B1F3A] mb-2">{copy.indicatorsTitle}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {(
                      Object.keys(result.detectedIndicators) as Array<
                        keyof ScamAnalysisResult['detectedIndicators']
                      >
                    ).map((key) => {
                      const flagged = result.detectedIndicators[key];
                      return (
                        <div
                          key={key}
                          className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg border ${
                            flagged
                              ? 'bg-red-50 border-red-200 text-red-900 font-semibold'
                              : 'bg-slate-50 border-slate-200 text-slate-600'
                          }`}
                        >
                          <span>{INDICATOR_LABELS[key][language]}</span>
                          <span className="font-mono text-[11px] shrink-0">
                            {flagged
                              ? language === 'hi'
                                ? 'पाया गया'
                                : 'DETECTED'
                              : language === 'hi'
                              ? 'नहीं'
                              : 'No'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Reasons & Warning Signs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1F3A] mb-1.5">{copy.reasonsTitle}</h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                      {result.reasons.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1F3A] mb-1.5">{copy.warningsTitle}</h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 list-disc pl-4">
                      {result.warningSigns.length > 0 ? (
                        result.warningSigns.map((item, idx) => <li key={idx}>{item}</li>)
                      ) : (
                        <li>
                          {language === 'hi'
                            ? 'कोई स्पष्ट ठगी संकेत नहीं मिला, फिर भी सतर्क रहें।'
                            : 'No obvious red flags found, stay vigilant.'}
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                {/* Recommended Actions */}
                <div className="p-4 rounded-lg bg-[#EFF6FF] border border-blue-200">
                  <h4 className="text-sm font-bold text-[#0B1F3A] mb-2">{copy.actionsTitle}</h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-[#0B1F3A]">
                    {result.recommendedActions.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safety Disclaimer & Share/Copy */}
                <p className="text-xs text-slate-500 leading-relaxed">{result.safetyReminder}</p>

                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] bg-[#0B1F3A] hover:bg-[#122E53] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" aria-hidden="true" />
                    ) : (
                      <Copy className="w-4 h-4" aria-hidden="true" />
                    )}
                    <span>{copied ? copy.copiedBtn : copy.copyBtn}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] bg-white hover:bg-slate-50 text-[#0B1F3A] border border-slate-300 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                  >
                    <Share2 className="w-4 h-4 text-[#1D4ED8]" aria-hidden="true" />
                    <span>{sharedMsg || copy.shareBtn}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
