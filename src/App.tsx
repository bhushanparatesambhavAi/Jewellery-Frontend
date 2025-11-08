import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { HomePage, ProductListingPage } from './pages';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-white text-gray-800">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductListingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;