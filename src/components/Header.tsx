import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap } from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData';

interface HeaderProps {
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Unit Pendidikan', href: '#unit-pendidikan' },
    { name: 'Komunitas & Kajian', href: '#komunitas' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#F7F7F2]/90 backdrop-blur-md shadow-sm border-b border-stone-200/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#beranda"
            id="brand-logo"
            className="flex items-center gap-3.5 group cursor-pointer text-decoration-none"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#064E3B] flex items-center justify-center text-[#C5A059] shadow-md border border-[#C5A059]/30 transition-transform duration-300 group-hover:scale-105">
              <GraduationCap className="w-6 h-6 text-[#C5A059]" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base sm:text-lg text-[#064E3B] tracking-tight leading-tight">
                Muhammad Djuneid Lubis
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-stone-500 tracking-wider uppercase">
                Yayasan & Pendidikan Islam
              </span>
            </div>
          </a>

          {/* Quick Bar Links (Center) */}
          <nav
            id="quick-bar-nav"
            className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-stone-700 hover:text-[#064E3B] hover:bg-[#F7F7F2] rounded-full transition-all duration-200 whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Right */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-cta-register"
              onClick={onOpenRegister}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#B88E3E] text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Daftar Sekarang</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-register-btn"
              onClick={onOpenRegister}
              className="px-3 py-1.5 rounded-full bg-[#C5A059] text-white font-semibold text-xs shadow-xs"
            >
              Daftar
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/80 border border-stone-200 text-stone-700 hover:text-[#064E3B]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown"
          className="sm:hidden px-4 pt-3 pb-6 bg-[#F7F7F2] border-b border-stone-200/80 shadow-xl transition-all"
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-stone-700 hover:text-[#064E3B] hover:bg-stone-200/60 rounded-xl"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-stone-200/60">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 rounded-xl bg-[#064E3B] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Daftar Sekarang (PPDB)</span>
                <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
