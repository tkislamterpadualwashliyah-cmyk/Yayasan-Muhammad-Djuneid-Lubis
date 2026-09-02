import React from 'react';
import { 
  CheckCircle2, 
  ExternalLink, 
  Info, 
  Wind, 
  Sparkles, 
  Clock, 
  ArrowRight,
  School,
  Baby,
  BookOpen
} from 'lucide-react';
import { EDUCATIONAL_UNITS } from '../data/foundationData';
import { EducationalUnit } from '../types';

interface UnitShowcaseProps {
  onSelectUnit: (unit: EducationalUnit) => void;
  onOpenRegister: () => void;
}

const unitCategoryIcons: Record<string, React.ElementType> = {
  mts: School,
  ra: Baby,
  tkit: Sparkles,
  mdtu: BookOpen,
};

export const UnitShowcase: React.FC<UnitShowcaseProps> = ({ onSelectUnit, onOpenRegister }) => {
  return (
    <section id="unit-pendidikan" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-[#064E3B] text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>Jenjang & Program Pendidikan</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#064E3B] tracking-tight leading-tight mb-4">
            Unit Pendidikan Al-Washliyah
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Jelajahi seluruh program pendidikan formal dan diniyah di bawah naungan Yayasan Muhammad Djuneid Lubis secara lengkap dan terpadu.
          </p>
        </div>

        {/* Units Showcase: Stacked Natural Flow (Touch-friendly, fully scrollable) */}
        <div className="space-y-10 sm:space-y-14">
          {EDUCATIONAL_UNITS.map((unit, index) => {
            const isReversed = index % 2 === 1;
            const CategoryIcon = unitCategoryIcons[unit.id] || Sparkles;

            return (
              <div
                key={unit.id}
                id={`unit-${unit.id}`}
                className="scroll-mt-28 bg-white rounded-[28px] sm:rounded-[32px] p-5 sm:p-8 lg:p-10 border border-stone-200/90 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
                  
                  {/* Image Showcase Column */}
                  <div className={`lg:col-span-5 relative overflow-hidden rounded-[22px] sm:rounded-[26px] bg-stone-100 min-h-[260px] sm:min-h-[320px] lg:min-h-[380px] shadow-inner group ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <img
                      src={unit.image}
                      onError={(e) => {
                        e.currentTarget.src = unit.fallbackImage;
                      }}
                      alt={unit.name}
                      className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 flex-wrap z-10">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#064E3B] font-bold text-xs shadow-sm border border-stone-100 flex items-center gap-1.5">
                        <CategoryIcon className="w-3.5 h-3.5 text-[#C5A059]" />
                        <span>{unit.badge}</span>
                      </span>

                      {unit.hasAc && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059] text-white font-bold text-xs shadow-sm">
                          <Wind className="w-3.5 h-3.5" />
                          <span>{unit.id === 'mdtu' ? 'MDTU 2: Fasilitas Ber-AC' : 'Ruang Kelas Ber-AC'}</span>
                        </span>
                      )}
                    </div>

                    {/* Bottom Caption on Image */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white z-10">
                      <div className="flex items-center gap-2 text-xs font-medium text-emerald-200 mb-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{unit.schedule}</span>
                      </div>
                      <h4 className="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                        {unit.name}
                      </h4>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 flex flex-col justify-between ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}>
                    <div>
                      {/* Category & Age Group Meta */}
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">
                          {unit.category}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                        <span className="text-xs text-stone-500 font-medium">
                          {unit.ageGroup}
                        </span>
                      </div>

                      {/* Unit Title */}
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#064E3B] tracking-tight mb-2">
                        {unit.name}
                      </h3>

                      {/* Tagline */}
                      <p className="font-medium text-stone-700 text-sm sm:text-base mb-3 italic">
                        "{unit.tagline}"
                      </p>

                      {/* Description */}
                      <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-5">
                        {unit.description}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-6">
                        {unit.highlights.slice(0, 4).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                            <span className="leading-snug">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer Action Buttons - Touch-Friendly, Accessible, No Trapping */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 sm:pt-5 border-t border-stone-100">
                      {/* External Website Button (MTs & TK IT) */}
                      {unit.externalWebsiteUrl && (
                        <a
                          id={`btn-visit-${unit.id}`}
                          href={unit.externalWebsiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-[#064E3B] hover:bg-[#032E24] text-white font-semibold text-xs sm:text-sm shadow-sm transition-all duration-200 active:scale-95"
                        >
                          <span>Kunjungi Website {unit.shortName}</span>
                          <ExternalLink className="w-4 h-4 text-[#C5A059]" />
                        </a>
                      )}

                      {/* Modal Trigger for Detailed Curriculum */}
                      <button
                        id={`btn-info-${unit.id}`}
                        onClick={() => onSelectUnit(unit)}
                        className="min-h-[44px] inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full bg-stone-50 hover:bg-stone-100 text-[#064E3B] border border-stone-300/80 font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-95 cursor-pointer"
                      >
                        <Info className="w-4 h-4 text-[#064E3B]" />
                        <span>Informasi & Kurikulum</span>
                      </button>

                      {/* Daftar Sekarang Button */}
                      <button
                        id={`btn-enroll-${unit.id}`}
                        onClick={onOpenRegister}
                        className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#C5A059] hover:bg-[#B88E3E] text-white font-semibold text-xs sm:text-sm transition-all duration-200 active:scale-95 sm:ml-auto cursor-pointer shadow-sm"
                      >
                        <span>Daftar Sekarang</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
