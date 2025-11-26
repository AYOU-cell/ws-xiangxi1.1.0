import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { languages } from '../lib/translations';

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === language);

  // Get 2-letter code from language code
  const getShortCode = (code: string) => {
    return code.split('-')[0].toUpperCase();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-20 right-6 z-50" ref={dropdownRef}>
      {/* Prominent White Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 active:scale-95"
        aria-label="Select language"
      >
        <span className="text-2xl">{currentLanguage?.flag}</span>
        <span className="text-[#1A73E8] font-medium">{currentLanguage?.name}</span>
        <ChevronDown className={`w-5 h-5 text-[#1A73E8] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 transition-colors text-left ${
                language === lang.code ? 'bg-[#1A73E8]/5' : ''
              }`}
            >
              {/* Flag Icon */}
              <span className="text-2xl flex-shrink-0">{lang.flag}</span>
              
              {/* Language Code + Name */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className={`text-sm font-semibold ${
                    language === lang.code ? 'text-[#1A73E8]' : 'text-[#1A1F36]'
                  }`}>
                    {getShortCode(lang.code)}
                  </span>
                  <span className={`text-sm ${
                    language === lang.code ? 'text-[#1A73E8]' : 'text-gray-600'
                  }`}>
                    {lang.name}
                  </span>
                </div>
              </div>

              {/* Check Mark for Selected */}
              {language === lang.code && (
                <span className="text-[#1A73E8] flex-shrink-0">✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}