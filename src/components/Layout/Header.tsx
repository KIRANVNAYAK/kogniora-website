import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import LoginModal from '../Modals/LoginModal';
import RegisterModal from '../Modals/RegisterModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const location = useLocation();
  const { user, cart, logout } = useAuth();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <img
                  src="/Logo_small.png"
                  alt="Kogniora Global Logo"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Kogniora Global</h1>
                  <p className="text-xs text-gray-600">EdTech Private Limited</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  } px-3 py-2 text-sm font-medium transition-colors duration-200`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* User Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <Link
                    to="/cart"
                    className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ShoppingCart className="h-6 w-6" />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                        {cart.length}
                      </span>
                    )}
                  </Link>
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-gray-600" />
                    <span className="text-sm text-gray-700">{user.name}</span>
                    {user.role === 'admin' && (
                      <Link
                        to="/admin"
                        className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        Admin
                      </Link>
                    )}
                    <button
                      onClick={logout}
                      className="p-1 text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setIsRegisterModalOpen(true)}
                    className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  } block px-3 py-2 rounded-md text-base font-medium transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <div className="border-t border-gray-200 pt-4 pb-3">
                  <div className="flex items-center px-3 pb-3">
                    <User className="h-6 w-6 text-gray-600" />
                    <span className="ml-3 text-base font-medium text-gray-700">{user.name}</span>
                  </div>
                  <Link
                    to="/cart"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                  >
                    <ShoppingCart className="h-5 w-5 mr-3" />
                    Cart ({cart.length})
                  </Link>
                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-2 text-base font-medium text-red-600 hover:text-red-700"
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-red-600"
                  >
                    <LogOut className="h-5 w-5 mr-3" />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setIsRegisterModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-base font-medium border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
                  >
                    Register
                  </button>
                  <button
                    onClick={() => {
                      setIsLoginModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-base font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginModalOpen(false);
          setIsRegisterModalOpen(true);
        }}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterModalOpen(false);
          setIsLoginModalOpen(true);
        }}
      />
    </>
  );
};

export default Header;