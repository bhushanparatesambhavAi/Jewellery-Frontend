import React from 'react';
import { FOOTER_LINKS } from '../constants';
import { IconFacebook, IconInstagram, IconTwitter, IconYoutube } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#4c0000] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Links sections */}
                    {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                        <div key={title}>
                            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">{title}</h3>
                            <ul className="mt-4 space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    {/* App Download */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-200">Download the App</h3>
                        <div className="mt-4 flex space-x-4">
                            <img src="https://picsum.photos/100/100" alt="QR Code" className="w-24 h-24 rounded-lg" />
                            <div className="flex flex-col space-y-2 justify-center">
                                <a href="#"><img src="https://picsum.photos/120/40?grayscale" alt="Play Store" className="h-10 rounded" /></a>
                                <a href="#"><img src="https://picsum.photos/120/40?grayscale" alt="App Store" className="h-10 rounded" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white"><IconFacebook className="h-6 w-6" /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><IconInstagram className="h-6 w-6" /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><IconTwitter className="h-6 w-6" /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><IconYoutube className="h-6 w-6" /></a>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <p className="text-sm text-gray-400">Payment Options</p>
                        {/* Placeholder for payment icons */}
                        <div className="h-8 mt-2 bg-gray-500 rounded w-64"></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#330000]">
                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Aura Jewels. All Rights Reserved.</p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                    </div>
                 </div>
            </div>
        </footer>
    );
}

export default Footer;