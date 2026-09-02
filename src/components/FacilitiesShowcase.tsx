import React from 'react';
import { Wind, Building2, Laptop, Smile, Sparkles, Check } from 'lucide-react';
import { FACILITIES_DATA } from '../data/foundationData';

export const FacilitiesShowcase: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#C5A059]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#C5A059]" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-[#C5A059]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C5A059]" />;
    }
  };

  return (
    <section id="fasilitas" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200 text-[#064E3B] text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>Kenyamanan & Standar Unggul</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#064E3B] tracking-tight leading-tight mb-5">
            Fasilitas Pembelajaran Modern
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Menghadirkan lingkungan belajar yang sejuk, bersih, aman, dan kondusif untuk mendukung konsentrasi dan kebahagiaan setiap santri dan peserta didik.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES_DATA.map((fac) => (
            <div
              key={fac.id}
              className="group bg-white rounded-[32px] p-6 border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Ken Burns */}
                <div className="relative h-44 rounded-[22px] overflow-hidden bg-stone-100 mb-5">
                  <img
                    src={fac.image}
                    onError={(e) => {
                      e.currentTarget.src = fac.fallbackImage;
                    }}
                    alt={fac.title}
                    className="w-full h-full object-cover animate-ken-burns group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {fac.isAc && (
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#C5A059] text-white text-[11px] font-bold shadow-sm">
                        <Wind className="w-3 h-3" />
                        <span>Ruang Ber-AC</span>
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-3 p-2 rounded-xl bg-white/90 backdrop-blur-md shadow-xs">
                    {getIcon(fac.iconName)}
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                  {fac.subtitle}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#064E3B] mt-1 mb-2">
                  {fac.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {fac.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs text-[#064E3B] font-semibold">
                <Check className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Standar Terverifikasi</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
