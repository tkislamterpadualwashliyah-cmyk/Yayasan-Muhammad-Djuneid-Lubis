import { EducationalUnit, CommunityProgram, Testimonial, Facility } from '../types';

export const FOUNDATION_INFO = {
  name: "Yayasan Muhammad Djuneid Lubis Kota Tasikmalaya",
  tagline: "Membentuk Generasi Unggul, Beradab, dan Berjiwa Qur’ani.",
  subTagline: "Lembaga Pendidikan & Dakwah Islam Terpadu Al-Jam’iyatul Washliyah yang memadukan keunggulan sains modern, adab mulia, dan keluhuran ilmu syariah.",
  address: "Jl. Mangkoko / Sindangpalay, Sukabumi, Jawa Barat",
  whatsappNumber: "6281234567890",
  whatsappUrl: "https://wa.me/6281234567890?text=Assalamu%27alaikum%20Admin%20Yayasan%20Muhammad%20Djuneid%20Lubis%2C%20saya%20ingin%20bertanya%20informasi%20pendaftaran%20dan%20program.",
  email: "tkislamterpadualwashliyah@gmail.com",
  phone: "+62 812-3456-7890",
  establishedYear: "1998",
  operatingHours: "Senin - Sabtu: 07.30 - 16.30 WIB",
  googleMapsUrl: "https://maps.google.com/?q=Jl.+Mangkoko+Sindangpalay+Sukabumi",
};

export const EDUCATIONAL_UNITS: EducationalUnit[] = [
  {
    id: "mts",
    name: "MTsS Al-Jam'iyatul Washliyah",
    shortName: "MTs",
    badge: "Pendidikan Menengah Formal",
    category: "Pendidikan Menengah (Formal)",
    tagline: "Keunggulan Akademik, Karakter Islami, dan Penguasaan Sains & Teknologi.",
    description: "Madrasah Tsanawiyah dengan fokus keunggulan akademik yang terakreditasi unggul. Mengintegrasikan kurikulum nasional kemenag/kemendikbud dengan penguatan tahfidz Qur'an, sains terapan, bahasa Arab-Inggris, dan pembinaan kepemimpinan pemuda.",
    highlights: [
      "Kurikulum Terintegrasi Nasional & Kepesantrenan",
      "Program Tahfidz Al-Qur'an Juz 30 & Target Khusus",
      "Laboratorium Komputer & Sains Terpadu",
      "Bilingual Habituation (Bahasa Arab & English)",
      "Ekstrakurikuler Robotik, Pramuka, & Seni Islami",
      "Pembinaan Karakter Adab & Akhlaqul Karimah"
    ],
    curriculum: [
      "Kurikulum Merdeka Kemenag & Kemendikbudristek",
      "Dirasah Islamiyah (Aqidah, Akhlaq, Fiqh, SKI, Qur'an Hadits)",
      "Penguasaan Bahasa Asing Terpadu (Arab & Inggris Aktif)",
      "Pengembangan Literasi Digital & Sains Terapan",
      "Bimbingan Prestasi Olimpiade Sains & Keagamaan"
    ],
    facilities: [
      "Ruang Kelas Representatif & Multimedia",
      "Laboratorium Komputer & Akses Internet Cepat",
      "Perpustakaan Digital & Ruang Baca Nyaman",
      "Lapangan Olahraga Futsal & Basket",
      "Aula Serbaguna & Masjid Pembinaan"
    ],
    schedule: "Senin - Jumat: 07.00 - 15.00 WIB",
    ageGroup: "Usia 12 - 15 Tahun (Lulusan SD/MI)",
    hasAc: false,
    externalWebsiteUrl: "https://mts.alwashliyah.sch.id",
    image: "mts_photo.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    accentColor: "#064E3B"
  },
  {
    id: "ra",
    name: "RA Al-Jam'iyatul Washliyah",
    shortName: "RA",
    badge: "Pendidikan Usia Dini (PAUD)",
    category: "Pendidikan Anak Usia Dini (PAUD/RA)",
    tagline: "Play-Based Learning dengan Penanaman Adab Sejak Usia Emas.",
    description: "Raudhatul Athfal yang mengutamakan metode belajar melalui bermain (play-based learning), stimulasi motorik terarah, dan pembiasaan adab harian islami untuk mengoptimalkan golden age ananda dengan penuh kasih sayang.",
    highlights: [
      "Metode Pembelajaran Play-Based & Hands-on Learning",
      "Penanaman Adab, Doa Harian, & Hafalan Surat Pendek",
      "Stimulasi Sensori-Motorik & Kreativitas Seni",
      "Lingkungan Belajar Ramah Anak, Bersih & Ceria",
      "Pemeriksaan Tumbuh Kembang & Gizi Berkala",
      "Guru Pendidik Tersertifikasi & Berpengalaman"
    ],
    curriculum: [
      "Kurikulum PAUD Berbasis Nilai-Nilai Fitrah & Islam",
      "Pengenalan Huruf Hijaiyah dengan Metode Ceria (Tilawati/Iqro)",
      "Eksplorasi Alam & Outing Class Tematik Edukatif",
      "Pembiasaan Shalat Dhuha & Adab Makan/Minum",
      "Pengembangan Sosial Emosional & Kemandirian Anak"
    ],
    facilities: [
      "Area Bermain Outdoor & Indoor Edukatif",
      "Pojok Sensori & Arena Motorik Kasar/Halus",
      "Ruang Kelas Interaktif Berwarna Lembut",
      "Pojok Cerita Islami & Puppet Corner",
      "Kantin Sehat & Ruang Istirahat Nyaman"
    ],
    schedule: "Senin - Jumat: 07.30 - 11.00 WIB",
    ageGroup: "Usia 4 - 6 Tahun",
    hasAc: false,
    image: "ra_learning.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80",
    accentColor: "#065F46"
  },
  {
    id: "tkit",
    name: "TK IT Al-Washliyah",
    shortName: "TK IT",
    badge: "Taman Kanak-Kanak Islam Terpadu",
    category: "Taman Kanak-Kanak Islam Terpadu",
    tagline: "Pendidikan Islam Terpadu Modern dengan Fasilitas Unggulan.",
    description: "Taman Kanak-Kanak Islam Terpadu unggulan dengan fasilitas Ruang Kelas Full AC yang sejuk dan nyaman. Memadukan kurikulum Islam Terpadu (JSIT), pembiasaan bilingual dasar, tahfidz juz amma, dan media belajar digital interaktif.",
    externalWebsiteUrl: "https://tkit-alwashliyah.sch.id",
    highlights: [
      "Ruang Kelas Ber-AC Full untuk Kenyamanan Optimal",
      "Kurikulum Islam Terpadu Berstandar Tinggi",
      "Islamic Montessori & Smart Learning Tools",
      "Tahfidz Tematik & Tahsin Qur'an Cepat",
      "Pengenalan Dasar Bahasa Arab & Inggris Ceria",
      "Laporan Portofolio Tumbuh Kembang Digital"
    ],
    curriculum: [
      "Integrasi Kurikulum Nasional & Kurikulum Islam Terpadu",
      "Target Hafalan 15+ Surat Pendek & Hadits Pilihan",
      "Program Smart Kids (Science Discovery & Math Logic)",
      "Praktik Ibadah Terbimbing & Manasik Haji Cilik",
      "Character Building: 10 Karakter Muslim Berbudi"
    ],
    facilities: [
      "Ruang Kelas Ber-AC Nyaman & Air Purifier",
      "Smart Screen & Interactive Learning Board",
      "Soft Playground & Taman Edukasi Mini",
      "Perpustakaan Mini Bergambar Interaktif",
      "CCTV Keamanan & Pengawasan Terpantau"
    ],
    schedule: "Senin - Jumat: 07.30 - 11.30 WIB",
    ageGroup: "Usia 4 - 6 Tahun",
    hasAc: true,
    image: "tk_ac_room.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80",
    accentColor: "#043927"
  },
  {
    id: "mdtu",
    name: "MDTU 1 & MDTU 2 Al-Washliyah",
    shortName: "MDTU 1 & 2",
    badge: "MDTU 1 & MDTU 2",
    category: "Madrasah Diniyah Takmiliyah Ula (MDTU 1 & MDTU 2)",
    tagline: "Pendidikan Diniyah Sore Hari: MDTU 1 & MDTU 2 (Fasilitas Ber-AC).",
    description: "Pendidikan Diniyah sore hari pelengkap sekolah formal yang terdiri dari dua unit: MDTU 1 dan MDTU 2. Khusus MDTU 2 dilengkapi dengan fasilitas Ruang Kelas Ber-AC yang sejuk dan nyaman untuk menjamin konsentrasi dan ketenangan santri selama belajar intensif kitab kuning, nahwu sharaf, tajwid makhraj, dan hafalan doa.",
    highlights: [
      "Tersedia 2 Pilihan Unit: MDTU 1 dan MDTU 2",
      "Fasilitas Khusus: MDTU 2 Dilengkapi Ruang Kelas Ber-AC",
      "Kajian Kitab Kuning Dasar (Safinatun Najah, Akhlaq Lil Banin/Banat)",
      "Tahsin Al-Qur'an Bersanad & Tajwid Terbimbing",
      "Praktek Ibadah Fardhu & Sunnah Sesuai Sunnah",
      "Waktu Belajar Sore Hari yang Fleksibel (Setelah Sekolah Formal)",
      "Ijazah Madrasah Diniyah Resmi Kemenag"
    ],
    curriculum: [
      "Fiqh Ibadah Praktis & Aqidatul Awwam",
      "Nahwu & Sharaf Tingkat Dasar (Al-Jurumiyah)",
      "Tahsin Tilawah Al-Qur'an & Imla' Pegon/Arab",
      "Tarikh Islam & Akhlaq Lil Banin / Lil Banat",
      "Hafalan Doa Sehari-hari & Dzikir Pagi Petang"
    ],
    facilities: [
      "MDTU 2: Ruang Kelas Ber-AC & Meja Belajar Ergonomis",
      "MDTU 1: Ruang Kelas Asri & Sirkulasi Udara Alami",
      "Masjid/Musholla Utama untuk Praktik Wudhu & Shalat",
      "Koleksi Kitab-Kitab Klasik & Buku Panduan Diniyah",
      "Sound System Berkualitas untuk Pembelajaran Murottal"
    ],
    schedule: "Senin - Kamis: 14.00 - 17.00 WIB",
    ageGroup: "Santri Usia 7 - 14 Tahun (SD/MI & SMP/MTs)",
    hasAc: true,
    image: "mdtu_study.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&w=1200&q=80",
    accentColor: "#064E3B"
  }
];

export const COMMUNITY_PROGRAMS: CommunityProgram[] = [
  {
    id: "majelis-taklim",
    title: "Majelis Taklim Al-Washliyah",
    category: "Kajian Ibu-Ibu & Kaum Muslimin",
    targetAudience: "Ibu-Ibu, Orang Tua Santri & Masyarakat Umum",
    schedule: "Rutin Setiap Hari Ahad Pagi (08.30 - 10.30 WIB) & Rabu Sore",
    description: "Ruang silaturahmi dan penguatan spiritualitas keluarga muslim melalui tadabbur ayat-ayat Al-Qur'an, fiqh keluarga sakinah, pengasuhan anak secara islami, dan dzikir bersama dalam suasana yang sejuk dan meneduhkan.",
    highlights: [
      "Kajian Fiqh Ibadah & Wanita Muslimah Bersama Ustadzah",
      "Tadabbur Al-Qur'an & Pembacaan Ratib / Dzikir",
      "Konsultasi Parenting Islam & Keharmonisan Rumah Tangga",
      "Kegiatan Sosial & Santunan Yatim / Dhuafa Berkala"
    ],
    topics: [
      "Fiqh Wanita & Thaharah",
      "Mendidik Anak Zaman Digital dengan Nilai Adab",
      "Kajian Tafsir Surat Pilihan",
      "Meneladani Akhlak Ummahatul Mukminin"
    ],
    image: "majelis_taklim.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=80",
    isYouth: false
  },
  {
    id: "kajian-pemuda",
    title: "Kajian Islam Remaja & Pemuda (Youth Movement)",
    category: "Kajian Gen-Z & Milenial Muslim",
    targetAudience: "Pelajar, Mahasiswa, Pemuda-Pemudi & Generasi Muda",
    schedule: "Setiap Malam Ahad (19.30 - 21.30 WIB) & Workshop Bulanan",
    description: "Wadah berhimpun anak muda yang dinamis, kreatif, dan berprinsip. Membedah isu-isu kontemporer, kepemimpinan pemuda islam, etika digital, personal branding syar'i, dan halaqah santai bernuansa kafe pemuda.",
    highlights: [
      "Diskusi Interaktif & Open Mic Q&A Seputar Dilema Pemuda",
      "Creative Digital Dakwah & Content Creator Camp",
      "Youth MABIT (Malam Bina Iman dan Taqwa) & Outdoor Camp",
      "Networking & Komunitas Wirausaha Muda Syariah"
    ],
    topics: [
      "Menemukan Ikigai & Tujuan Hidup Muslim Muda",
      "Mental Health & Resiliensi dalam Perspektif Islam",
      "Leadership & Critical Thinking ala Sahabat Nabi",
      "Financial Literacy & Bisnis Halal untuk Gen-Z"
    ],
    image: "kajian_youth.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    isYouth: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Hj. Siti Rahmawati, S.Pd.",
    role: "Orang Tua Siswa",
    unit: "TK IT Al-Washliyah",
    quote: "Fasilitas kelas ber-AC sangat membantu anak saya tetap nyaman dan fokus saat belajar. Perkembangan adab, doa harian, dan hafalan surat pendeknya sangat luar biasa hanya dalam beberapa bulan.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "2",
    name: "Drs. H. Ahmad Fauzi",
    role: "Wali Santri",
    unit: "MTs Al-Washliyah",
    quote: "Kombinasi antara kurikulum akademik formal dan penguatan diniyah di MTs Al-Washliyah sangat seimbang. Anak kami tidak hanya berprestasi di olimpiade sains tetapi juga memiliki pegangan aqidah yang kuat.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "3",
    name: "Rizky Ramadhan",
    role: "Peserta Kajian Pemuda",
    unit: "Youth Movement",
    quote: "Kajian pemuda di sini tidak kaku sama sekali. Topik-topik yang dibahas relevan banget dengan keresahan anak muda, dari mental health sampai leadership. Lingkungan pertemanannya positif dan saling support!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "4",
    name: "dr. Nurul Hidayah",
    role: "Orang Tua Santri MDTU 2",
    unit: "MDTU 2 (Ber-AC)",
    quote: "Setelah sekolah formal di siang hari, anak saya tidak merasa lelah ketika masuk MDTU 2 karena ruang kelasnya sejuk ber-AC dan ustadznya mengajar dengan metode yang sangat interaktif dan menyenangkan.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "5",
    name: "Ibu Maryam",
    role: "Jama'ah Rutin",
    unit: "Majelis Taklim",
    quote: "Majelis Taklim Yayasan Muhammad Djuneid Lubis selalu menjadi oase penyejuk hati setiap pekan. Ustadzahnya membimbing dengan santun, penuh keteduhan, dan mudah diamalkan dalam keluarga.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: "fac-1",
    title: "Ruang Kelas Modern & Ber-AC",
    subtitle: "TK IT & MDTU 2",
    description: "Ruang kelas sejuk ber-AC dengan ventilasi teratur, pencahayaan alami ramah mata, serta tata letak ergonomis untuk konsentrasi belajar maksimal.",
    isAc: true,
    image: "tk_ac_room.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    iconName: "Wind"
  },
  {
    id: "fac-2",
    title: "Masjid & Aula Diniyah Terpadu",
    subtitle: "Pusat Ibadah & Majelis",
    description: "Tempat ibadah utama yang tenang dan bersih untuk shalat berjamaah, tahfidz Qur'an santri, kajian majelis taklim, dan tabligh akbar.",
    isAc: false,
    image: "masjid_aula.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80",
    iconName: "Building2"
  },
  {
    id: "fac-3",
    title: "Laboratorium Komputer & Sains",
    subtitle: "MTs Al-Washliyah",
    description: "Fasilitas praktikum komputer dan eksperimen sains modern yang menunjang pembelajaran digital dan olimpiade akademik santri.",
    isAc: true,
    image: "lab_komputer.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    iconName: "Laptop"
  },
  {
    id: "fac-4",
    title: "Area Bermain & Arena Motorik Anak",
    subtitle: "RA & TK IT",
    description: "Zona bermain outdoor dan indoor yang aman, bersih, dan menstimulasi kecerdasan kinestetik serta kreativitas anak usia dini.",
    isAc: false,
    image: "playground_outdoor.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    iconName: "Smile"
  }
];

export const FOUNDATION_STATS = [
  { value: "4+", label: "Unit Pendidikan & Dakwah" },
  { value: "850+", label: "Siswa & Santri Aktif" },
  { value: "45+", label: "Pendidik & Ustadz Berdedikasi" },
  { value: "25+", label: "Tahun Pengabdian Umat" }
];
