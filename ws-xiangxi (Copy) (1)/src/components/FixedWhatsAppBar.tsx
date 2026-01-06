import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FixedWhatsAppBar() {
  const { t } = useLanguage();
  
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-transparent">
      <div className="max-w-md mx-auto px-5 py-3">
        <a
          href="https://wa.me/12182135478"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3 px-6 rounded-xl shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">{t.whatsapp.chatButton}</span>
        </a>
      </div>
    </div>
  );
}
