import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = React.useState(location.pathname);

    // Update activeLink whenever location changes
    React.useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        // Header component with a black background and white text
        // The header contains a logo and a navigation menu with links to different pages
        <header className="bg-black text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo section with a link to the home page */}
                <div className="logo">
                    <Link to="/" className="text-2xl font-bold">PixelPerfect</Link>
                </div>
                
                <nav>
                    <ul className="flex space-x-6">
                        {[
                            // Array of links for the navigation menu
                            // Each link has a path and a label
                            { path: "/", label: "Home" },
                            { path: "/about", label: "About Us" },
                            { path: "/services", label: "Services" },
                            { path: "/case-studies", label: "Case Studies" },
                            { path: "/shop", label: "Shop" },
                            { path: "/contact", label: "Contact Us" }
                        ].map((link) => (
                            <li key={link.path} className="relative group">
                                <Link 
                                    to={link.path} 
                                    // Animation for the link hover effect
                                    className="hover:text-gray-300 transition-colors duration-1000"
                                >
                                    {link.label}
                                    {/* Animated underline effect for the active link */}
                                    <span className={`absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-1000 
                                        ${activeLink === link.path ? 'w-full' : 'group-hover:w-full'}`}
                                    ></span>
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