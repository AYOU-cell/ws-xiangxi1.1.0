import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '../lib/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['en-US'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Function to detect the best language based on browser settings
function detectLanguage(): Language {
  // First, check if user has a saved preference
  const savedLanguage = localStorage.getItem('preferred-language');
  if (savedLanguage) {
    return savedLanguage as Language;
  }

  // Get browser languages (navigator.languages provides an array of preferred languages)
  const browserLanguages = navigator.languages || [navigator.language];
  
  // Map of browser language codes to our supported languages
  const languageMap: Record<string, Language> = {
    'en-US': 'en-US',
    'en': 'en-US',
    'en-GB': 'en-GB',
    'en-UK': 'en-GB',
    'de': 'de',
    'de-DE': 'de',
    'de-AT': 'de',
    'de-CH': 'de',
    'fr': 'fr',
    'fr-FR': 'fr',
    'fr-BE': 'fr',
    'fr-CH': 'fr',
    'fr-CA': 'fr',
    'es': 'es',
    'es-ES': 'es',
    'es-MX': 'es',
    'es-AR': 'es',
    'es-CO': 'es',
    'es-CL': 'es',
    'it': 'it',
    'it-IT': 'it',
    'it-CH': 'it',
  };

  // Try to find a matching language
  for (const browserLang of browserLanguages) {
    const normalizedLang = browserLang.toLowerCase();
    
    // First try exact match
    if (languageMap[browserLang]) {
      return languageMap[browserLang];
    }
    
    // Then try normalized match
    if (languageMap[normalizedLang]) {
      return languageMap[normalizedLang];
    }
    
    // Try just the language code without region (e.g., 'en' from 'en-AU')
    const langCode = browserLang.split('-')[0].toLowerCase();
    if (languageMap[langCode]) {
      return languageMap[langCode];
    }
  }

  // Default to en-US if no match found
  return 'en-US';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    return detectLanguage();
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = translations[language];

  // Log the detected language for debugging (optional)
  useEffect(() => {
    console.log(`Language detected: ${language}`);
    console.log(`Browser languages: ${navigator.languages?.join(', ') || navigator.language}`);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}