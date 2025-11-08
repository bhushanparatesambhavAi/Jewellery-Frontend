import React, { useState, FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MAIN_NAV_LINKS, MEGA_MENU_DATA } from '../constants';
import * as Icons from './Icons';

type IconName = keyof typeof Icons;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeSubCategoryKey, setActiveSubCategoryKey] = useState<string | null>(null);

  const handleMouseEnter = (linkName: string) => {
    setOpenDropdown(linkName);
    const menuData = MEGA_MENU_DATA[linkName];
    if (menuData && menuData.sidebar) {
      setActiveSubCategoryKey(menuData.sidebar[0].key);
    }
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
    setActiveSubCategoryKey(null);
  };

  const renderContent = (content: any) => {
    if (!content) return null;

    if (content.type === 'links') {
      return (
        <div className="grid grid-cols-3 gap-x-6 gap-y-4">
          {content.items.map((item: any) => {
            const IconComponent = item.Icon;
            return (
              <Link key={item.name} to={item.href} className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <IconComponent className="h-8 w-8 text-[#800000] p-1" />
                <span className="ml-3 text-sm text-gray-700">{item.name}</span>
              </Link>
            );
          })}
        </div>
      );
    }

    if (content.type === 'images') {
      return (
        <div className="grid grid-cols-4 gap-4">
          {content.items.map((item: any) => (
            <Link key={item.name} to={item.href} className="text-center group">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800">{item.name}</p>
            </Link>
          ))}
        </div>
      );
    }

    return null;
  };

  const menuData = openDropdown ? MEGA_MENU_DATA[openDropdown] : null;
  const activeContent = menuData && activeSubCategoryKey ? menuData.content[activeSubCategoryKey] : null;

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
                <Icons.IconSearch className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><Icons.IconUser className="h-6 w-6" /></a>
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><Icons.IconHeart className="h-6 w-6" /></a>
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><Icons.IconMapPin className="h-6 w-6" /></a>
              <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><Icons.IconShoppingCart className="h-6 w-6" /></a>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
                {isMobileMenuOpen ? <Icons.IconX className="h-6 w-6" /> : <Icons.IconMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="hidden lg:block border-t border-gray-200 relative">
        <ul className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-8">
          {MAIN_NAV_LINKS.map((link) => (
            <li key={link.name} className="py-4 group"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={link.href}
                className={({ isActive }) => `flex items-center text-sm font-semibold uppercase tracking-wider transition-colors ${isActive || openDropdown === link.name ? 'text-[#800000]' : 'text-gray-600 hover:text-[#800000]'}`}
              >
                {link.name}
              </NavLink>
              {openDropdown === link.name && menuData && (
                 <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex">
                      {/* Sidebar */}
                      <div className="w-[20%] py-6 pr-6 border-r border-gray-200">
                          <ul className="space-y-1">
                              {menuData.sidebar.map((item: any) => (
                                  <li key={item.key}>
                                      <button
                                          onMouseEnter={() => setActiveSubCategoryKey(item.key)}
                                          className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeSubCategoryKey === item.key ? 'bg-rose-50 text-[#800000]' : 'text-gray-700 hover:bg-gray-100'}`}
                                      >
                                          {item.name}
                                      </button>
                                  </li>
                              ))}
                          </ul>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 py-6 px-8">
                          {renderContent(activeContent)}
                          <div className="mt-6 border-t border-gray-200 pt-4">
                            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-[#800000] hover:underline">
                              Jewellery for Every Moment - See It All Here!
                              <button className="bg-[#800000] text-white px-4 py-1.5 rounded-md text-xs">View All</button>
                            </a>
                          </div>
                      </div>

                      {/* Promo */}
                      {menuData.promo && (
                        <div className="w-[25%] py-6 pl-6 border-l border-gray-200">
                          <Link to={menuData.promo.href} className="block">
                            <img src={menuData.promo.image} alt={menuData.promo.title} className="w-full rounded-lg mb-4" />
                            <h3 className="font-serif text-lg text-gray-800">{menuData.promo.title}</h3>
                            <p className="text-sm text-gray-500 hover:underline">{menuData.promo.subtitle}</p>
                          </Link>
                        </div>
                      )}
                    </div>
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
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Icons.IconSearch className="h-5 w-5 text-gray-400" /></div>
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
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><Icons.IconUser className="h-7 w-7" /></a>
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><Icons.IconHeart className="h-7 w-7" /></a>
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><Icons.IconMapPin className="h-7 w-7" /></a>
            <a href="#" className="text-gray-600 hover:text-[#D4AF37] transition-colors"><Icons.IconShoppingCart className="h-7 w-7" /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
