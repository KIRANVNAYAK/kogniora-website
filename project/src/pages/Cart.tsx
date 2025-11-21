import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { courses } from '../data/mockData';

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart, user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Please Login</h2>
          <p className="text-gray-600">You need to login to view your cart</p>
        </div>
      </div>
    );
  }

  const cartItems = cart.map(item => {
    const course = courses.find(c => c.id === item.courseId);
    return {
      ...item,
      course
    };
  });

  const total = cartItems.reduce((sum, item) => sum + (item.course?.fee || 0), 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Discover our professional development courses and start your learning journey.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Browse Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shopping Cart</h1>
            <p className="text-xl text-blue-100">Review your selected courses</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Course Selection ({cart.length} {cart.length === 1 ? 'item' : 'items'})
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {cartItems.map((item, index) => (
                  <div key={index} className="p-6">
                    <div className="flex items-center space-x-6">
                      <img
                        src={item.course?.thumbnail}
                        alt={item.course?.title}
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                      
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.course?.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-2">
                          {item.course?.category}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span><strong>Location:</strong> {item.city}, {item.country}</span>
                          <span><strong>Date:</strong> {new Date(item.date).toLocaleDateString()}</span>
                          <span><strong>Duration:</strong> {item.course?.duration}</span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900 mb-2">
                          ${item.course?.fee}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.courseId)}
                          className="text-red-600 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-semibold text-green-600">-$0</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center group mb-4">
                Proceed to Checkout
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-50 transition-colors">
                Continue Shopping
              </button>

              {/* Benefits */}
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">What's Included:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Expert-led training sessions</li>
                  <li>• Digital course materials</li>
                  <li>• Completion certificates</li>
                  <li>• Networking opportunities</li>
                  <li>• Lunch and refreshments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;