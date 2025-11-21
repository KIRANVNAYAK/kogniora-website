import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Users, Award, Clock, Shield, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Globe2,
      title: 'Global Reach',
      description: 'Training programs delivered across USA, Canada, Australia, and Europe with local expertise.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'World-class trainers from leading companies with proven industry experience.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Certified Programs',
      description: 'Industry-recognized certifications that enhance your professional credibility.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Multiple dates and locations to fit your busy professional schedule.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality standards ensuring consistent, high-impact learning experiences.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Immediate Impact',
      description: 'Practical skills and strategies you can implement immediately in your workplace.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Kogniora Global?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering world-class professional development that drives real results for individuals and organizations worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h3>
            <p className="text-xl text-blue-100 mb-6">
              Join thousands of professionals who have advanced their careers with our expert-led training programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
              >
                Start Learning Today
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-block text-center"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;