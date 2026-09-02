import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  GraduationCap, 
  ArrowUpRight, 
  MessageCircle,
  Instagram,
  Facebook,
  Youtube,
  Globe,
  Compass
} from 'lucide-react';
import { FOUNDATION_INFO } from '../data/foundationData';

interface FooterProps {
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  return (
    <footer id="kontak" className="bg-[#032E24] text-white pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      
      {/* Final Call to Action Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="relative rounded-[32px] bg-gradient-to-r from-[#064E3B] to-[#043927] p-8 sm:p-12 lg:p-14 border border-emerald-700/60 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-[#E5C378] text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
              Penerimaan Santri & Siswa Baru
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-3">
              Mulai Masa Depan Gemilang Bersama Kami
            </h3>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Daftarkan putra-putri tercinta di jenjang RA, TK IT (Ber-AC), MTs, maupun MDTU 1 & 2 Al-Jam’iyatul Washliyah.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenRegister}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#B88E3E] text-white font-bold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Daftar Sekarang (PPDB)
            </button>
            <a
              href={FOUNDATION_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Admin</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-emerald-800/80">
          
          {/* Brand & Address (Col 1-4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#C5A059] flex items-center justify-center text-[#064E3B] shadow-md font-bold">
                <GraduationCap className="w-6 h-6 text-[#064E3B]" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-white">
                  {FOUNDATION_INFO.name}
                </h4>
                <p className="text-xs text-emerald-200">
                  Al-Jam’iyatul Washliyah
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed mb-6">
              {FOUNDATION_INFO.subTagline}
            </p>

            {/* Address Required */}
            <div className="space-y-3 text-xs sm:text-sm text-emerald-100/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  <strong>Alamat:</strong> {FOUNDATION_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{FOUNDATION_INFO.operatingHours}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>{FOUNDATION_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span className="truncate">{FOUNDATION_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Unit Pendidikan Links (Col 5-7) */}
          <div className="lg:col-span-3">
            <h5 className="font-heading font-bold text-sm uppercase tracking-wider text-[#C5A059] mb-4">
              Unit Pendidikan
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/80">
              <li>
                <a href="#unit-mts" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>MTs Al-Washliyah</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </li>
              <li>
                <a href="#unit-ra" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>RA Al-Washliyah</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </li>
              <li>
                <a href="#unit-tkit" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>TK IT Al-Washliyah</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </li>
              <li>
                <a href="#unit-mdtu" className="hover:text-white hover:underline transition-colors flex items-center justify-between">
                  <span>MDTU 1 & MDTU 2</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                </a>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-emerald-800/60">
              <h6 className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059] mb-2">
                Website Resmi Unit:
              </h6>
              <div className="flex flex-col gap-1.5 text-xs text-emerald-200">
                <a 
                  href="https://tkit-alwashliyah.sch.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline flex items-center gap-1"
                >
                  <span>Website TK IT</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C5A059]" />
                </a>
                <a 
                  href="https://mts-alwashliyah.sch.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline flex items-center gap-1"
                >
                  <span>Website MTs</span>
                  <ArrowUpRight className="w-3 h-3 text-[#C5A059]" />
                </a>
              </div>
            </div>
          </div>

          {/* Komunitas & Quick Links (Col 8-10) */}
          <div className="lg:col-span-3">
            <h5 className="font-heading font-bold text-sm uppercase tracking-wider text-[#C5A059] mb-4">
              Dakwah & Komunitas
            </h5>
            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100/80">
              <li>
                <a href="#komunitas-majelis" className="hover:text-white hover:underline transition-colors flex items-center gap-2">
                  <span>Majelis Taklim Keluarga</span>
                </a>
              </li>
              <li>
                <a href="#komunitas-pemuda" className="hover:text-white hover:underline transition-colors flex items-center gap-2">
                  <span>Kajian Islam Remaja & Pemuda</span>
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-white hover:underline transition-colors flex items-center gap-2">
                  <span>Fasilitas Ruang Ber-AC</span>
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-white hover:underline transition-colors flex items-center gap-2">
                  <span>Testimoni Orang Tua & Santri</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Map Preview (Col 11-12) */}
          <div className="lg:col-span-2">
            <h5 className="font-heading font-bold text-sm uppercase tracking-wider text-[#C5A059] mb-4">
              Ikuti Kami
            </h5>
            <div className="flex items-center gap-2.5 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#C5A059] hover:text-[#064E3B] text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#C5A059] hover:text-[#064E3B] text-white flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#C5A059] hover:text-[#064E3B] text-white flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={FOUNDATION_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
            </div>

            <a
              href={FOUNDATION_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#E5C378] hover:underline"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Buka Petunjuk Arah (Maps)</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <p>
            &copy; {new Date().getFullYear()} {FOUNDATION_INFO.name}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Al-Jam’iyatul Washliyah</span>
            <span>•</span>
            <span>Jl. Mangkoko / Sindangpalay</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
