import React, { useState, useEffect } from 'react';
import { Users, Globe, BookOpen, TrendingUp } from 'lucide-react';
import { stats } from '../../data/mockData';

const AnalyticsSection: React.FC = () => {
  const [animatedStats, setAnimatedStats] = useState({
    learners: 0,
    countries: 0,
    sessions: 0
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const increment = {
      learners: stats.learners / steps,
      countries: stats.countries / steps,
      sessions: stats.sessions / steps
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      setAnimatedStats({
        learners: Math.min(Math.floor(increment.learners * currentStep), stats.learners),
        countries: Math.min(Math.floor(increment.countries * currentStep), stats.countries),
        sessions: Math.min(Math.floor(increment.sessions * currentStep), stats.sessions)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedStats(stats);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const analyticsData = [
    {
      icon: Users,
      title: 'Active Learners',
      value: animatedStats.learners.toLocaleString(),
      subtitle: 'Professionals trained worldwide',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Globe,
      title: 'Countries Served',
      value: animatedStats.countries.toString(),
      subtitle: 'Global reach across continents',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: BookOpen,
      title: 'Training Sessions',
      value: animatedStats.sessions.toLocaleString(),
      subtitle: 'Successfully completed',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      title: 'Success Rate',
      value: '98%',
      subtitle: 'Course completion rate',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real-Time Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our impact speaks for itself. See how we're transforming professional development globally with measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {analyticsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`${item.bgColor} p-8 rounded-2xl border border-white/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {item.value}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.subtitle}
                  </p>
                </div>

                {/* Animated Progress Bar */}
                <div className="mt-4 bg-white/50 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-2000 ease-out`}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Growth Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-green-600 mb-2">+247%</div>
            <p className="text-gray-600">Growth in enrollments</p>
            <p className="text-sm text-gray-500 mt-1">Year over year</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-blue-600 mb-2">4.9/5</div>
            <p className="text-gray-600">Average course rating</p>
            <p className="text-sm text-gray-500 mt-1">From 12,000+ reviews</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-2xl font-bold text-purple-600 mb-2">89%</div>
            <p className="text-gray-600">Career advancement</p>
            <p className="text-sm text-gray-500 mt-1">Within 6 months</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;