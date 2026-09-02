import React, { useState, useEffect } from 'react';
import { School, Baby, Sparkles, BookOpen, Users, Compass } from 'lucide-react';

interface SubNavItem {
  id: string;
  name: string;
  short: string;
  icon: React.ElementType;
  targetId: string;
  badge?: string;
}

export const FloatingSubNav: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('mts');

  const navItems: SubNavItem[] = [
    { id: 'mts', name: 'MTs Al-Washliyah', short: 'MTs', icon: School, targetId: 'unit-mts' },
    { id: 'ra', name: 'RA Al-Washliyah', short: 'RA', icon: Baby, targetId: 'unit-ra' },
    { id: 'tkit', name: 'TK IT Al-Washliyah', short: 'TK IT', icon: Sparkles, targetId: 'unit-tkit' },
    { id: 'mdtu', name: 'MDTU Al-Washliyah', short: 'MDTU', icon: BookOpen, targetId: 'unit-mdtu' },
    { id: 'majelis', name: 'Majelis Taklim', short: 'Majelis', icon: Users, targetId: 'komunitas-majelis' },
    { id: 'kajian', name: 'Kajian Pemuda', short: 'Kajian', icon: Compass, targetId: 'komunitas-pemuda' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.targetId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveItem(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTarget = (targetId: string, itemId: string) => {
    setActiveItem(itemId);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      id="floating-sub-nav-container"
      className="sticky top-16 sm:top-20 z-40 py-2.5 px-4 pointer-events-none transition-all duration-300"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-center pointer-events-auto">
        <nav
          id="floating-sub-nav-bar"
          className="flex items-center gap-1.5 p-1.5 rounded-[32px] bg-white/90 backdrop-blur-md border border-stone-200/90 shadow-lg overflow-x-auto no-scrollbar max-w-full"
          aria-label="Floating Unit Navigation"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                id={`subnav-${item.id}`}
                onClick={() => scrollToTarget(item.targetId, item.id)}
                className={`relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-[24px] text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#064E3B] text-white shadow-sm'
                    : 'text-stone-700 hover:text-[#064E3B] hover:bg-stone-100/80'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#C5A059]' : 'text-stone-500'}`} />
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">{item.short}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isActive
                        ? 'bg-[#C5A059] text-white'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
