import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, CartItem } from '../types';

interface AuthContextType {
  user: User | null;
  cart: CartItem[];
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: User[] = [
  { id: '1', email: 'admin@kogniora.com', name: 'Admin User', role: 'admin' },
  { id: '2', email: 'user@example.com', name: 'John Doe', role: 'user' }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in real app, this would call an API
    const foundUser = mockUsers.find(u => u.email === email);
    if (foundUser && password === 'password123') {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setCart([]);
  };

  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (courseId: string) => {
    setCart(prev => prev.filter(item => item.courseId !== courseId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AuthContext.Provider value={{
      user,
      cart,
      login,
      logout,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};