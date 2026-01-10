import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  // =========================
  // STATE
  // =========================
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // =========================
  // SCROLL HANDLER (HEADER)
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false);
      } else if (lastScrollY - currentScrollY > 20) {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // =========================
  // LOCK SCROLL WHEN MOBILE MENU OPEN
  // =========================
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  // =========================
  // NAV ITEMS
  // =========================
  const navItems = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Layanan', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Kontak', href: '#contact' },
  ];

  // =========================
  // SCROLL FUNCTION
  // =========================
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }

    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =========================
          HEADER
      ========================= */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: showHeader ? 0 : -120 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className={`
          fixed top-0 left-0 right-0 z-50
          ${isAtTop ? 'bg-transparent' : 'bg-slate-900/70 backdrop-blur-lg'}
          ${isAtTop ? 'border-none' : 'border-b border-slate-800'}
          shadow-lg
        `}
      >
        <nav id="home" className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <motion.a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="flex items-center text-2xl font-bold relative h-10"
            >
              <span className="text-slate-50">Triple</span>
              <div className="relative w-24 h-28">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="absolute mt-0.5 -ml-8 max-w-none w-24 h-28 object-contain"
                />
              </div>
            </motion.a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-slate-300 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden text-white relative z-[70]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* =========================
          MOBILE MENU OVERLAY (GLOBAL)
      ========================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="
              fixed inset-0 z-[999]
              md:hidden
              bg-gradient-to-br
              from-[#0f172a]
              via-[#020617]
              to-[#020617]
              backdrop-blur-2xl
              flex flex-col
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 text-slate-300 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>

            {/* LOGO CENTER */}
            <div className="pt-24 flex flex-col items-center">
              <div className="flex items-center text-3xl font-bold">
                <span className="text-slate-50">Triple</span>
                <div className="relative w-28 h-28 -ml-8">
                  <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-28 h-28 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* MENU ITEMS */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="
                    w-full max-w-xs
                    text-center
                    py-4
                    rounded-xl
                    bg-white/10
                    backdrop-blur-md
                    text-lg font-semibold
                    text-slate-100
                    hover:bg-white/20
                    transition-all
                  "
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            {/* CTA BUTTON */}
            <div className="pb-10 px-6">
              <a
                href="https://wa.me/628XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block w-full max-w-xs mx-auto
                  text-center
                  py-4 rounded-xl
                  font-semibold
                  text-slate-900
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  hover:brightness-110
                  transition-all
                "
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
