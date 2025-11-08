import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, AuthModal } from './components';
import { HomePage, ProductListingPage } from './pages';

const App: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState<'login' | 'register'>('login');

  const handleOpenAuthModal = (view: 'login' | 'register' = 'login') => {
    setAuthModalView(view);
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <HashRouter>
      <div className="bg-white text-gray-800">
        <Header onOpenAuthModal={handleOpenAuthModal} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductListingPage />} />
          </Routes>
        </main>
        <Footer />
        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={handleCloseAuthModal}
          initialView={authModalView}
        />
      </div>
    </HashRouter>
  );
};

export default App;
