import React from 'react';
import { 
  Users, 
  Sparkles, 
  Calendar, 
  Clock, 
  Flame, 
  Compass, 
  MessageCircle, 
  Tag,
  BookOpen,
  ArrowRight,
  Zap,
  Coffee
} from 'lucide-react';
import { COMMUNITY_PROGRAMS, FOUNDATION_INFO } from '../data/foundationData';

interface CommunitySectionProps {
  onOpenRegister: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onOpenRegister }) => {
  const majelis = COMMUNITY_PROGRAMS.find(p => !p.isYouth)!;
  const youthKajian = COMMUNITY_PROGRAMS.find(p => p.isYouth)!;

  return (
    <section id="komunitas" className="py-16 sm:py-20 lg:py-24 bg-[#F0F2EB]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 text-[#064E3B] text-xs sm:text-sm font-semibold mb-4 shadow-xs">
            <Users className="w-4 h-4 text-[#C5A059]" />
            <span>Pemberdayaan Umat & Kepemudaan</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#064E3B] tracking-tight leading-tight mb-5">
            Komunitas & Majelis Dakwah
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Menghidupkan syiar Islam melalui majelis ilmu yang sejuk untuk keluarga serta gerakan kajian kreatif yang membangkitkan ghiroh generasi muda.
          </p>
        </div>

        {/* 2 Distinct Blocks: Majelis Taklim (Serene) & Kajian Remaja & Pemuda (Youthful & Energetic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Block 1: Majelis Taklim (Serene & Maternal) */}
          <div
            id="komunitas-majelis"
            className="lg:col-span-5 bg-white rounded-[32px] p-6 sm:p-8 border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header Image with Ken Burns */}
              <div className="relative rounded-[24px] overflow-hidden bg-stone-100 h-52 sm:h-60 mb-6">
                <img
                  src={majelis.image}
                  onError={(e) => {
                    e.currentTarget.src = majelis.fallbackImage;
                  }}
                  alt={majelis.title}
                  className="w-full h-full object-cover animate-ken-burns filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#064E3B] text-xs font-bold shadow-xs">
                    Kajian Rutin Keluarga
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs text-emerald-200 flex items-center gap-1.5 mb-0.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{majelis.schedule}</span>
                  </p>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                    {majelis.title}
                  </h3>
                </div>
              </div>

              {/* Tagline & Audience */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider">
                  {majelis.category}
                </span>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  {majelis.description}
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 mb-6 pt-4 border-t border-stone-100">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#064E3B]">
                  Fokus Kegiatan Majelis:
                </h4>
                {majelis.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                    <BookOpen className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {majelis.topics.map((topic, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-stone-100">
              <a
                href={FOUNDATION_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#064E3B] hover:bg-[#032E24] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                <span>Gabung Grup WhatsApp Majelis</span>
              </a>
            </div>
          </div>

          {/* Block 2: Kajian Islam Remaja & Pemuda (Youthful, Energetic & Modern) */}
          <div
            id="komunitas-pemuda"
            className="lg:col-span-7 bg-[#064E3B] rounded-[32px] p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden flex flex-col justify-between border border-emerald-700/50"
          >
            {/* Background dynamic glow pattern */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Top Banner Row */}
              <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059] text-[#064E3B] font-extrabold text-xs shadow-sm">
                  <Flame className="w-4 h-4 fill-current" />
                  <span>YOUTH & TEEN MOVEMENT</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-emerald-200">
                  <Clock className="w-4 h-4 text-[#C5A059]" />
                  <span>{youthKajian.schedule}</span>
                </div>
              </div>

              {/* Title & Energetic Description */}
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-3">
                Kajian Islam Remaja & Pemuda
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-6">
                {youthKajian.description}
              </p>

              {/* Feature Grid inside Youth Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 text-[#C5A059] font-bold text-sm mb-1.5">
                    <Zap className="w-4 h-4" />
                    <span>Digital & Creative Dakwah</span>
                  </div>
                  <p className="text-xs text-emerald-100">
                    Workshop pembuatan konten positif, podcast islami, dan public speaking untuk milenial & Gen-Z.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 text-[#C5A059] font-bold text-sm mb-1.5">
                    <Coffee className="w-4 h-4" />
                    <span>Coffee & Halaqah Santai</span>
                  </div>
                  <p className="text-xs text-emerald-100">
                    Diskusi terbuka seputar karir, jodoh, pergaulan sehat, dan self-growth berlandaskan Al-Qur'an.
                  </p>
                </div>
              </div>

              {/* Interactive Trending Topic Tags */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A059] mb-2.5">
                  🔥 Topik Diskusi Populer:
                </p>
                <div className="flex flex-wrap gap-2">
                  {youthKajian.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/15 hover:bg-white/25 border border-white/15 text-xs text-white transition-all cursor-default"
                    >
                      #{topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions for Youth Section */}
            <div className="relative z-10 pt-6 border-t border-emerald-700/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#064E3B]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="member" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#064E3B]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="member" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#064E3B]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="member" />
                </div>
                <span className="text-xs text-emerald-200 font-medium">
                  250+ Pemuda Aktif Bergabung
                </span>
              </div>

              <a
                href={FOUNDATION_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C5A059] hover:bg-[#B88E3E] text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Join Youth Community</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
