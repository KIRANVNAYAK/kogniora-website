import React, { useState } from 'react';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { courses } from '../data/mockData';
import { Course } from '../types';
import { useAuth } from '../contexts/AuthContext';

const Admin: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'Leadership & Management Skills',
    'Communication & Public Speaking',
    'Sales & Customer Service',
    'Personal & Workplace Productivity',
    'Conflict Resolution & Workplace Culture',
    'Business & Financial Skills'
  ];

  const countries = ['USA', 'Canada', 'Australia', 'United Kingdom', 'Germany', 'France', 'Netherlands', 'Sweden', 'Norway', 'Switzerland', 'Belgium', 'Ireland', 'Denmark', 'Austria', 'Portugal', 'Finland'];

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">You need admin privileges to access this page</p>
        </div>
      </div>
    );
  }

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setIsEditing(true);
  };

  const handleSave = () => {
    // In a real app, this would save to the database
    alert('Course updated successfully!');
    setIsEditing(false);
    setEditingCourse(null);
  };

  const handleDelete = (courseId: string) => {
    if (confirm('Are you sure you want to delete this course?')) {
      // In a real app, this would delete from the database
      alert('Course deleted successfully!');
    }
  };

  const handleAddNew = () => {
    setEditingCourse({
      id: '',
      title: '',
      category: categories[0],
      description: '',
      duration: '1 Day (9:00 AM – 5:00 PM)',
      fee: 699,
      thumbnail: '',
      agenda: '',
      countries: [],
      cities: {},
      dates: []
    });
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-red-900 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
              <p className="text-xl text-red-100">Manage courses and content</p>
            </div>
            <button
              onClick={handleAddNew}
              className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add New Course
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Course List */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              All Courses ({filteredCourses.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fee</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Countries</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCourses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-12 h-12 object-cover rounded-lg mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{course.title}</div>
                          <div className="text-sm text-gray-500">{course.duration}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{course.category}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">${course.fee}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{course.countries.join(', ')}</td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(course)}
                          className="text-blue-600 hover:text-blue-700 p-2 rounded-lg hover:bg-blue-50"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(course.id)}
                          className="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && editingCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                {editingCourse.id ? 'Edit Course' : 'Add New Course'}
              </h2>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={editingCourse.title}
                    onChange={(e) => setEditingCourse({...editingCourse, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={editingCourse.category}
                    onChange={(e) => setEditingCourse({...editingCourse, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fee ($)</label>
                  <input
                    type="number"
                    value={editingCourse.fee}
                    onChange={(e) => setEditingCourse({...editingCourse, fee: Number(e.target.value)})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label>
                  <input
                    type="text"
                    value={editingCourse.duration}
                    onChange={(e) => setEditingCourse({...editingCourse, duration: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail URL</label>
                  <input
                    type="url"
                    value={editingCourse.thumbnail}
                    onChange={(e) => setEditingCourse({...editingCourse, thumbnail: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    rows={3}
                    value={editingCourse.description}
                    onChange={(e) => setEditingCourse({...editingCourse, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Agenda</label>
                  <textarea
                    rows={2}
                    value={editingCourse.agenda}
                    onChange={(e) => setEditingCourse({...editingCourse, agenda: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end space-x-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Save Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;