import React from 'react';
import { Globe, Users, Award, Target, Eye, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Excellence', value: '12+' },
    { label: 'Global Reach', value: '18 Countries' },
    { label: 'Expert Trainers', value: '150+' },
    { label: 'Satisfied Learners', value: '25,000+' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every training program, ensuring world-class quality and outcomes.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Our international approach combines best practices from USA, Canada, Australia, and Europe.'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'We exclusively onboard trainers from developed countries, ensuring premium expertise.'
    },
    {
      icon: Heart,
      title: 'Student Success',
      description: 'Your professional growth and career advancement is at the heart of everything we do.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Kogniora Global
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Transforming Education Through Innovative Technology and Expert-led Training
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To democratize access to world-class professional development by connecting learners 
                  globally with expert trainers from USA, Canada, Australia, and Europe. We believe 
                  in transforming careers through innovative technology and personalized learning experiences.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-teal-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become the leading global EdTech platform that bridges the gap between traditional 
                  education and modern workforce needs, creating a world where professional growth knows no boundaries.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Global Footprint */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Footprint</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver world-class training across multiple continents with local expertise and global standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
              <div className="text-3xl mb-4">🇺🇸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">United States</h3>
              <p className="text-gray-600">New York, Los Angeles, Chicago, Houston, San Francisco, and more</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl text-center">
              <div className="text-3xl mb-4">🇨🇦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Canada</h3>
              <p className="text-gray-600">Toronto, Vancouver, Montreal, Calgary, Ottawa, and more</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
              <div className="text-3xl mb-4">🇦🇺</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Australia</h3>
              <p className="text-gray-600">Sydney, Melbourne, Brisbane, Perth, Adelaide, and more</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
              <div className="text-3xl mb-4">🇪🇺</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Europe</h3>
              <p className="text-gray-600">London, Berlin, Paris, Amsterdam, Stockholm, and more</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trainer Excellence */}
      <div className="py-20 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Award className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Trainer Excellence Promise</h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              "We only onboard trainers from USA, Canada, Australia, and European countries, 
              ensuring you receive world-class expertise and international perspectives that 
              drive real career transformation."
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold mb-2">150+</div>
                  <div className="text-blue-200">Expert Trainers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">12+</div>
                  <div className="text-blue-200">Years Average Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">4.9/5</div>
                  <div className="text-blue-200">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;