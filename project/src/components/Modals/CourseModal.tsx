import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, DollarSign } from 'lucide-react';
import { Course } from '../../types';
import { useAuth } from '../../contexts/AuthContext';

interface CourseModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
}

const CourseModal: React.FC<CourseModalProps> = ({ course, isOpen, onClose }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const { user, addToCart } = useAuth();

  const handleAddToCart = () => {
    if (!user) {
      alert('Please login to add courses to cart');
      return;
    }

    if (!selectedCountry || !selectedCity || !selectedDate) {
      alert('Please select country, city, and date');
      return;
    }

    addToCart({
      courseId: course!.id,
      country: selectedCountry,
      city: selectedCity,
      date: selectedDate
    });

    alert('Course added to cart!');
    onClose();
  };

  const resetSelections = () => {
    setSelectedCountry('');
    setSelectedCity('');
    setSelectedDate('');
  };

  React.useEffect(() => {
    if (isOpen) {
      resetSelections();
    }
  }, [isOpen]);

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{course.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Course Image */}
          <div className="mb-6">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Course Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="text-gray-700 font-semibold">${course.fee}</span>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <span className="text-sm font-medium text-blue-800">{course.category}</span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
            </div>
          </div>

          {/* Agenda */}
          {course.agenda && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Course Agenda</h3>
              <p className="text-gray-600 text-sm">{course.agenda}</p>
            </div>
          )}

          {/* Selection Form */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Select Your Preferences</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Country Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Country
                </label>
                <select
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                    setSelectedCity('');
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Country</option>
                  {course.countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              {/* City Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  disabled={!selectedCountry}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Select City</option>
                  {selectedCountry && course.cities[selectedCountry]?.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Date</option>
                  {course.dates.map((date) => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={!selectedCountry || !selectedCity || !selectedDate || !user}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {user ? 'Add to Cart' : 'Login to Add to Cart'}
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;