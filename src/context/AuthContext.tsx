import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { login as apiLogin, signup as apiSignup } from '../services/authservice';
import { LoginSuccess } from '@/models/loginSuccess';
import { SignupSuccess } from '@/models/signupSuccess';

type AuthContextType = {
  isAuthenticated: boolean;
  userRole: 'admin' | 'user' | null;
  login: (mobile: string, password: string) => Promise<void>;
  signup: (mobile: string, password: string, role: 'admin' | 'user') => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);

  const login = async (mobile: string, password: string) => {
    const response = await apiLogin(mobile, password) as LoginSuccess;
    if (response.success) {
      setIsAuthenticated(true);
      setUserRole(response.role);
    }
  };

  const signup = async (email: string, password: string, role: 'admin' | 'user') => {
    const response = await apiSignup(email, password, role) as SignupSuccess;
    if (response.success) {
      alert('Signup successful! Please login.');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};



// import * as React from 'react';
// import { createContext, useContext, useState } from 'react';

// type AuthContextType = {
//   isAuthenticated: boolean;
//   userRole: 'admin' | 'user' | null;
//   login: (role: 'admin' | 'user') => void;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [userRole, setUserRole] = useState<'admin' | 'user' | null>(null);

//   const login = (role: 'admin' | 'user') => {
//     setIsAuthenticated(true);
//     setUserRole(role);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUserRole(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };