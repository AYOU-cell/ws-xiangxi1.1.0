import { ImageWithFallback } from './figma/ImageWithFallback';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function TestimonialsSection() {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      quote: t.testimonials.quote1,
      name: t.testimonials.name1,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      quote: t.testimonials.quote2,
      name: t.testimonials.name2,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      quote: t.testimonials.quote3,
      name: t.testimonials.name3,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      quote: t.testimonials.quote4,
      name: t.testimonials.name4,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      quote: t.testimonials.quote5,
      name: t.testimonials.name5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="bg-[#0C1033] px-0 py-16 overflow-hidden">
      <div className="max-w-md mx-auto px-5 mb-10">
        <h2 className="text-white mb-3 text-center">{t.testimonials.title}</h2>
        <p className="text-[#A5AAC5] text-center">
          {t.testimonials.subtitle}
        </p>
      </div>

      {/* Horizontal Scrollable Cards */}
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex gap-4 px-5" style={{ width: 'max-content' }}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#1A1F4A] rounded-2xl p-6 shadow-2xl relative"
              style={{ width: '85vw', maxWidth: '340px' }}
            >
              {/* Large Quote Icon Background */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-white" />
              </div>

              {/* Quote Text */}
              <div className="mb-6 relative z-10">
                <p className="text-white text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Student Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-[#1A73E8] overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[#DDE1F0]">{testimonial.name}</p>
                  <p className="text-sm text-[#A5AAC5]">{t.testimonials.student}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="text-center mt-6">
        <p className="text-[#A5AAC5] text-sm">{t.testimonials.swipeHint}</p>
      </div>

      {/* CSS for hiding scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .overflow-x-auto {
          scroll-snap-type: x mandatory;
        }
        .overflow-x-auto > div > div {
          scroll-snap-align: center;
        }
      `}</style>
    </section>
  );
}