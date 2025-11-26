import { Rocket, DollarSign, Handshake } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function BenefitsSection() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-[#F3F7FB] px-5 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-[#1A1F36] mb-3 text-center">{t.benefits.title}</h2>
        <p className="text-gray-600 text-center mb-10">
          {t.benefits.subtitle}
        </p>

        <div className="space-y-5">
          {/* Benefit 1 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-14 h-14 rounded-xl bg-[#1A73E8]/10 flex items-center justify-center mb-4">
              <Rocket className="w-7 h-7 text-[#1A73E8]" />
            </div>
            <h3 className="text-[#1A1F36] mb-2">{t.benefits.benefit1Title}</h3>
            <p className="text-gray-600 mb-2">{t.benefits.benefit1Description}</p>
            <div className="inline-block bg-[#1A73E8]/5 px-3 py-1 rounded-full">
              <p className="text-sm text-[#1A73E8]">{t.benefits.benefit1Badge}</p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-14 h-14 rounded-xl bg-[#3BB273]/10 flex items-center justify-center mb-4">
              <DollarSign className="w-7 h-7 text-[#3BB273]" />
            </div>
            <h3 className="text-[#1A1F36] mb-2">{t.benefits.benefit2Title}</h3>
            <p className="text-gray-600 mb-2">{t.benefits.benefit2Description}</p>
            <div className="inline-block bg-[#3BB273]/5 px-3 py-1 rounded-full">
              <p className="text-sm text-[#3BB273]">{t.benefits.benefit2Badge}</p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="w-14 h-14 rounded-xl bg-[#1A73E8]/10 flex items-center justify-center mb-4">
              <Handshake className="w-7 h-7 text-[#1A73E8]" />
            </div>
            <h3 className="text-[#1A1F36] mb-2">{t.benefits.benefit3Title}</h3>
            <p className="text-gray-600 mb-2">{t.benefits.benefit3Description}</p>
            <div className="inline-block bg-[#1A73E8]/5 px-3 py-1 rounded-full">
              <p className="text-sm text-[#1A73E8]">{t.benefits.benefit3Badge}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}