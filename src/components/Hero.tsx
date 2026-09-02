import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, ShieldCheck, BookOpen, Award } from 'lucide-react';
import { FOUNDATION_INFO, FOUNDATION_STATS } from '../data/foundationData';

interface HeroProps {
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  return (
    <section id="beranda" className="relative pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Card with 32px rounded corners and Ken Burns background */}
        <div className="relative rounded-[32px] overflow-hidden bg-[#064E3B] text-white shadow-2xl border border-emerald-800/40 p-6 sm:p-10 md:p-14 lg:p-16">
          
          {/* Ken Burns Cinematic Image Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-25">
            <img
              src="hero_foundation.jpg"
              onError={(e) => {
                // Fallback high-res architecture / Islamic campus photo
                e.currentTarget.src = "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1920&q=80";
              }}
              alt="Yayasan Muhammad Djuneid Lubis Campus"
              className="w-full h-full object-cover object-center animate-ken-burns scale-105 filter brightness-90"
            />
            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#032E24] via-[#064E3B]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#032E24] via-transparent to-transparent" />
          </div>

          {/* Foreground Hero Content */}
          <div className="relative z-10 max-w-3xl">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E5C378] text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Penerimaan Santri & Siswa Baru (PPDB) Telah Dibuka</span>
            </div>

            {/* Main Required Heading */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] mb-6">
              Membentuk Generasi <span className="text-[#C5A059] underline decoration-[#C5A059]/40 underline-offset-8">Unggul</span>, Beradab, dan Berjiwa Qur’ani.
            </h1>

            {/* Subheading / Description */}
            <p className="text-emerald-100/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
              Pusat pendidikan dan dakwah Islam terpadu di bawah naungan <strong className="text-white font-medium">Yayasan Muhammad Djuneid Lubis</strong> (Al-Jam’iyatul Washliyah). Mengintegrasikan keunggulan sains modern, pembiasaan akhlaqul karimah, dan keluhuran ilmu syariah.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              {/* WhatsApp Hubungi Kami Button [1] */}
              <a
                id="hero-whatsapp-btn"
                href={FOUNDATION_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 text-white fill-current" />
                <span>Hubungi Kami (WhatsApp)</span>
              </a>

              {/* Daftar / Explore Button */}
              <a
                id="hero-explore-btn"
                href="#unit-pendidikan"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#B88E3E] text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Jelajahi Unit Pendidikan</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Key Value Mini Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-emerald-700/60">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-100">
                <div className="p-1.5 rounded-lg bg-emerald-800/80 text-[#C5A059]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Akreditasi Unggul</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-100">
                <div className="p-1.5 rounded-lg bg-emerald-800/80 text-[#C5A059]">
                  <Award className="w-4 h-4" />
                </div>
                <span>Fasilitas Ruang Ber-AC</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-100 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-lg bg-emerald-800/80 text-[#C5A059]">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span>Tahfidz & Kitab Kuning</span>
              </div>
            </div>

          </div>
        </div>

        {/* Foundation Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {FOUNDATION_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-[24px] p-4 sm:p-5 border border-stone-200/80 shadow-xs flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1"
            >
              <span className="font-heading font-extrabold text-2xl sm:text-3xl text-[#064E3B] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-stone-600 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
