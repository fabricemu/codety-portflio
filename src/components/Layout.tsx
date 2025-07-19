// src/layouts/RootLayout.tsx
import type {ReactNode} from 'react';
import {useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Folder, GraduationCap, Home, Mail} from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';
import {cn} from '../lib/utils';

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            <main className="pt-20 px-4 max-w-7xl mx-auto">{children}</main>
            <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6 mt-20">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Fabrice. All rights reserved.
                    </p>
                    <p className="text-xs mt-2">
                        Built with ❤️ using React and Tailwind CSS.
                    </p>
                </div>
            </footer>
        </div>
    );
}

function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    const navItems = [
        {name: 'Home', href: '/', icon: <Home className="w-4 h-4 mr-2"/>},
        {name: 'Education', href: '/education', icon: <GraduationCap className="w-4 h-4 mr-2"/>},
        {name: 'Projects', href: '/projects', icon: <Folder className="w-4 h-4 mr-2"/>},
        {name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4 mr-2"/>},
    ];

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-black/70 shadow-sm">
            <div className="px-4 md:px-6 py-4 flex items-center justify-between max-w-full">
                <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    MyPortfolio
                </Link>
                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            to={item.href}
                            className={cn(
                                'flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition',
                                pathname === item.href && 'font-semibold text-blue-600 dark:text-blue-400'
                            )}
                        >
                            {item.icon}
                            {item.name}
                        </Link>
                    ))}
                    <ThemeToggle/>
                </div>
                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle navigation menu"
                >
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-gray-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16"/>
                        )}
                    </svg>
                </button>
                {/* Mobile side nav */}
                {menuOpen && (
                    <div className="fixed inset-0 z-50 bg-black/40 md:hidden" onClick={() => setMenuOpen(false)}>
                        <div
                            className="absolute top-0 right-0 w-64 max-w-full h-full bg-white dark:bg-black shadow-lg flex flex-col gap-4 p-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="self-end mb-4 p-2 rounded-lg focus:outline-none"
                                onClick={() => setMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6 text-gray-800 dark:text-gray-100" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                            <div className="bg-white dark:bg-black rounded-lg shadow-md flex flex-col gap-2 p-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        to={item.href}
                                        className={cn(
                                            'flex items-center py-2 px-2 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition',
                                            pathname === item.href && 'font-semibold text-blue-600 dark:text-blue-400'
                                        )}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                ))}
                                <ThemeToggle/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}