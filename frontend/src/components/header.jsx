import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [activeLink, setActiveLink] = React.useState(window.location.pathname);

    React.useEffect(() => {
        setActiveLink(window.location.pathname);
    }, []);

    return (
        <header className="bg-black text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <Link to="/" className="text-2xl font-bold" onClick={() => setActiveLink("/")}>YourLogo</Link>
                </div>
                
                <nav>
                    <ul className="flex space-x-6">
                        {[
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
                                    className="hover:text-gray-300 transition-colors duration-1000"
                                    onClick={() => setActiveLink(link.path)}
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
            </div>
        </header>
    );
};

export default Header;