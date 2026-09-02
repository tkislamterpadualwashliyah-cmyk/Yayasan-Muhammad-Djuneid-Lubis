import React from 'react';
import { X, CheckCircle2, Wind, Clock, Users, BookOpen, Sparkles, MessageCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { EducationalUnit } from '../types';
import { FOUNDATION_INFO } from '../data/foundationData';

interface UnitInfoModalProps {
  unit: EducationalUnit | null;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const UnitInfoModal: React.FC<UnitInfoModalProps> = ({ unit, onClose, onOpenRegister }) => {
  if (!unit) return null;

  const unitWhatsAppUrl = `https://wa.me/${FOUNDATION_INFO.whatsappNumber}?text=Assalamu%27alaikum%20Admin%2C%20saya%20tertarik%20dengan%20informasi%20pendaftaran%20${encodeURIComponent(unit.name)}.`;

  return (
    <div
      id="unit-info-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="unit-info-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-[32px] shadow-2xl border border-stone-200 overflow-hidden transform transition-all duration-300 scale-100 my-8 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95"
      >
        {/* Modal Header */}
        <div className="relative bg-[#064E3B] text-white p-6 sm:p-8 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-[#C5A059] text-white text-xs font-bold uppercase tracking-wider">
              {unit.badge}
            </span>
            {unit.hasAc && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 text-[#E5C378] text-xs font-semibold">
                <Wind className="w-3.5 h-3.5" />
                <span>{unit.id === 'mdtu' ? 'MDTU 2: Fasilitas Ber-AC' : 'Kelas Ber-AC'}</span>
              </span>
            )}
          </div>

          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
            {unit.name}
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            {unit.tagline}
          </p>
        </div>

        {/* Modal Body Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#064E3B] mb-2">
              Gambaran Umum & Visi Program
            </h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              {unit.description}
            </p>
          </div>

          {/* Quick Details Chips */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#F7F7F2] border border-stone-200/80 text-xs sm:text-sm">
            <div>
              <span className="text-stone-500 font-medium block">Sasaran Usia:</span>
              <span className="font-semibold text-stone-800">{unit.ageGroup}</span>
            </div>
            <div>
              <span className="text-stone-500 font-medium block">Waktu Belajar:</span>
              <span className="font-semibold text-stone-800">{unit.schedule}</span>
            </div>
          </div>

          {/* Kurikulum Unggulan */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#064E3B] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#C5A059]" />
              <span>Struktur & Muatan Kurikulum</span>
            </h4>
            <div className="space-y-2">
              {unit.curriculum.map((curr, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                  <span>{curr}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fasilitas Terkait */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#064E3B] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
              <span>Fasilitas Penunjang</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {unit.facilities.map((fac, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/60 text-xs text-stone-700 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>{fac}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-stone-50 border-t border-stone-200/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <a
            href={unitWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Tanya via WhatsApp</span>
          </a>

          <div className="flex items-center gap-2">
            {unit.externalWebsiteUrl && (
              <a
                href={unit.externalWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white border border-stone-300 text-stone-700 hover:text-[#064E3B] text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Website {unit.shortName}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#064E3B] hover:bg-[#032E24] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
            >
              <span>Form Pendaftaran</span>
              <ArrowRight className="w-4 h-4 text-[#C5A059]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
