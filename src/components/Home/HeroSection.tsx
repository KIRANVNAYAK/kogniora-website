import React from 'react';
import { ArrowRight, Play, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white h-[90vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-top mt-8">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-0">
                <Award className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Global EdTech Leader</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforming Education Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                  Innovative Technology
                </span>{' '}
                and Expert-led Training
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join thousands of professionals across USA, Canada, and Europe who are advancing their careers with our world-class training programs.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-orange-400 mr-2" />
                  <span className="text-2xl font-bold">25K+</span>
                </div>
                <p className="text-blue-200 text-sm">Active Learners</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Globe className="h-6 w-6 text-orange-400 mr-2" />
                  <span className="text-2xl font-bold">18</span>
                </div>
                <p className="text-blue-200 text-sm">Countries</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-orange-400 mr-2" />
                  <span className="text-2xl font-bold">12K+</span>
                </div>
                <p className="text-blue-200 text-sm">Sessions</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/courses"
                className="bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center group shadow-lg"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              {/*              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button> */}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional training session"
                className="rounded-3xl shadow-3xl w-full max-w-md md:max-w-lg lg:max-w-lg h-[82vh]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-2 -right-2 bg-white text-gray-900 p-4 rounded-xl shadow-lg animate-bounce">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4.7★</div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -left-36 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-lg font-bold">Live</div>
                <div className="text-xs">Expert Training</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;