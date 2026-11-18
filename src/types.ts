export type Language = 'hi' | 'en';

export type NavSection = 'home' | 'scam-checker' | 'scheme-finder' | 'cyber-safety' | 'about';

export type ScamInputType = 'sms' | 'whatsapp' | 'link' | 'email';

export type RiskLevel = 'LOW RISK' | 'SUSPICIOUS' | 'HIGH RISK';

export interface DetectedIndicators {
  urgencyOrThreat: boolean;
  fakeKyc: boolean;
  otpOrPinRequest: boolean;
  suspiciousPayment: boolean;
  fakeJobOffer: boolean;
  fakePrizeOrLottery: boolean;
  apkDownload: boolean;
  phishingLink: boolean;
}

export interface ScamAnalysisResult {
  riskLevel: RiskLevel;
  riskScore: number;
  scoreDisclaimer: string;
  hindiExplanation: string;
  englishSummary: string;
  reasons: string[];
  warningSigns: string[];
  recommendedActions: string[];
  detectedIndicators: DetectedIndicators;
  safetyReminder: string;
  analyzedAt: string;
}

export interface SchemeProfileInput {
  state: string;
  ageGroup: string;
  occupation: string;
  category: string;
  education: string;
  interest: string;
}

export interface GovernmentScheme {
  name: string;
  department: string;
  mainBenefits: string;
  eligibilityCriteria: string[];
  requiredDocuments: string[];
  applicationProcess: string;
  officialWebsite: string;
  isOfficialGovDomain: boolean;
  verifiedStatus: 'verified' | 'unverified';
  lastVerifiedDate: string;
}

export interface GroundingSource {
  title: string;
  uri: string;
}

export interface SchemeSearchResult {
  schemes: GovernmentScheme[];
  generalGuidance: string;
  portalDisclaimer: string;
  usedSearchGrounding: boolean;
  groundingSources: GroundingSource[];
  checkedAt: string;
}

export interface CyberSafetyTopic {
  id: string;
  number: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  warningSigns: Record<Language, string[]>;
  howToStaySafe: Record<Language, string[]>;
  detailedGuide: Record<Language, string>;
  immediateAction: Record<Language, string>;
}

export interface ApiErrorInfo {
  errorCode?: string;
  message: string;
}
