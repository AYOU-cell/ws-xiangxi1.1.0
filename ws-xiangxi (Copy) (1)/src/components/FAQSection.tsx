import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="text-[#1A1F36] pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#1A73E8] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t.faq.question1,
      answer: t.faq.answer1
    },
    {
      question: t.faq.question2,
      answer: t.faq.answer2
    },
    {
      question: t.faq.question3,
      answer: t.faq.answer3
    },
    {
      question: t.faq.question4,
      answer: t.faq.answer4
    },
    {
      question: t.faq.question5,
      answer: t.faq.answer5
    },
    {
      question: t.faq.question6,
      answer: t.faq.answer6
    },
    {
      question: t.faq.question7,
      answer: t.faq.answer7
    }
  ];

  return (
    <section className="bg-[#F3F7FB] px-5 py-16">
      <div className="max-w-md mx-auto">
        {/* WhatsApp Button */}
        <div className="mb-10">
          <a
            href="https://wa.me/12182135478"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 px-6 rounded-2xl shadow-lg transition-all duration-200 hover:shadow-xl active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-lg">{t.whatsapp.chatButton}</span>
          </a>
        </div>

        <h2 className="text-[#1A1F36] mb-3 text-center">{t.faq.title}</h2>
        <p className="text-gray-600 text-center mb-10">
          {t.faq.subtitle}
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
