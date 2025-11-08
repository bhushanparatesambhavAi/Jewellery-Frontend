import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MAIN_NAV_LINKS, SUB_NAV_LINKS } from '../constants';
import { IconSearch, IconHeart, IconMapPin, IconShoppingCart, IconUser, IconMenu, IconX, IconChevronDown } from './Icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-serif text-gray-800 font-bold">
              Aura
            </Link>
          </div>
          
          <div className="hidden lg:flex flex-1 justify-center px-8">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconSearch className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><IconUser className="h-6 w-6" /></a>
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><IconHeart className="h-6 w-6" /></a>
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><IconMapPin className="h-6 w-6" /></a>
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><IconShoppingCart className="h-6 w-6" /></a>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
                {isMobileMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="hidden lg:block border-t border-gray-200">
        <ul className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-8">
          {MAIN_NAV_LINKS.map((link) => (
            <li key={link.name} className="py-4 group relative"
                onMouseEnter={() => SUB_NAV_LINKS[link.name] && setOpenDropdown(link.name)}
                onMouseLeave={() => SUB_NAV_LINKS[link.name] && setOpenDropdown(null)}
            >
              <NavLink
                to={link.href}
                className={({ isActive }) => `flex items-center text-sm font-semibold uppercase tracking-wider transition-colors ${isActive ? 'text-[#800000]' : 'text-gray-600 hover:text-[#800000]'}`}
              >
                {link.name}
                {SUB_NAV_LINKS[link.name] && <IconChevronDown className="h-4 w-4 ml-1" />}
              </NavLink>
              {openDropdown === link.name && SUB_NAV_LINKS[link.name] && (
                <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-b-lg border border-t-0 border-gray-200 w-56">
                    <ul className="py-2">
                        {SUB_NAV_LINKS[link.name].map(subLink => (
                            <li key={subLink.name}>
                                <Link to={subLink.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#800000]">
                                    {subLink.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          {/* Mobile search */}
           <div className="p-4 border-t border-gray-200">
             <div className="relative w-full">
               <input type="text" placeholder="Search..." className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full" />
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><IconSearch className="h-5 w-5 text-gray-400" /></div>
             </div>
           </div>
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 border-t">
            {MAIN_NAV_LINKS.map((link) => (
              <NavLink key={link.name} to={link.href} className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-maroon-50 text-[#800000]' : 'text-gray-700 hover:bg-gray-50'}`} onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="sm:hidden flex justify-center items-center space-x-6 py-4 border-t">
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><IconUser className="h-7 w-7" /></a>
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><IconHeart className="h-7 w-7" /></a>
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><IconMapPin className="h-7 w-7" /></a>
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><IconShoppingCart className="h-7 w-7" /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;