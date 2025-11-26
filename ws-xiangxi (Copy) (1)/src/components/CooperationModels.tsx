import { Check, Zap, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CooperationModels() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-white px-5 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-[#1A1F36] mb-3 text-center">{t.cooperation.title}</h2>
        <p className="text-gray-600 text-center mb-10">
          {t.cooperation.subtitle}
        </p>

        <div className="space-y-5">
          {/* Semi-Managed Service */}
          <div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-[#1A1F36] mb-2">{t.cooperation.semiTitle}</h3>
                <div className="inline-block bg-[#F3F7FB] px-3 py-1 rounded-full">
                  <p className="text-sm text-[#1A73E8]">{t.cooperation.semiRevenue}</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">
              {t.cooperation.semiDescription}
            </p>

            <div className="mb-4">
              <p className="text-sm text-[#1A1F36] mb-2">{t.cooperation.youDo}</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.semiTask1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.semiTask2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.semiTask3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.semiTask4}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.semiTask5}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.semiTask6}</span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-sm text-[#1A1F36] mb-2">{t.cooperation.weProvide}</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#3BB273] mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.semiSupport1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#3BB273] mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.semiSupport2}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F3F7FB] rounded-lg p-4">
              <p className="text-sm text-[#1A1F36]">
                <span className="font-semibold">{t.cooperation.expectedResult}</span> {t.cooperation.semiResult}
              </p>
            </div>
          </div>

          {/* Full-Managed Service - HIGHLIGHTED */}
          <div className="bg-white rounded-xl border-2 border-[#1A73E8] p-6 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#1A73E8] text-white px-4 py-1 rounded-bl-lg flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span className="text-xs">{t.cooperation.recommended}</span>
            </div>

            <div className="flex items-start justify-between mb-4 mt-6">
              <div>
                <h3 className="text-[#1A1F36] mb-2">{t.cooperation.fullTitle}</h3>
                <div className="inline-block bg-[#1A73E8] px-3 py-1 rounded-full">
                  <p className="text-sm text-white">{t.cooperation.fullRevenue}</p>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">
              {t.cooperation.fullDescription}
            </p>

            <div className="mb-4">
              <p className="text-sm text-[#1A1F36] mb-2">{t.cooperation.youDo}</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.fullTask1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.fullTask2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.fullTask3}</span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <p className="text-sm text-[#1A1F36] mb-2">{t.cooperation.weHandle}</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.fullService1}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.fullService2}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.fullService3}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.fullService4}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.fullService5}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1A73E8] mt-0.5 flex-shrink-0" />
                  <span>{t.cooperation.fullService6}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1A73E8]/5 rounded-lg p-4 mb-4 border border-[#1A73E8]/20">
              <p className="text-sm text-[#1A1F36] mb-3">{t.cooperation.dailyReporting}</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">{t.cooperation.visitors}</p>
                  <p className="text-lg text-[#1A73E8]">247</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">{t.cooperation.orders}</p>
                  <p className="text-lg text-[#3BB273]">12</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500 mb-1">{t.cooperation.revenue}</p>
                  <p className="text-lg text-[#1A1F36]">$890</p>
                </div>
              </div>
            </div>

            <div className="bg-[#3BB273]/10 rounded-lg p-4 border border-[#3BB273]/20">
              <p className="text-sm text-[#1A1F36]">
                <span className="font-semibold">{t.cooperation.expectedResult}</span> {t.cooperation.fullResult}
              </p>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="mt-10">
          <a
            href="https://wa.me/85257437376"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 px-6 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">{t.whatsapp.chatButton}</span>
          </a>
        </div>
      </div>
    </section>
  );
}