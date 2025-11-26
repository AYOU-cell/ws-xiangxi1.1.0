import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, Award, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section className="bg-[#F3F7FB] px-5 py-16">
      <div className="max-w-md mx-auto">
        <h2 className="text-[#1A1F36] mb-3 text-center">{t.about.title}</h2>
        <p className="text-gray-600 text-center mb-8">
          {t.about.subtitle}
        </p>

        {/* Team Photo */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MzQ0ODU3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="EZ Entrepreneur Academy Team"
            className="w-full h-auto"
          />
        </div>

        {/* Description */}
        <div className="bg-white rounded-xl p-6 shadow-md mb-6">
          <p className="text-gray-700 mb-4">
            {t.about.description1}
          </p>
          <p className="text-gray-700 mb-4">
            {t.about.description2} <span className="text-[#1A73E8]">{t.about.description2Highlight}</span> {t.about.description2End}
          </p>
          <p className="text-gray-700">
            {t.about.description3Start} <span className="text-[#1A1F36]">{t.about.description3End}</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#1A73E8]/10 flex items-center justify-center mx-auto mb-2">
              <Users className="w-6 h-6 text-[#1A73E8]" />
            </div>
            <p className="text-2xl text-[#1A1F36] mb-1">500+</p>
            <p className="text-xs text-gray-600">{t.about.students}</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#3BB273]/10 flex items-center justify-center mx-auto mb-2">
              <Award className="w-6 h-6 text-[#3BB273]" />
            </div>
            <p className="text-2xl text-[#1A1F36] mb-1">98%</p>
            <p className="text-xs text-gray-600">{t.about.successRate}</p>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm text-center">
            <div className="w-12 h-12 rounded-full bg-[#1A73E8]/10 flex items-center justify-center mx-auto mb-2">
              <Target className="w-6 h-6 text-[#1A73E8]" />
            </div>
            <p className="text-2xl text-[#1A1F36] mb-1">24/7</p>
            <p className="text-xs text-gray-600">{t.about.support}</p>
          </div>
        </div>
      </div>
    </section>
  );
}