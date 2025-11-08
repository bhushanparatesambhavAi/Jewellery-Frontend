import React, { useState, useEffect, useCallback } from 'react';
import { IconX } from './Icons';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialView = 'login' }) => {
  const [view, setView] = useState(initialView);

  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  const handleEsc = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, handleEsc]);

  if (!isOpen) return null;

  const LoginView = () => (
    <>
      <h2 id="auth-modal-title" className="text-2xl font-serif text-center mb-6 text-gray-800">Login to Aura</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 sr-only">Email Address</label>
            <input type="email" id="login-email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#800000] focus:border-[#800000] sm:text-sm" placeholder="Email Address" />
          </div>
          <div>
            <label htmlFor="login-password"
                   className="block text-sm font-medium text-gray-700 sr-only">Password</label>
            <input type="password" id="login-password" name="password" required
                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#800000] focus:border-[#800000] sm:text-sm"
                   placeholder="Password" />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#800000] hover:bg-[#660000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000] transition-colors">
            Sign In
          </button>
        </div>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <button onClick={() => setView('register')} className="font-medium text-[#800000] hover:underline focus:outline-none">
          Register here
        </button>
      </p>
    </>
  );

  const RegisterView = () => (
    <>
      <h2 id="auth-modal-title" className="text-2xl font-serif text-center mb-6 text-gray-800">Create an Account</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-4">
          <div>
            <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 sr-only">Full Name</label>
            <input type="text" id="register-name" name="name" required
                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#800000] focus:border-[#800000] sm:text-sm"
                   placeholder="Full Name" />
          </div>
          <div>
            <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 sr-only">Email Address</label>
            <input type="email" id="register-email" name="email" required
                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#800000] focus:border-[#800000] sm:text-sm"
                   placeholder="Email Address" />
          </div>
          <div>
            <label htmlFor="register-password"
                   className="block text-sm font-medium text-gray-700 sr-only">Password</label>
            <input type="password" id="register-password" name="password" required
                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#800000] focus:border-[#800000] sm:text-sm"
                   placeholder="Password" />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#800000] hover:bg-[#660000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000] transition-colors">
            Create Account
          </button>
        </div>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <button onClick={() => setView('login')} className="font-medium text-[#800000] hover:underline focus:outline-none">
          Login here
        </button>
      </p>
    </>
  );

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="auth-modal-title"
    >
      <div
        className={`bg-white rounded-lg shadow-2xl p-8 relative w-full max-w-sm m-4 transform transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={e => e.stopPropagation()}
        role="document"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <IconX className="h-6 w-6" />
        </button>
        {view === 'login' ? <LoginView /> : <RegisterView />}
      </div>
    </div>
  );
};

export default AuthModal;
