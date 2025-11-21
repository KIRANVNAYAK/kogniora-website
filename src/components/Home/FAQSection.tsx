import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What countries do you offer training programs in?",
      answer: "We offer training programs across USA, Canada, Australia and all European countries. Our trainers are exclusively based in these regions to ensure world-class expertise and cultural understanding."
    },
    {
      question: "How are your courses structured?",
      answer: "All our courses are intensive 1-day programs running from 9:00 AM to 5:00 PM. Each course is designed for maximum impact with practical exercises, real-world case studies, and actionable takeaways you can implement immediately."
    },
    {
      question: "What is the cost per course?",
      answer: "Each course is priced at $699, which includes all training materials, lunch, refreshments, and a digital certificate upon completion. We also offer group discounts for organizations enrolling multiple participants."
    },
    {
      question: "Who are your trainers?",
      answer: "Our trainers are industry experts exclusively from USA, Canada, Australia and European countries. They bring 15+ years of corporate experience from Fortune 500 companies and have delivered training to thousands of professionals worldwide."
    },
    {
      question: "How do I register for a course?",
      answer: "Simply browse our course catalog, select your preferred course, choose your location and date, then add it to your cart. You can complete your registration through our secure checkout process."
    },
    {
      question: "Do you offer corporate training programs?",
      answer: "Yes! We offer customized corporate training programs that can be delivered at your location or virtually. Contact our team to discuss your organization's specific needs and objectives."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer full refunds for cancellations made 7 days before the course date. Cancellations within 7 days are eligible for a 50% refund or free transfer to another date."
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes, all participants receive a digital certificate of completion that can be shared on LinkedIn and other professional platforms. Our certificates are recognized by leading organizations worldwide."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our training programs and services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6">
              Our team is here to help you find the perfect training solution for your needs.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;