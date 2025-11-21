import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star } from 'lucide-react';
import { trainers } from '../../data/mockData';

const TrainersSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Trainers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry leaders and experts exclusively from USA, Canada, Australia, and European countries who bring real-world experience to every session.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-medium text-gray-900">4.9</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{trainer.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{trainer.country}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {trainer.expertise}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {trainer.bio}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>15+ Years</span>
                      <span>•</span>
                      <span>500+ Sessions</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-900 to-teal-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join Our Elite Training Network</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We only onboard trainers from USA, Canada, Australia, and European countries, ensuring world-class expertise and international perspectives.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Become a Trainer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;