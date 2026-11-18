import type { CyberSafetyTopic, Language, ScamInputType } from '../types';

export const UI_COPY = {
  hi: {
    brandName: 'JanSahayak AI',
    tagline: 'आपकी डिजिटल सुरक्षा, आपकी सरकारी योजनाओं का साथी।',
    independentNotice: 'स्वतंत्र AI जन-सूचना सेवा — कोई आधिकारिक सरकारी पोर्टल नहीं',
    nav: {
      home: 'होम',
      scamChecker: 'स्कैम जांच',
      schemeFinder: 'योजना खोजें',
      cyberSafety: 'साइबर सुरक्षा',
      about: 'हमारे बारे में',
    },
    langToggle: 'English',
    hero: {
      title: 'नमस्ते! आपकी डिजिटल सुरक्षा और सरकारी योजनाओं का साथी',
      subtitle:
        'संदिग्ध SMS, WhatsApp संदेश या लिंक को तुरंत AI से जांचें, ऑनलाइन धोखाधड़ी के संकेतों को समझें और अपने राज्य व योग्यता के अनुसार उपयोगी सरकारी योजनाओं की जानकारी पाएं।',
      primaryCta: 'संदेश की जांच करें',
      secondaryCta: 'सरकारी योजना खोजें',
      helplineLabel: 'राष्ट्रीय साइबर अपराध हेल्पलाइन',
      helplineNumber: '1930',
      helplineDesc: 'ऑनलाइन वित्तीय धोखाधड़ी होने पर तुरंत 1930 पर कॉल करें या cybercrime.gov.in पर रिपोर्ट दर्ज करें।',
    },
    featureCards: {
      heading: 'नागरिकों के लिए दो प्रमुख डिजिटल सेवाएं',
      subheading: 'तेज़, सरल और गोपनीयता-केंद्रित सहायता — बिना किसी व्यक्तिगत डेटा को संग्रहीत किए।',
      scamCard: {
        index: '01',
        title: 'स्कैम और फर्जी संदेश जांचकर्ता',
        desc: 'संदिग्ध SMS, WhatsApp संदेश, फर्जी KYC चेतावनी, APK फाइल या अनजान लिंक को पेस्ट करें। AI तुरंत जोखिम स्तर और सुरक्षा कदम बताएगा।',
        cta: 'स्कैम जांच शुरू करें',
      },
      schemeCard: {
        index: '02',
        title: 'सरकारी योजना खोजक',
        desc: 'अपना राज्य, आयु वर्ग, व्यवसाय और श्रेणी चुनें। सत्यापित सरकारी स्रोतों (.gov.in) पर आधारित प्रासंगिक योजनाओं की जानकारी पाएं।',
        cta: 'योजनाएं खोजें',
      },
    },
    scamChecker: {
      sectionTitle: 'AI स्कैम और फर्जी संदेश जांचकर्ता',
      sectionSubtitle:
        'संदिग्ध संदेश या लिंक नीचे पेस्ट करें। हम कभी भी आपका संदेश सर्वर पर सुरक्षित नहीं रखते और न ही किसी संदिग्ध लिंक को अपने आप खोलते हैं।',
      inputTypes: {
        sms: 'SMS संदेश',
        whatsapp: 'WhatsApp संदेश',
        link: 'संदिग्ध लिंक',
        email: 'संदिग्ध ईमेल',
      } as Record<ScamInputType, string>,
      placeholder: {
        sms: 'उदाहरण: "प्रिय ग्राहक, आपका बैंक KYC समाप्त हो गया है। खाता बंद होने से बचाने के लिए अभी http://kyc-verify-now.xyz पर क्लिक करें..."',
        whatsapp: 'उदाहरण: "बधाई हो! आपको घर बैठे पार्ट-टाइम नौकरी में ₹3,000 प्रतिदिन मिलेंगे या इस शादी कार्ड.apk को डाउनलोड करें..."',
        link: 'उदाहरण: "https://sbi-kyc-update-alert.com/login" (यह लिंक खोला नहीं जाएगा, केवल टेक्स्ट के रूप में जांचा जाएगा)',
        email: 'उदाहरण: "Dear User, Your income tax refund of ₹18,450 is pending. Submit your ATM PIN and OTP to claim..."',
      } as Record<ScamInputType, string>,
      samplesLabel: 'त्वरित परीक्षण उदाहरण:',
      analyzeBtn: 'AI से जांच करें',
      analyzingBtn: 'जांच हो रही है...',
      clearBtn: 'साफ़ करें',
      safetyBannerTitle: 'महत्वपूर्ण सुरक्षा नियम',
      safetyBannerText:
        'कभी भी अपना OTP, UPI PIN, पासवर्ड या बैंक खाता विवरण यहां या किसी अनजान व्यक्ति के साथ साझा न करें। AI विश्लेषण में गलती हो सकती है — किसी भी संदेश को 100% सुरक्षित न मानें।',
      resultTitle: 'AI जोखिम विश्लेषण रिपोर्ट',
      riskLabels: {
        'LOW RISK': 'LOW RISK · कम जोखिम',
        SUSPICIOUS: 'SUSPICIOUS · संदिग्ध',
        'HIGH RISK': 'HIGH RISK · उच्च जोखिम',
      },
      riskDescriptions: {
        'LOW RISK': 'कोई स्पष्ट चेतावनी संकेत नहीं मिला, फिर भी सावधानी आवश्यक है।',
        SUSPICIOUS: 'कुछ संदिग्ध संकेत पाए गए हैं — लिंक खोलने या भुगतान से बचें।',
        'HIGH RISK': 'धोखाधड़ी के कई गंभीर संकेत मिले हैं — तुरंत सावधान रहें।',
      },
      scoreLabel: 'AI जोखिम अनुमान स्कोर',
      hindiExplanationTitle: 'सरल हिंदी में व्याख्या',
      reasonsTitle: 'वर्गीकरण के मुख्य कारण',
      warningsTitle: 'पाए गए चेतावनी संकेत',
      actionsTitle: 'सुरक्षित रहने के लिए क्या करें',
      indicatorsTitle: 'पहचाने गए जोखिम कारक',
      copyBtn: 'परिणाम कॉपी करें',
      copiedBtn: 'कॉपी हो गया',
      shareBtn: 'साझा करें',
      sharedBtn: 'साझा करने के लिए तैयार',
      missingKeyTitle: 'सर्वर पर Gemini API Key सेट नहीं है',
      missingKeyDesc:
        'लाइव AI विश्लेषण के लिए सर्वर एनवायरनमेंट वेरिएबल (GEMINI_API_KEY) कॉन्फ़िगर होना आवश्यक है। डेवलपर कृपया README.md के निर्देश देखें।',
    },
    schemeFinder: {
      sectionTitle: 'AI सरकारी योजना खोजक',
      sectionSubtitle:
        'अपनी सामान्य प्रोफ़ाइल चुनें और केंद्रीय व राज्य सरकार की कल्याणकारी योजनाओं की जानकारी प्राप्त करें। हम केवल सामान्य जानकारी पूछते हैं, कोई आधार या बैंक विवरण नहीं।',
      fields: {
        state: 'राज्य / केंद्र शासित प्रदेश',
        ageGroup: 'आयु वर्ग',
        occupation: 'व्यवसाय / प्रोफ़ाइल',
        category: 'सामान्य श्रेणी',
        education: 'शिक्षा स्तर',
        interest: 'मुख्य रुचि / आवश्यकता',
      },
      searchBtn: 'योजनाएं खोजें',
      searchingBtn: 'सरकारी योजनाएं खोजी जा रही हैं...',
      portalNotice:
        'अस्वीकरण: JanSahayak AI कोई योजना नहीं बनाता। अंतिम पात्रता, लाभ राशि और आवेदन की अंतिम तिथि की पुष्टि केवल संबंधित आधिकारिक .gov.in पोर्टल पर ही करें।',
      resultsTitle: 'आपकी प्रोफ़ाइल के लिए प्रासंगिक योजनाएं',
      departmentLabel: 'विभाग / मंत्रालय',
      benefitsLabel: 'मुख्य लाभ',
      eligibilityLabel: 'पात्रता मानदंड',
      documentsLabel: 'आवश्यक दस्तावेज़',
      processLabel: 'आवेदन प्रक्रिया',
      visitPortalBtn: 'आधिकारिक वेबसाइट देखें',
      verifiedLabel: 'सत्यापित आधिकारिक डोमेन (.gov.in)',
      unverifiedLabel: 'असत्यापित — आधिकारिक पोर्टल पर जांचें',
      lastVerifiedLabel: 'अंतिम जांच दिनांक',
      groundingTitle: 'संदर्भित वेब स्रोत',
    },
    cyberSafety: {
      sectionTitle: 'साइबर सुरक्षा जागरूकता केंद्र',
      sectionSubtitle:
        'भारत में तेजी से बढ़ रहे ऑनलाइन फ्रॉड के 6 प्रमुख तरीकों को पहचानें और खुद व अपने परिवार को सुरक्षित रखें।',
      warningSignsHeading: 'प्रमुख चेतावनी संकेत',
      howToSafeHeading: 'बचाव के उपाय',
      learnMoreBtn: 'और जानें',
      closeModalBtn: 'बंद करें',
      helplineCallout: 'तुरंत मदद के लिए 1930 डायल करें',
    },
    about: {
      sectionTitle: 'JanSahayak AI के बारे में और गोपनीयता',
      independentTitle: 'स्वतंत्र AI जन-सूचना मंच',
      independentBody:
        'JanSahayak AI भारतीय नागरिकों को डिजिटल धोखाधड़ी से बचने और सार्वजनिक योजनाओं को आसानी से समझने में मदद करने के लिए बनाया गया एक स्वतंत्र AI-आधारित सूचना प्लेटफॉर्म है। यह भारत सरकार या किसी भी राज्य सरकार का आधिकारिक पोर्टल नहीं है।',
      privacyTitle: 'गोपनीयता और डेटा सुरक्षा प्रतिबद्धता',
      privacyPoints: [
        'हम उपयोगकर्ता द्वारा जांचे गए SMS, WhatsApp संदेश या व्यक्तिगत विवरण को अपने डेटाबेस में संग्रहीत नहीं करते।',
        'हम कभी भी आपका आधार नंबर, पैन कार्ड, बैंक खाता संख्या, OTP, UPI PIN या पासवर्ड नहीं मांगते।',
        'संदिग्ध लिंक को सुरक्षा कारणों से कभी भी स्वचालित रूप से खोला या प्री-लोड नहीं किया जाता।',
        'AI मॉडल द्वारा दिए गए परिणाम सूचनात्मक मार्गदर्शन हैं और इनमें त्रुटि संभव है।',
      ],
      disclaimerTitle: 'महत्वपूर्ण अस्वीकरण',
      disclaimerBody:
        'योजनाओं की पात्रता, वित्तीय सहायता और साइबर शिकायत से जुड़ी सभी अंतिम कार्रवाइयों के लिए कृपया हमेशा आधिकारिक सरकारी पोर्टल (.gov.in) और राष्ट्रीय साइबर अपराध हेल्पलाइन 1930 पर ही भरोसा करें।',
      contactTitle: 'संपर्क एवं सहायता',
      contactBody:
        'तकनीकी सुझाव, बग रिपोर्ट या सामुदायिक साइबर जागरूकता सहयोग के लिए आप इस प्रोजेक्ट रिपॉजिटरी के माध्यम से संपर्क कर सकते हैं। किसी भी वास्तविक साइबर अपराध की रिपोर्ट के लिए केवल 1930 या cybercrime.gov.in का उपयोग करें।',
    },
    footer: {
      copyright: '© 2026 JanSahayak AI · स्वतंत्र नागरिक डिजिटल सुरक्षा पहल',
      helpline: 'साइबर हेल्पलाइन: 1930 · पोर्टल: cybercrime.gov.in · योजना पोर्टल: myscheme.gov.in',
      privacyNote: 'कोई व्यक्तिगत डेटा संग्रहीत नहीं किया जाता।',
    },
  },
  en: {
    brandName: 'JanSahayak AI',
    tagline: 'Your Digital Safety & Government Scheme Companion.',
    independentNotice: 'Independent AI Public Information Service — Not an Official Government Portal',
    nav: {
      home: 'Home',
      scamChecker: 'Scam Checker',
      schemeFinder: 'Scheme Finder',
      cyberSafety: 'Cyber Safety',
      about: 'About',
    },
    langToggle: 'हिन्दी',
    hero: {
      title: 'Namaste! Your Companion for Digital Safety & Government Schemes',
      subtitle:
        'Check suspicious SMS, WhatsApp messages, or links with AI in seconds, understand online fraud risks clearly, and discover relevant Indian government schemes tailored to your profile.',
      primaryCta: 'Check a Suspicious Message',
      secondaryCta: 'Find Government Schemes',
      helplineLabel: 'National Cyber Crime Helpline',
      helplineNumber: '1930',
      helplineDesc: 'If you face online financial fraud, call 1930 immediately or report at cybercrime.gov.in.',
    },
    featureCards: {
      heading: 'Two Core Citizen Services',
      subheading: 'Fast, clear, and privacy-respecting assistance — without storing personal data.',
      scamCard: {
        index: '01',
        title: 'Scam & Fake Message Checker',
        desc: 'Paste suspicious SMS, WhatsApp forwards, fake KYC alerts, APK file prompts, or unknown links. Get an instant risk level, warning signs, and Hindi explanation.',
        cta: 'Open Scam Checker',
      },
      schemeCard: {
        index: '02',
        title: 'Government Scheme Finder',
        desc: 'Select your state, age group, occupation, and category to discover verified Central & State schemes with official .gov.in portal links.',
        cta: 'Explore Schemes',
      },
    },
    scamChecker: {
      sectionTitle: 'AI Scam & Fake Message Checker',
      sectionSubtitle:
        'Paste a suspicious message or URL below. We never store your pasted messages and never automatically open suspicious links.',
      inputTypes: {
        sms: 'SMS Text',
        whatsapp: 'WhatsApp Message',
        link: 'Suspicious Link',
        email: 'Suspicious Email',
      } as Record<ScamInputType, string>,
      placeholder: {
        sms: 'Example: "Dear Customer, your bank KYC has expired. Click http://kyc-verify-now.xyz immediately to avoid account block..."',
        whatsapp: 'Example: "Congratulations! Earn ₹3,000 daily from home or download this wedding-card.apk file..."',
        link: 'Example: "https://sbi-kyc-update-alert.com/login" (This link will NOT be opened; analyzed as text only)',
        email: 'Example: "Dear Taxpayer, your refund of ₹18,450 is pending. Share your ATM PIN and OTP to receive..."',
      } as Record<ScamInputType, string>,
      samplesLabel: 'Quick Test Examples:',
      analyzeBtn: 'Analyze with AI',
      analyzingBtn: 'Analyzing...',
      clearBtn: 'Clear',
      safetyBannerTitle: 'Important Safety Rules',
      safetyBannerText:
        'Never enter OTP, UPI PIN, passwords, or bank account credentials here or share them with anyone. AI analysis can make mistakes — never assume any message is 100% safe.',
      resultTitle: 'AI Risk Analysis Report',
      riskLabels: {
        'LOW RISK': 'LOW RISK',
        SUSPICIOUS: 'SUSPICIOUS',
        'HIGH RISK': 'HIGH RISK',
      },
      riskDescriptions: {
        'LOW RISK': 'No obvious warning signs detected, but always stay cautious and verify officially.',
        SUSPICIOUS: 'Some suspicious indicators found — avoid clicking links or sending money.',
        'HIGH RISK': 'Multiple strong fraud indicators found — do not respond or click any link.',
      },
      scoreLabel: 'AI Estimated Risk Score',
      hindiExplanationTitle: 'Clear Hindi Explanation',
      reasonsTitle: 'Reasons for Classification',
      warningsTitle: 'Warning Signs Found',
      actionsTitle: 'Recommended Safe Actions',
      indicatorsTitle: 'Detected Risk Indicators',
      copyBtn: 'Copy Result',
      copiedBtn: 'Copied',
      shareBtn: 'Share Result',
      sharedBtn: 'Ready to Share',
      missingKeyTitle: 'Gemini API Key Not Configured on Server',
      missingKeyDesc:
        'Live AI analysis requires GEMINI_API_KEY in server environment variables. Developers: see README.md for setup instructions.',
    },
    schemeFinder: {
      sectionTitle: 'AI Government Scheme Finder',
      sectionSubtitle:
        'Choose general profile filters to discover real Central & State schemes. We never ask for Aadhaar numbers, PAN, or sensitive personal records.',
      fields: {
        state: 'State / Union Territory',
        ageGroup: 'Age Group',
        occupation: 'Occupation / Profile',
        category: 'General Category',
        education: 'Education Level',
        interest: 'Primary Interest',
      },
      searchBtn: 'Find Schemes',
      searchingBtn: 'Searching verified schemes...',
      portalNotice:
        'Disclaimer: JanSahayak AI never invents schemes. Always verify final eligibility, financial benefits, and deadlines on the official .gov.in portal.',
      resultsTitle: 'Relevant Schemes for Your Profile',
      departmentLabel: 'Department / Ministry',
      benefitsLabel: 'Main Benefits',
      eligibilityLabel: 'Eligibility Criteria',
      documentsLabel: 'Required Documents',
      processLabel: 'Application Process',
      visitPortalBtn: 'Visit Official Portal',
      verifiedLabel: 'Official .gov.in Domain',
      unverifiedLabel: 'Unverified — Check Official Portal',
      lastVerifiedLabel: 'Last Verified',
      groundingTitle: 'Referenced Web Sources',
    },
    cyberSafety: {
      sectionTitle: 'Cyber Safety Awareness Hub',
      sectionSubtitle:
        'Learn how India’s 6 most common online scams work, spot red flags early, and protect your family.',
      warningSignsHeading: 'Key Warning Signs',
      howToSafeHeading: 'How to Stay Safe',
      learnMoreBtn: 'Learn More',
      closeModalBtn: 'Close',
      helplineCallout: 'Call 1930 immediately for cyber fraud help',
    },
    about: {
      sectionTitle: 'About JanSahayak AI & Privacy',
      independentTitle: 'Independent AI Public Information Platform',
      independentBody:
        'JanSahayak AI is an independent AI-powered information service built to help Indian citizens recognize digital scams and discover public welfare schemes easily. It is NOT an official Government of India or State Government website.',
      privacyTitle: 'Privacy & Data Protection Commitment',
      privacyPoints: [
        'We do not store your checked SMS, WhatsApp messages, or query history in any persistent database.',
        'We never ask for Aadhaar numbers, PAN, bank account numbers, OTPs, UPI PINs, or passwords.',
        'Suspicious URLs pasted for inspection are never opened or fetched automatically by the app.',
        'AI analysis is informational guidance and can make mistakes.',
      ],
      disclaimerTitle: 'Important Disclaimer',
      disclaimerBody:
        'For final scheme eligibility, official applications, and cybercrime complaints, always rely exclusively on official government portals (.gov.in) and the National Cyber Crime Helpline 1930.',
      contactTitle: 'Contact & Support',
      contactBody:
        'For technical feedback or community cyber-literacy collaboration, reach out via the project repository. For real cybercrime emergencies, dial 1930 or visit cybercrime.gov.in.',
    },
    footer: {
      copyright: '© 2026 JanSahayak AI · Independent Citizen Digital Safety Initiative',
      helpline: 'Cyber Helpline: 1930 · Report: cybercrime.gov.in · Schemes: myscheme.gov.in',
      privacyNote: 'No personal data stored.',
    },
  },
} as const;

export const SCAM_SAMPLES: Array<{
  id: string;
  label: Record<Language, string>;
  type: ScamInputType;
  text: string;
}> = [
  {
    id: 'kyc',
    label: { hi: 'फर्जी बैंक KYC SMS', en: 'Fake Bank KYC SMS' },
    type: 'sms',
    text: 'URGENT: Your SBI YONO account will be blocked today due to pending PAN KYC. Update immediately at http://sbi-kyc-fast-update.xyz or call 98XXXXXX12.',
  },
  {
    id: 'apk',
    label: { hi: 'फर्जी शादी कार्ड APK', en: 'Fake Wedding Card APK' },
    type: 'whatsapp',
    text: 'नमस्ते, हमारे बेटे की शादी 25 नवंबर को है। कृपया आमंत्रण पत्र देखने के लिए Wedding_Invitation_2026.apk फाइल डाउनलोड और इंस्टॉल करें।',
  },
  {
    id: 'digital-arrest',
    label: { hi: 'डिजिटल अरेस्ट धमकी', en: 'Digital Arrest Threat' },
    type: 'whatsapp',
    text: 'CBI Cyber Cell Notice: An illegal parcel with your Aadhaar was seized at Mumbai airport. Join Skype video call within 30 minutes for Digital Arrest verification and transfer ₹45,000 security deposit to avoid immediate jail.',
  },
  {
    id: 'job',
    label: { hi: 'फर्जी पार्ट-टाइम जॉब', en: 'Fake Part-Time Job' },
    type: 'sms',
    text: 'Congratulations! Work from home liking YouTube videos and earn ₹2500-₹5000 daily. Join Telegram task group and pay ₹999 registration fee to unlock VIP withdrawal.',
  },
];

export const INDIAN_STATES = [
  { value: 'All India (Central Schemes)', hi: 'सम्पूर्ण भारत (केंद्रीय योजनाएं)', en: 'All India (Central Schemes)' },
  { value: 'Uttar Pradesh', hi: 'उत्तर प्रदेश', en: 'Uttar Pradesh' },
  { value: 'Maharashtra', hi: 'महाराष्ट्र', en: 'Maharashtra' },
  { value: 'Bihar', hi: 'बिहार', en: 'Bihar' },
  { value: 'Madhya Pradesh', hi: 'मध्य प्रदेश', en: 'Madhya Pradesh' },
  { value: 'Rajasthan', hi: 'राजस्थान', en: 'Rajasthan' },
  { value: 'Delhi', hi: 'दिल्ली (NCT)', en: 'Delhi (NCT)' },
  { value: 'Gujarat', hi: 'गुजरात', en: 'Gujarat' },
  { value: 'Tamil Nadu', hi: 'तमिलनाडु', en: 'Tamil Nadu' },
  { value: 'Karnataka', hi: 'कर्नाटक', en: 'Karnataka' },
  { value: 'West Bengal', hi: 'पश्चिम बंगाल', en: 'West Bengal' },
  { value: 'Haryana', hi: 'हरियाणा', en: 'Haryana' },
  { value: 'Punjab', hi: 'पंजाब', en: 'Punjab' },
  { value: 'Odisha', hi: 'ओडिशा', en: 'Odisha' },
  { value: 'Assam', hi: 'असम', en: 'Assam' },
  { value: 'Jharkhand', hi: 'झारखंड', en: 'Jharkhand' },
  { value: 'Chhattisgarh', hi: 'छत्तीसगढ़', en: 'Chhattisgarh' },
  { value: 'Uttarakhand', hi: 'उत्तराखंड', en: 'Uttarakhand' },
  { value: 'Telangana', hi: 'तेलंगाना', en: 'Telangana' },
  { value: 'Andhra Pradesh', hi: 'आंध्र प्रदेश', en: 'Andhra Pradesh' },
  { value: 'Kerala', hi: 'केरल', en: 'Kerala' },
];

export const AGE_GROUPS = [
  { value: 'Under 18', hi: '18 वर्ष से कम', en: 'Under 18' },
  { value: '18-25', hi: '18 - 25 वर्ष', en: '18 - 25 years' },
  { value: '26-40', hi: '26 - 40 वर्ष', en: '26 - 40 years' },
  { value: '41-60', hi: '41 - 60 वर्ष', en: '41 - 60 years' },
  { value: '60+', hi: '60+ वर्ष (वरिष्ठ नागरिक)', en: '60+ years (Senior Citizen)' },
];

export const OCCUPATIONS = [
  { value: 'Student', hi: 'छात्र / छात्रा', en: 'Student' },
  { value: 'Farmer', hi: 'किसान', en: 'Farmer' },
  { value: 'Worker', hi: 'श्रमिक / कामगार', en: 'Worker' },
  { value: 'Business owner', hi: 'व्यवसायी / स्व-रोजगार', en: 'Business Owner' },
  { value: 'Other', hi: 'अन्य / गृहिणी / वरिष्ठ नागरिक', en: 'Other / Homemaker / Senior' },
];

export const CATEGORIES = [
  { value: 'General', hi: 'सामान्य (General)', en: 'General' },
  { value: 'OBC', hi: 'अन्य पिछड़ा वर्ग (OBC)', en: 'OBC' },
  { value: 'SC', hi: 'अनुसूचित जाति (SC)', en: 'SC' },
  { value: 'ST', hi: 'अनुसूचित जनजाति (ST)', en: 'ST' },
  { value: 'EWS', hi: 'आर्थिक रूप से कमजोर वर्ग (EWS)', en: 'EWS' },
  { value: 'Women / Minority / Divyangjan', hi: 'महिला / अल्पसंख्यक / दिव्यांगजन', en: 'Women / Minority / Divyangjan' },
];

export const EDUCATION_LEVELS = [
  { value: 'Below 10th', hi: '10वीं से कम', en: 'Below 10th' },
  { value: '10th / 12th Pass', hi: '10वीं / 12वीं पास', en: '10th / 12th Pass' },
  { value: 'Graduate / Diploma', hi: 'स्नातक / डिप्लोमा / ITI', en: 'Graduate / Diploma / ITI' },
  { value: 'Postgraduate', hi: 'स्नातकोत्तर / उच्च शिक्षा', en: 'Postgraduate' },
  { value: 'No Formal Education', hi: 'औपचारिक शिक्षा नहीं', en: 'No Formal Education' },
];

export const INTEREST_AREAS = [
  { value: 'Education & Scholarships', hi: 'शिक्षा और छात्रवृत्ति', en: 'Education & Scholarships' },
  { value: 'Agriculture & Farming', hi: 'कृषि और किसान सहायता', en: 'Agriculture & Farming' },
  { value: 'Health & Insurance', hi: 'स्वास्थ्य और बीमा', en: 'Health & Insurance' },
  { value: 'Housing & Shelter', hi: 'आवास और घर निर्माण', en: 'Housing & Shelter' },
  { value: 'Business & Mudra Loans', hi: 'व्यापार, स्टार्टअप और ऋण', en: 'Business & Mudra Loans' },
  { value: 'Skill Training & Employment', hi: 'कौशल प्रशिक्षण और रोजगार', en: 'Skill Training & Employment' },
  { value: 'Pension & Social Security', hi: 'पेंशन और सामाजिक सुरक्षा', en: 'Pension & Social Security' },
  { value: 'Women & Child Welfare', hi: 'महिला एवं बाल कल्याण', en: 'Women & Child Welfare' },
];

export const CYBER_SAFETY_TOPICS: CyberSafetyTopic[] = [
  {
    id: 'digital-arrest',
    number: '01',
    title: {
      hi: 'डिजिटल अरेस्ट स्कैम (Digital Arrest Scam)',
      en: 'Digital Arrest Scam',
    },
    summary: {
      hi: 'ठग खुद को पुलिस, CBI, ED या कस्टम अधिकारी बताकर वीडियो कॉल पर डराते हैं और "डिजिटल अरेस्ट" के नाम पर पैसे मांगते हैं।',
      en: 'Fraudsters impersonate Police, CBI, ED, or Customs officials on video calls, threaten arrest, and extort money to "clear" fake cases.',
    },
    warningSigns: {
      hi: [
        'अनजान नंबर से वीडियो कॉल पर नकली पुलिस स्टेशन या वर्दी दिखाना',
        'आधार से जुड़ा गैरकानूनी पार्सल या मनी लॉन्ड्रिंग केस बताने की धमकी',
        '"कॉल मत काटो" और "किसी को मत बताओ" जैसा मानसिक दबाव डालना',
        'सत्यापन या जमानत के नाम पर तुरंत पैसे ट्रांसफर करने को कहना',
      ],
      en: [
        'Video call from unknown numbers showing fake police uniforms or backdrops',
        'Claims of illegal parcels or money laundering linked to your Aadhaar',
        'Pressure not to hang up or speak to family/friends',
        'Demands to transfer money to a "safe/RBI" account for verification',
      ],
    },
    howToStaySafe: {
      hi: [
        'भारतीय कानून में "डिजिटल अरेस्ट" जैसा कोई प्रावधान नहीं है।',
        'कोई भी असली पुलिस या एजेंसी वीडियो कॉल पर पैसे नहीं मांगती।',
        'तुरंत कॉल काटें, नंबर ब्लॉक करें और 1930 पर रिपोर्ट करें।',
      ],
      en: [
        'There is NO concept of "Digital Arrest" under Indian law.',
        'Real law enforcement never demands money or video-call detention.',
        'Disconnect immediately, verify with local police, and dial 1930.',
      ],
    },
    detailedGuide: {
      hi: 'डिजिटल अरेस्ट स्कैम में अपराधी पहले एक ऑटोमेटेड कॉल (IVR) करते हैं कि आपका सिम बंद होने वाला है या आपके नाम से अवैध पार्सल पकड़ा गया है। फिर वे कॉल को तथाकथित "CBI/साइबर सेल" को ट्रांसफर करते हैं और Skype या WhatsApp वीडियो कॉल पर नकली अधिकारी बनकर आपको घंटों कैमरे के सामने बिठाए रखते हैं। याद रखें: कोई भी जांच एजेंसी ऑनलाइन गिरफ्तारी या जमानत के पैसे नहीं लेती। डरें नहीं, कॉल काटें और तुरंत अपने परिवार व 1930 को सूचित करें।',
      en: 'In a Digital Arrest scam, callers first claim a parcel or SIM misuse is tied to your Aadhaar, then transfer you to fake CBI or Cyber Cell officers on Skype/WhatsApp video. They keep victims isolated on camera for hours and demand transfers for "case clearance." Remember: Indian law enforcement never conducts arrests over video calls or collects clearance deposits. Hang up immediately and report to 1930.',
    },
    immediateAction: {
      hi: 'तुरंत कॉल काटें, स्क्रीनशॉट सुरक्षित रखें और 1930 या cybercrime.gov.in पर शिकायत दर्ज करें।',
      en: 'Disconnect the call immediately, save call logs/screenshots, and report at 1930 or cybercrime.gov.in.',
    },
  },
  {
    id: 'fake-apk',
    number: '02',
    title: {
      hi: 'फर्जी APK ऐप्स (Fake APK Applications)',
      en: 'Fake APK Applications',
    },
    summary: {
      hi: 'WhatsApp पर शादी का कार्ड, बिजली बिल, ट्रैफिक चालान या बैंक KYC के नाम पर .apk फाइल भेजकर फोन का पूरा नियंत्रण चुराया जाता है।',
      en: 'Scammers send malicious .apk files disguised as wedding invites, e-challans, or bank KYC updates to steal SMS OTPs and banking access.',
    },
    warningSigns: {
      hi: [
        'WhatsApp या SMS में .pdf के बजाय .apk फाइल का आना (जैसे WeddingCard.apk)',
        'Play Store के बाहर से "Unknown Sources" अनुमति मांगकर ऐप इंस्टॉल कराना',
        'इंस्टॉल होते ही SMS, कॉल और स्क्रीन एक्सेस की अनुमति मांगना',
      ],
      en: [
        'Receiving an .apk file instead of a PDF/image (e.g., E-Challan.apk, Invite.apk)',
        'Prompts to enable "Install from Unknown Sources" outside Google Play Store',
        'Apps requesting SMS reading or Accessibility permissions',
      ],
    },
    howToStaySafe: {
      hi: [
        'WhatsApp पर आई किसी भी .apk फाइल को कभी डाउनलोड या इंस्टॉल न करें।',
        'केवल आधिकारिक Google Play Store या Apple App Store से ही ऐप डाउनलोड करें।',
        'गलती से इंस्टॉल हो जाए तो तुरंत मोबाइल इंटरनेट बंद करें, ऐप हटाएं और बैंक को सूचित करें।',
      ],
      en: [
        'Never install .apk files received via WhatsApp, Telegram, or SMS.',
        'Download apps strictly from Google Play Store or Apple App Store.',
        'If installed accidentally, turn off mobile data/Wi-Fi, uninstall the app, and freeze bank cards.',
      ],
    },
    detailedGuide: {
      hi: 'फर्जी APK फाइलें असल में स्पाइवेयर होती हैं। जैसे ही आप इन्हें इंस्टॉल करते हैं, ये आपके फोन के SMS (जिसमें बैंक OTP आते हैं) को चुपचाप ठगों के सर्वर पर भेजने लगती हैं। शादी के निमंत्रण, PM किसान योजना, RBL/SBI KYC या ट्रैफिक चालान के नाम पर ऐसी फाइलें भेजी जाती हैं। सुरक्षा के लिए हमेशा फाइल का एक्सटेंशन (.apk बनाम .pdf) जांचें।',
      en: 'Malicious APK files act as banking trojans. Once installed, they forward incoming SMS OTPs and notifications silently to scammers without you noticing. Always inspect file extensions before tapping and keep Play Protect enabled.',
    },
    immediateAction: {
      hi: 'इंटरनेट बंद करें, संदिग्ध ऐप अनइंस्टॉल करें, पासवर्ड बदलें और बैंक हेल्पलाइन व 1930 पर कॉल करें।',
      en: 'Disconnect internet, uninstall the suspicious app, change banking PINs from another device, and call 1930.',
    },
  },
  {
    id: 'upi-qr',
    number: '03',
    title: {
      hi: 'UPI QR कोड और पेमेंट फ्रॉड (UPI QR Fraud)',
      en: 'UPI QR Code Fraud',
    },
    summary: {
      hi: 'सामान खरीदने-बेचने या रिफंड देने के बहाने ठग QR कोड स्कैन करने या UPI PIN डालने को कहते हैं — पैसे आने की जगह खाते से कट जाते हैं।',
      en: 'Fraudsters trick sellers or refund seekers into scanning a QR code or approving a collect request with UPI PIN, draining their account instead.',
    },
    warningSigns: {
      hi: [
        '"पैसे प्राप्त करने के लिए QR कोड स्कैन करें" कहना',
        'रिफंड या कैशबैक लेने के लिए UPI PIN डालने को कहना',
        'OLX/Facebook Marketplace पर बिना देखे तुरंत एडवांस देने का दिखावा करना',
      ],
      en: [
        'Asking you to scan a QR code or enter UPI PIN to "receive" money',
        'Sending a UPI "Pay/Collect" request disguised as a refund or cashback',
        'Rushing advance payment on online classifieds without inspecting items',
      ],
    },
    howToStaySafe: {
      hi: [
        'पैसे प्राप्त करने के लिए कभी भी QR कोड स्कैन नहीं करना पड़ता और न ही UPI PIN डालना होता है।',
        'UPI PIN केवल तब डालें जब आप किसी को पैसे भेज रहे हों।',
        'अनजान "Collect Request" को तुरंत Decline करें।',
      ],
      en: [
        'You NEVER need to scan a QR code or enter a UPI PIN to receive money.',
        'Enter your UPI PIN ONLY when you intend to send money out of your account.',
        'Decline unexpected payment requests immediately.',
      ],
    },
    detailedGuide: {
      hi: 'UPI प्रणाली में एक सरल नियम है: UPI PIN हमेशा खाते से पैसे निकालने (Debit) के लिए होता है, पैसे पाने (Credit) के लिए नहीं। यदि कोई कहे कि आर्मी अधिकारी/दुकानदार होने के नाते पहले ₹1 या QR स्कैन से सत्यापन होगा, तो यह 100% धोखाधड़ी है।',
      en: 'In India’s UPI system, a PIN is strictly required only to authorize outgoing payments—never to receive funds. If any buyer or customer-care caller asks you to scan a QR or enter your PIN to get a refund or advance, decline immediately.',
    },
    immediateAction: {
      hi: 'यदि पैसे कट गए हैं, तो तुरंत 1930 डायल करें और अपने बैंक/UPI ऐप में ट्रांजेक्शन रिपोर्ट करें।',
      en: 'If money is debited, call 1930 within the golden hour and raise a dispute in your UPI app and bank.',
    },
  },
  {
    id: 'fake-jobs',
    number: '04',
    title: {
      hi: 'फर्जी नौकरी और वर्क-फ्रॉम-होम ठगी (Fake Job Offers)',
      en: 'Fake Job Offers',
    },
    summary: {
      hi: 'वीडियो लाइक करने, डेटा एंट्री या सरकारी/बड़ी कंपनी में नौकरी दिलाने के नाम पर रजिस्ट्रेशन फीस या "टास्क डिपॉजिट" वसूला जाता है।',
      en: 'Scammers lure job seekers with easy work-from-home tasks or fake corporate offers, then demand registration fees or prepaid "task deposits."',
    },
    warningSigns: {
      hi: [
        'बिना इंटरव्यू के WhatsApp/Telegram पर तुरंत जॉब ऑफर लेटर',
        'YouTube वीडियो लाइक करने या होटल रेटिंग के बदले रोज़ हजारों रुपये का लालच',
        'रजिस्ट्रेशन फीस, ट्रेनिंग किट, लैपटॉप सिक्योरिटी या VIP टास्क के लिए पैसे मांगना',
      ],
      en: [
        'Instant offer letters on WhatsApp/Telegram without real interviews',
        'Promises of ₹2,000–₹5,000 daily for liking videos or rating listings',
        'Requests for registration fees, security deposits, or prepaid "task" upgrades',
      ],
    },
    howToStaySafe: {
      hi: [
        'कोई भी असली नियोक्ता नौकरी देने के लिए आपसे पैसे या डिपॉजिट नहीं मांगता।',
        'केवल कंपनी के आधिकारिक करियर पोर्टल या सरकारी वेबसाइट (.gov.in) पर ही नौकरी की पुष्टि करें।',
        'शुरुआती ₹100-₹200 मिलने के बाद बड़े निवेश के लालच में न आएं।',
      ],
      en: [
        'Legitimate employers never ask candidates to pay fees or deposits for a job.',
        'Verify vacancies only on official company career pages or .gov.in portals.',
        'Do not fall for "task" scams that pay a small amount initially to build trust.',
      ],
    },
    detailedGuide: {
      hi: 'टेलीग्राम टास्क स्कैम में ठग पहले 2-3 आसान काम करवाकर ₹150-₹300 खाते में भेजते हैं ताकि विश्वास बन जाए। फिर "प्रीपेड टास्क" में ₹5,000 से ₹50,000 जमा करने को कहते हैं और पैसे फंसा लेते हैं। सरकारी नौकरियों की जानकारी हमेशा रोजगार समाचार या आधिकारिक .gov.in साइट से ही लें।',
      en: 'Task-based job scams often pay a tiny reward upfront to gain trust, then demand large prepaid deposits on Telegram groups before blocking withdrawals. Always verify job ads on official portals.',
    },
    immediateAction: {
      hi: 'और पैसे बिल्कुल जमा न करें, चैट सुरक्षित रखें और 1930 पर रिपोर्ट करें।',
      en: 'Stop paying immediately, preserve Telegram/WhatsApp chat exports, and report at 1930.',
    },
  },
  {
    id: 'otp-pin',
    number: '05',
    title: {
      hi: 'OTP और PIN धोखाधड़ी (OTP & PIN Fraud)',
      en: 'OTP and PIN Fraud',
    },
    summary: {
      hi: 'बैंक कर्मचारी, कूरियर बॉय या कस्टमर केयर बनकर कॉल किया जाता है और किसी बहाने से आपका OTP या कार्ड पिन पूछा जाता है।',
      en: 'Callers pose as bank staff, delivery agents, or customer support to trick you into reading out SMS OTPs, CVV, or ATM PINs.',
    },
    warningSigns: {
      hi: [
        '"सिर्फ डिलीवरी कैंसिल करने के लिए OTP बता दें" जैसा बहाना',
        'क्रेडिट कार्ड रिवार्ड पॉइंट एक्सपायर होने या लिमिट बढ़ाने का कॉल',
        'स्क्रीन शेयरिंग ऐप (AnyDesk/TeamViewer) डाउनलोड करने को कहना',
      ],
      en: [
        'Delivery agents asking for a "cancellation OTP" that is actually a bank/WhatsApp OTP',
        'Calls claiming reward points are expiring or offering free credit-limit upgrades',
        'Requests to install screen-sharing apps like AnyDesk or QuickSupport',
      ],
    },
    howToStaySafe: {
      hi: [
        'OTP आपकी डिजिटल तिजोरी की चाबी है — इसे किसी भी कीमत पर किसी को न बताएं।',
        'OTP आने पर पूरा SMS ध्यान से पढ़ें कि वह किस काम (भुगतान/लॉगिन/डिलीवरी) के लिए है।',
        'बैंक कभी फोन पर OTP, CVV या ATM PIN नहीं पूछते।',
      ],
      en: [
        'Never share any OTP, CVV, or PIN with callers, even if they claim to be bank staff.',
        'Read the full SMS text carefully to verify what the OTP authorizes.',
        'Never install remote screen-sharing apps for customer support.',
      ],
    },
    detailedGuide: {
      hi: 'आजकल डिलीवरी कैंसिल करने या सिम अपग्रेड के बहाने भी बैंक ट्रांजेक्शन या कॉल-फॉरवर्डिंग का OTP लिया जाता है। किसी भी व्यक्ति को OTP बताने से पहले हमेशा SMS के शब्द पढ़ें। यदि किसी कस्टमर केयर नंबर की जरूरत हो, तो Google सर्च के बजाय बैंक की आधिकारिक वेबसाइट या पासबुक/कार्ड के पीछे छपे नंबर का ही उपयोग करें।',
      en: 'Fraudsters frequently disguise banking or SIM-swap OTPs as delivery cancellation codes or reward verifications. Always read the full SMS before sharing any code, and never dial customer care numbers picked blindly from unverified search ads.',
    },
    immediateAction: {
      hi: 'तुरंत बैंक कार्ड ब्लॉक करें, नेटबैंकिंग पासवर्ड बदलें और 1930 पर कॉल करें।',
      en: 'Block your cards immediately via your official banking app and call 1930.',
    },
  },
  {
    id: 'phishing',
    number: '06',
    title: {
      hi: 'फिशिंग वेबसाइट्स (Phishing Websites)',
      en: 'Phishing Websites',
    },
    summary: {
      hi: 'असली बैंक, सरकारी पोर्टल या बिजली कंपनी जैसी दिखने वाली नकली वेबसाइट बनाकर लॉगिन पासवर्ड और कार्ड विवरण चुराए जाते हैं।',
      en: 'Fake lookalike websites mimic trusted banks, utility boards, or government portals to steal login passwords and card credentials.',
    },
    warningSigns: {
      hi: [
        'अजीब या मिलती-जुलती स्पेलिंग वाले डोमेन (जैसे sbi-kyc-update.xyz, pm-yojana-free.com)',
        'सरकारी योजना के नाम पर .gov.in की जगह .com/.in/.xyz लिंक होना',
        'मुफ्त लैपटॉप, मुफ्त रिचार्ज या तुरंत टैक्स रिफंड का लालच देकर फॉर्म भरवाना',
      ],
      en: [
        'Lookalike URLs with hyphens or strange extensions (e.g., sbi-update.xyz)',
        'Fake government scheme portals using .com/.xyz instead of official .gov.in',
        'Forms promising free laptops, recharges, or tax refunds after entering card details',
      ],
    },
    howToStaySafe: {
      hi: [
        'सरकारी वेबसाइट हमेशा .gov.in या .nic.in पर समाप्त होती हैं।',
        'SMS या WhatsApp में आए शॉर्ट लिंक (bit.ly, tinyurl) पर सीधे क्लिक करने से बचें।',
        'बैंकिंग के लिए हमेशा ब्राउज़र में खुद सही पता टाइप करें या आधिकारिक ऐप का उपयोग करें।',
      ],
      en: [
        'Authentic Indian government sites end in .gov.in or .nic.in.',
        'Avoid tapping shortened or unfamiliar links in SMS and WhatsApp forwards.',
        'Open your bank or portal via official apps or manually typed bookmarks.',
      ],
    },
    detailedGuide: {
      hi: 'फिशिंग वेबसाइट बिल्कुल असली वेबसाइट की नकल होती हैं — वही रंग, वही लोगो और वैसा ही फॉर्म। लेकिन ऊपर एड्रेस बार में लिंक नकली होता है। जब आप वहां अपना यूज़रनेम, पासवर्ड या कार्ड नंबर भरते हैं, तो वह सीधे अपराधी के पास चला जाता है। किसी भी संदिग्ध लिंक को खोलने से पहले JanSahayak AI स्कैम चेकर में टेक्स्ट के रूप में जांचें।',
      en: 'Phishing pages copy the exact branding of trusted banks and public portals while hiding behind fake domain names. Always check the domain suffix (.gov.in for government) and inspect suspicious links as text in JanSahayak AI before ever visiting them.',
    },
    immediateAction: {
      hi: 'यदि आपने किसी नकली साइट पर जानकारी भर दी है, तो तुरंत पासवर्ड बदलें, कार्ड ब्लॉक करें और 1930 पर सूचित करें।',
      en: 'If you entered credentials on a fake site, change passwords immediately, block cards, and call 1930.',
    },
  },
];
