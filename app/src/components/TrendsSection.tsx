import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Smartphone, Globe, ShoppingCart, Package, Zap, Clock, Users, ArrowRight } from 'lucide-react';
import chinaPriceImg from 'figma:asset/f8e9dd9a821bfc2b0ae8b8abcb23ab779c290e38.png';
import europePriceImg from 'figma:asset/7db8aba9206574064be23356715420f6ee23662c.png';
import { useLanguage } from '../contexts/LanguageContext';

// Block 1 Data: Global E-commerce Sales Growth
const salesGrowthData = [
  { year: '2024', sales: 6.3 },
  { year: '2025', sales: 6.9 },
  { year: '2026', sales: 7.4 },
  { year: '2027', sales: 7.9 },
  { year: '2028', sales: 8.5 },
];

// Block 5 Data: New Seller Growth
const newSellerData = [
  { year: '2021', sellers: 450 },
  { year: '2022', sellers: 520 },
  { year: '2023', sellers: 580 },
  { year: '2024', sellers: 600 },
  { year: '2025', sellers: 630 },
];

export function TrendsSection() {
  const { t } = useLanguage();
  
  // Block 3 Data with translations
  const chinaSupplyData = [
    { metric: t.trends.block3Metric1, value: 35 },
    { metric: t.trends.block3Metric2, value: 50 },
    { metric: t.trends.block3Metric3, value: 40 },
  ];
  
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-5 py-16">
      <div className="max-w-md mx-auto">
        {/* Section Title */}
        <h2 className="text-[#0A1E5A] mb-3 text-center">{t.trends.title}</h2>
        <p className="text-gray-600 text-center mb-12">
          {t.trends.subtitle}
        </p>

        {/* Block 1: Global E-commerce Sales Growth */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-4">{t.trends.block1Title}</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={salesGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="year" stroke="#0A1E5A" />
              <YAxis stroke="#0A1E5A" />
              <Tooltip 
                formatter={(value) => `$${value}T`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
              />
              <Line 
                type="monotone" 
                dataKey="sales" 
                stroke="#005CE6" 
                strokeWidth={3} 
                dot={{ fill: '#005CE6', r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 flex justify-between items-center bg-gradient-to-r from-[#005CE6]/5 to-[#005CE6]/10 rounded-xl p-4">
            <div>
              <div className="text-[#0A1E5A] text-sm">{t.trends.block1Stat1}</div>
              <div className="text-[#005CE6] mt-1">$6.3 trillion</div>
            </div>
            <div className="text-right">
              <div className="text-[#0A1E5A] text-sm">{t.trends.block1Stat2}</div>
              <div className="text-[#005CE6] mt-1">$8.5 trillion</div>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3 text-center">
            {t.trends.block1Description}
          </p>
        </div>

        {/* Block 2: U.S. Online Shopping Habits */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-6">{t.trends.block2Title}</h3>
          
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <ShoppingCart className="w-7 h-7 text-[#005CE6]" />
              </div>
              <div className="flex-1">
                <div className="text-[#005CE6] mb-1">79%</div>
                <p className="text-sm text-gray-700">{t.trends.block2Stat1}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-7 h-7 text-[#005CE6]" />
              </div>
              <div className="flex-1">
                <div className="text-[#005CE6] mb-1">50%</div>
                <p className="text-sm text-gray-700">{t.trends.block2Stat2}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-[#005CE6]" />
              </div>
              <div className="flex-1">
                <div className="text-[#005CE6] mb-1">30%+</div>
                <p className="text-sm text-gray-700">{t.trends.block2Stat3}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 3: China Supply Chain Advantage */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-4">{t.trends.block3Title}</h3>
          
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chinaSupplyData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis type="number" stroke="#0A1E5A" />
              <YAxis dataKey="metric" type="category" stroke="#0A1E5A" width={100} />
              <Tooltip 
                formatter={(value) => `${value}%`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
              />
              <Bar dataKey="value" fill="#005CE6" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-5 space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">{t.trends.block3Stat1}</span>
              <span className="text-[#005CE6]">35%+</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">{t.trends.block3Stat2}</span>
              <span className="text-[#005CE6]">30–70%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-sm text-gray-700">{t.trends.block3Stat3}</span>
              <span className="text-[#005CE6]">20–60%</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 mt-4 text-center">
            {t.trends.block3Description}
          </p>
        </div>

        {/* Block 4: India Supply Chain Growth */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-6">{t.trends.block4Title}</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-7 h-7 text-[#005CE6]" />
              </div>
              <div className="flex-1">
                <div className="text-[#005CE6] mb-1">400%</div>
                <p className="text-sm text-gray-700">{t.trends.block4Stat1}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Package className="w-7 h-7 text-[#005CE6]" />
              </div>
              <div className="flex-1">
                <div className="text-[#005CE6] mb-1">40–60%</div>
                <p className="text-sm text-gray-700">{t.trends.block4Stat2}</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-[#005CE6]/5 to-[#005CE6]/10 rounded-xl">
              <p className="text-sm text-gray-700 mb-2">{t.trends.block4Category}</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[#0A1E5A] border border-[#005CE6]/20">{t.trends.fashion}</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[#0A1E5A] border border-[#005CE6]/20">{t.trends.accessories}</span>
                <span className="px-3 py-1 bg-white rounded-full text-xs text-[#0A1E5A] border border-[#005CE6]/20">{t.trends.homeGoods}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Block 5: New Seller Growth Trend */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-4">{t.trends.block5Title}</h3>
          
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={newSellerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="year" stroke="#0A1E5A" />
              <YAxis stroke="#0A1E5A" />
              <Tooltip 
                formatter={(value) => `${value}K`}
                contentStyle={{ borderRadius: '8px', border: '1px solid #E5E7EB' }}
              />
              <Bar dataKey="sellers" fill="#005CE6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-[#005CE6] mb-1">600K+</div>
              <p className="text-xs text-gray-600">{t.trends.block5Stat1}</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-[#005CE6] mb-1">70%</div>
              <p className="text-xs text-gray-600">{t.trends.block5Stat2}</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-[#005CE6] mb-1">3–6 mo.</div>
              <p className="text-xs text-gray-600">{t.trends.block5Stat3}</p>
            </div>
          </div>
        </div>

        {/* Block 6: Why Now Is the Best Time to Start */}
        <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-[#0A1E5A] mb-6">{t.trends.block6Title}</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-[#005CE6]" />
              </div>
              <p className="text-sm text-gray-700 pt-2">{t.trends.block6Item1}</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-[#005CE6]" />
              </div>
              <p className="text-sm text-gray-700 pt-2">{t.trends.block6Item2}</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-[#005CE6]" />
              </div>
              <p className="text-sm text-gray-700 pt-2">{t.trends.block6Item3}</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#005CE6]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-[#005CE6]" />
              </div>
              <p className="text-sm text-gray-700 pt-2">{t.trends.block6Item4}</p>
            </div>
          </div>
        </div>

        {/* Highlight Box */}
        <div className="bg-gradient-to-r from-[#0A1E5A] to-[#005CE6] rounded-2xl p-8 text-center shadow-xl mb-12">
          <p className="text-white text-lg leading-relaxed">
            {t.trends.highlightText}
          </p>
        </div>

        {/* Price Difference Profit Showcase */}
        <div className="mb-8">
          <h3 className="text-[#0A1E5A] mb-6 text-center">{t.trends.priceTitle}</h3>
          
          {/* Two-Column Comparison */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {/* Left Column - China Purchase Price */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <img src={chinaPriceImg} alt="China Purchase Price" className="w-full h-40 object-cover rounded-lg mb-3" />
              <h4 className="text-[#0A1E5A] text-sm mb-1">{t.trends.chinaPriceLabel}</h4>
              <p className="text-xs text-gray-600 mb-2">{t.trends.chinaPriceDescription}</p>
              <div className="text-[#005CE6] text-xl">$188.70</div>
            </div>

            {/* Right Column - Europe Selling Price */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
              <img src={europePriceImg} alt="Europe Selling Price" className="w-full h-40 object-cover rounded-lg mb-3" />
              <h4 className="text-[#0A1E5A] text-sm mb-1">{t.trends.europePriceLabel}</h4>
              <p className="text-xs text-gray-600 mb-2">{t.trends.europePriceDescription}</p>
              <div className="text-[#005CE6] text-xl">$299.99</div>
            </div>
          </div>

          {/* Arrow Indicator */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-[#0A1E5A]">{t.trends.chinaLabel}</span>
            <ArrowRight className="w-5 h-5 text-[#005CE6]" />
            <span className="text-[#0A1E5A]">{t.trends.europeLabel}</span>
          </div>

          {/* Profit Highlight */}
          <div className="bg-gradient-to-r from-[#005CE6] to-[#0A1E5A] rounded-2xl p-6 text-center shadow-lg">
            <div className="text-white text-2xl mb-2">{t.trends.profitHighlight}</div>
            <p className="text-white/90 text-sm">
              {t.trends.profitDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
