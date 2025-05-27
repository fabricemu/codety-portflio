// src/layouts/RootLayout.tsx
import type { ReactNode } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import { cn } from '../lib/utils';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="pt-20 px-4 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}

function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Education', href: '/education' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/80 dark:bg-black/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
          MyPortfolio
        </Link>
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition',
                pathname === item.href && 'font-semibold text-blue-600 dark:text-blue-400'
              )}
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

