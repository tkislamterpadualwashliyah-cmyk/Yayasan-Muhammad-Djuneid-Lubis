import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { FOUNDATION_INFO, EDUCATIONAL_UNITS, COMMUNITY_PROGRAMS } from '../data/foundationData';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [selectedProgram, setSelectedProgram] = useState<string>('TK IT Al-Washliyah (Ruang Kelas Ber-AC)');
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const message = `Assalamu'alaikum Admin Yayasan Muhammad Djuneid Lubis,\n\nSaya ingin mendaftarkan calon peserta didik:\n- Program/Unit: ${selectedProgram}\n- Nama Calon Siswa/Santri: ${studentName}\n- Nama Orang Tua/Wali: ${parentName}\n- No. WhatsApp: ${phone}\n- Catatan/Pertanyaan: ${notes || '-'}\n\nMohon informasi langkah pendaftaran selanjutnya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/${FOUNDATION_INFO.whatsappNumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setStudentName('');
    setParentName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div
      id="registration-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="registration-modal-card"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl border border-stone-200 overflow-hidden transform transition-all duration-300 scale-100 my-8 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95"
      >
        {/* Modal Header */}
        <div className="bg-[#064E3B] text-white p-6 sm:p-8 shrink-0 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Tutup Pendaftaran"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E5C378] text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Formulir Pendaftaran & Konsultasi</span>
          </div>

          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
            Pendaftaran Peserta Didik Baru (PPDB)
          </h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            Yayasan Muhammad Djuneid Lubis - Tahun Ajaran 2026/2027
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#064E3B] mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-[#064E3B]" />
              </div>
              <h4 className="font-heading font-bold text-xl text-[#064E3B] mb-2">
                Terima Kasih! Formulir Terkirim
              </h4>
              <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
                Data pendaftaran Anda sedang dihubungkan ke WhatsApp Layanan Administrasi Yayasan untuk verifikasi berkas dan panduan selanjutnya.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#064E3B] text-white font-semibold text-sm hover:bg-[#032E24] transition-all"
              >
                Tutup & Selesai
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Pilih Unit Pendidikan / Program
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl border border-stone-300 bg-white text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                  required
                >
                  <optgroup label="Unit Pendidikan">
                    <option value="TK IT Al-Washliyah (Ruang Kelas Ber-AC)">TK IT Al-Washliyah (Ruang Kelas Ber-AC)</option>
                    <option value="RA Al-Washliyah (Play-based & Adab)">RA Al-Washliyah (Play-based & Adab)</option>
                    <option value="MTs Al-Washliyah (Akademik & Sains)">MTs Al-Washliyah (Akademik & Sains)</option>
                    <option value="MDTU 2 Al-Washliyah (Fasilitas Kelas Ber-AC Sore)">MDTU 2 Al-Washliyah (Fasilitas Kelas Ber-AC Sore)</option>
                    <option value="MDTU 1 Al-Washliyah (Kelas Diniyah Sore)">MDTU 1 Al-Washliyah (Kelas Diniyah Sore)</option>
                  </optgroup>
                  <optgroup label="Majelis & Komunitas">
                    <option value="Majelis Taklim Al-Washliyah (Keluarga/Ibu-Ibu)">Majelis Taklim Al-Washliyah (Keluarga/Ibu-Ibu)</option>
                    <option value="Kajian Islam Remaja & Pemuda (Youth Movement)">Kajian Islam Remaja & Pemuda (Youth Movement)</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Nama Lengkap Calon Siswa / Santri
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Contoh: Muhammad Rayhan Al-Fatih"
                  className="w-full px-4 py-3 rounded-2xl border border-stone-300 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Nama Orang Tua / Wali
                  </label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Nama Ayah / Ibu"
                    className="w-full px-4 py-3 rounded-2xl border border-stone-300 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="08xxxxxxxxxx"
                    className="w-full px-4 py-3 rounded-2xl border border-stone-300 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Catatan Khusus / Pertanyaan (Opsional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Tanyakan hal seputar jadwal, kurikulum, atau fasilitas..."
                  className="w-full px-4 py-3 rounded-2xl border border-stone-300 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#C5A059] hover:bg-[#B88E3E] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Kirim Data via WhatsApp Otomatis</span>
                </button>
                <p className="text-[11px] text-stone-500 text-center mt-2">
                  🔒 Data Anda terjaga dengan aman dan hanya digunakan untuk keperluan administrasi pendaftaran.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
