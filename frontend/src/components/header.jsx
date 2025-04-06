import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Update activeLink whenever location changes
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About Us" },
        { path: "/services", label: "Services" },
        { path: "/case-studies", label: "Case Studies" },
        { path: "/shop", label: "Shop" },
        { path: "/contact", label: "Contact Us" }
    ];

    return (
        <header className="bg-black text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo section with a link to the home page */}
                <div className="logo">
                    <Link to="/" className="text-2xl font-bold">PixelPerfect</Link>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.path} className="relative group">
                                <Link 
                                    to={link.path} 
                                    className="hover:text-gray-300 transition-colors duration-1000"
                                >
                                    {link.label}
                                    <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-1000 
                                        ${activeLink === link.path ? 'w-full' : 'group-hover:w-full'}`}
                                    ></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden flex items-center"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    <svg 
                        className="w-6 h-6" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        {mobileMenuOpen ? (
                            <path d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            <div 
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
                    mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <nav className="pt-4">
                    <ul className="flex flex-col space-y-3 pb-4">
                        {navLinks.map((link) => (
                            <li key={link.path} className="px-6">
                                <Link 
                                    to={link.path} 
                                    className={`block transition-colors duration-300 ${
                                        activeLink === link.path ? 'text-gray-300' : 'hover:text-gray-300'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;