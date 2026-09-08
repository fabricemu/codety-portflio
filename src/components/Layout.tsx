import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Menu, X, ArrowUpRight, Github, Linkedin } from 'lucide-react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#07070a] text-zinc-100 flex flex-col selection:bg-indigo-600 selection:text-white relative">
      {/* Global Background Grid & Lighting */}
      <div className="fixed inset-0 simba-grid-bg pointer-events-none opacity-40 z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-indigo-500/[0.04] blur-[150px] pointer-events-none z-0" />

      <Navbar />

      <main className="flex-1 relative z-10 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (pathname === '/') {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const elem = document.getElementById(targetId);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      }
    }
  };

  const navLinks = [
    { name: 'Architecture', href: '/#architecture-console' },
    { name: 'Pillars', href: '/#pillars' },
    { name: 'Skills', href: '/#skills-matrix' },
    { name: 'Projects', href: '/projects' },
    { name: 'Education', href: '/education' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
      <div
        className={`mx-auto max-w-6xl rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-zinc-950/85 backdrop-blur-xl border border-zinc-800/90 shadow-2xl shadow-black/50'
            : 'bg-zinc-950/50 backdrop-blur-md border border-zinc-800/40'
        }`}
      >
        {/* Brand Logo / Identity */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 text-white font-bold tracking-tight text-sm sm:text-base group"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white text-xs font-black shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
            FM
          </span>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
              Fabrice Munezero
            </span>
            <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline">
              Full-Stack & Systems
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isHash = link.href.startsWith('/#');
            const isActive = !isHash && pathname === link.href;

            if (isHash) {
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/[0.05] transition cursor-pointer"
                >
                  {link.name}
                </button>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition ${
                  isActive
                    ? 'text-indigo-400 bg-indigo-500/10 font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Utility: Availability Beacon & CTA Button */}
        <div className="flex items-center gap-3">
          
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Projects</span>
          </div>

          <button
            onClick={() => handleNavClick('/#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/25 transition cursor-pointer"
          >
            <span>Let&apos;s Build</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-md rounded-2xl bg-zinc-950/95 border border-zinc-800/90 shadow-2xl backdrop-blur-2xl p-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isHash = link.href.startsWith('/#');
            return isHash ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition"
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="pt-3 mt-1 border-t border-zinc-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Freelance</span>
            </div>
            <button
              onClick={() => handleNavClick('/#contact')}
              className="px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-semibold"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 text-zinc-400 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white text-xs font-black">
                FM
              </span>
              <span className="text-lg font-bold text-white">Fabrice Munezero</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Freelance Full-Stack Software Developer experienced in building scalable web applications, REST APIs, database-driven architectures, and AI/NLP systems. Building with production certainty.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-zinc-500">
              <span>FastAPI</span>
              <span>•</span>
              <span>Spring Boot</span>
              <span>•</span>
              <span>Next.js</span>
              <span>•</span>
              <span>PostgreSQL</span>
              <span>•</span>
              <span>Docker</span>
              <span>•</span>
              <span>NLLB-200</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home & Architecture</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Featured Projects</Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-white transition-colors">Education & Training</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Inquiries</Link>
              </li>
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/fabricemu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:fabriceumunezero@gmail.com"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Fabrice Munezero. Build with certainty.</p>
          <p className="flex items-center gap-1.5">
            <span>Engineered with React, TypeScript & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}