import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-[#1A1F36] text-white px-5 py-12">
      <div className="max-w-md mx-auto">
        {/* Logo */}
        <div className="text-center mb-8">
          <h3 className="text-2xl text-white mb-2">{t.footer.name}</h3>
          <p className="text-white/70 text-sm">{t.footer.tagline}</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-white/5 rounded-xl p-5 mb-6 border border-white/10">
          <h4 className="text-white mb-2">{t.footer.disclaimerTitle}</h4>
          <p className="text-white/70 text-sm">
            {t.footer.disclaimer}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-6"></div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          <p className="mt-2">{t.footer.mission}</p>
        </div>
      </div>
    </footer>
  );
}