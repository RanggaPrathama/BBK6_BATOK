export interface ContentSection {
  title: string;
  content: string;
}

export interface Program {
  id: number;
  slug: string;
  title: string;
  category: string;
  status: "Berlangsung" | "Selesai" | "Akan Datang";
  description: string;
  objectives: string[];
  timeline: string;
  participants: string;
  achievements: string[];
  image: string;
  images?: string[]; 
  content?: ContentSection[];
  location?: string;
  coordinator: string;
  createdAt: string;
}

export const programsData: Program[] = [
  {
    id: 1,
    slug: "airlangga-cakap-day-1",
    title: "AIRLANGGA CAKAP DAY 1: A.K.U.",
    category: "Pendidikan",
    status: "Selesai",
    description:
      "AIRLANGGA CAKAP DAY 1: A.K.U. (Akui dirimu, Kenali potensimu, Ukir masa depanmu) merupakan pembuka rangkaian program Airlangga Cakap yang dilaksanakan di Desa Batok, Kecamatan Gemarang, Kota Madiun. Kegiatan ini berfokus pada pengenalan diri, penggalian minat dan bakat siswa melalui metode RIASEC, serta penyusunan roadmap masa depan.",
    objectives: [
      "Membantu siswa mengenali minat, bakat, dan nilai-nilai pribadi",
      "Mengasah kemampuan refleksi diri dan perencanaan masa depan",
      "Menumbuhkan kesadaran diri dan motivasi internal siswa",
      "Melatih keberanian siswa dalam mengekspresikan potensi mereka",
    ],
    timeline: "15 Juli 2025",
    participants: "Siswa MTS Miftahul Ulum (kelas 7–9)",
    achievements: [
      "80% siswa mampu menyebutkan 3 minat atau bakat utama mereka",
      "Seluruh peserta memiliki draft roadmap masa depan pribadi",
      "Siswa menunjukkan antusiasme tinggi dalam aktivitas refleksi dan diskusi",
    ],
    image: "/asset/program/cakap_1.jpg",
    images: [
      "/asset/program/cakap_2.jpg", 
      "/asset/program/cakap_day1_1.jpg", 
      "/asset/program/cakap_day1_2.jpg", 
      "/asset/program/cakap_day1_3.jpg", 
      "/asset/program/cakap_day1_4.jpg", 
      
    ],
    content: [
      {
        title: "Latar Belakang",
        content:
          "Di tengah dinamika perkembangan remaja dan tantangan zaman, penting bagi siswa untuk mengenali potensi diri sejak dini. AIRLANGGA CAKAP DAY 1 hadir sebagai ruang eksplorasi diri untuk menumbuhkan kesadaran diri, arah tujuan, dan semangat membangun masa depan.",
      },
      {
        title: "Metodologi",
        content:
          "Kegiatan dilaksanakan secara interaktif melalui pengisian kuesioner RIASEC, diskusi kelompok, refleksi pribadi, dan penyusunan roadmap masa depan. Ice breaking dan permainan ringan disisipkan di sela sesi untuk mencairkan suasana dan menjaga antusiasme siswa.",
      },
      {
        title: "Dampak Program",
        content:
          "Kegiatan ini memberikan pengalaman mendalam bagi siswa untuk mengenal potensi dan nilai diri mereka. Banyak siswa yang mulai menyadari kekuatan dan minat tersembunyi yang sebelumnya belum tergali, serta termotivasi untuk merancang masa depan secara lebih terarah.",
      },
    ],
    location: "MTS Miftahul Ulum",
    coordinator: "Velicia Giovani Hartanto (173221025)",
    createdAt: "2025-07-17",
  },

  {
    id: 2,
    slug: "airlangga-cakap-day-2",
    title: "Airlangga Cakap Day 2: P.R.O.",
    category: "Pendidikan",
    status: "Selesai",
    description:
      "P.R.O. (Pede Berbicara, Rangkai Semangat, Optimalkan Dirimu) merupakan bagian dari rangkaian program Airlangga Cakap. Kegiatan ini dirancang untuk membekali siswa MTS Miftahul Ulum dengan keterampilan komunikasi, literasi, dan kepercayaan diri dalam menghadapi masa depan.",
    objectives: [
      "Meningkatkan keberanian siswa dalam berbicara di depan umum",
      "Menumbuhkan semangat kolaboratif dan percaya diri",
      "Mendorong siswa mengenali serta mengoptimalkan potensi diri",
      "Meningkatkan literasi digital dan komunikasi generasi muda",
    ],
    timeline: "16 Juli 2025",
    participants: "60 Siswa MTS Miftahul Ulum",
    achievements: [
      "Seluruh siswa menyelesaikan simulasi public speaking",
      "Setiap siswa berhasil mempresentasikan mimpinya secara visual",
      "Terciptanya suasana belajar yang aktif dan menyenangkan",
    ],
    image: "/asset/program/cakap_3.jpg",
    images: [
       "/asset/program/cakap_day2_1.png",
      "/asset/program/cakap_day2_2.png",
      "/asset/program/cakap_day2_3.png",
    ],
    content: [
      {
        title: "Rangkaian Kegiatan",
        content:
          "Hari kedua difokuskan pada penguatan komunikasi dan kepercayaan diri siswa. Sesi dibuka dengan ice breaking, dilanjutkan dengan materi komunikasi efektif, public speaking, dan literasi digital. Di sela sesi, diselingi dengan permainan interaktif yang mencairkan suasana dan mendorong partisipasi aktif siswa.",
      },
      {
        title: "Aktivitas Utama",
        content:
          "Salah satu momen penting adalah sesi 'Berani Bicara', di mana siswa diminta untuk menyampaikan cerita atau cita-cita mereka di depan teman-teman. Kegiatan ini tidak hanya melatih keberanian, tetapi juga membangun empati dan apresiasi antar siswa.",
      },
      {
        title: "Media dan Pendekatan",
        content:
          "Kegiatan menggunakan media visual seperti proyektor, papan tulis, serta lembar kerja interaktif. Metode partisipatif dipilih untuk memastikan siswa tidak hanya menerima materi secara pasif, tetapi juga aktif berdiskusi, menyampaikan pendapat, dan berkolaborasi dalam kelompok.",
      },
    ],
    location: "MTS Miftahul Ulum, Desa Batok",
    coordinator: "Velicia Giovani Hartanto (173221025)",
    createdAt: "2025-07-29",
  },

  {
    id: 3,
    slug: "airlangga-cakap-day-3",
    title: "Airlangga Cakap Day 3: S.I.P.",
    category: "Pendidikan",
    status: "Selesai",
    description:
      "S.I.P. (Siap Berkarya, Inspirasi Diri, Pintar Bersama) merupakan hari terakhir dari rangkaian program Airlangga Cakap yang dilaksanakan di Desa Batok, Kecamatan Gemarang, Kota Madiun. Kegiatan ini ditujukan untuk siswa MTS Miftahul Ulum dari kelas 7 hingga 9 dengan fokus pada pengenalan pentingnya manajemen diri, yang mencakup manajemen kesehatan mental, manajemen waktu, dan manajemen keuangan.",
    objectives: [
      "Mengenalkan konsep manajemen diri kepada siswa dalam tiga aspek penting: mental, waktu, dan keuangan",
      "Mendorong siswa untuk mulai membuat perencanaan kegiatan melalui to-do-list",
      "Meningkatkan kesadaran siswa terhadap isu cyberbullying dan cara menghadapinya",
      "Membangun keterampilan reflektif, komunikasi, dan kolaborasi",
    ],
    timeline: "17 Juli 2025",
    participants: "Siswa MTS Miftahul Ulum kelas 7–9, Desa Batok",
    achievements: [
      "Peserta mampu mengidentifikasi kasus cyberbullying dan menyusun strategi menghadapinya",
      "Peserta mulai menerapkan perencanaan kegiatan menggunakan to-do-list",
      "Terciptanya diskusi aktif dan peningkatan kesadaran akan pentingnya manajemen diri",
    ],
    image: "/asset/program/cakap_6.jpg",
    images:[
      "/asset/program/cakap_4.png",
      "/asset/program/cakap_5.png",
      "/asset/program/cakap_day3_1.jpg",
      "/asset/program/cakap_day3_2.jpg",
    ],
    content: [
      {
        title: "Latar Belakang Masalah",
        content:
          "Banyak siswa belum menyadari pentingnya manajemen diri dalam kehidupan sehari-hari. Selain itu, kurangnya pemahaman mengenai isu kesehatan mental, cyberbullying, serta perencanaan waktu dan keuangan menjadi tantangan yang perlu ditangani sejak dini melalui pendekatan edukatif dan interaktif.",
      },
      {
        title: "Implementasi Program",
        content:
          "Kegiatan diawali dengan sesi refleksi diri, dilanjutkan dengan workshop interaktif dan diskusi kelompok mengenai topik manajemen mental, waktu, dan uang. Para peserta juga diajak untuk mengidentifikasi kasus cyberbullying serta membuat to-do-list sebagai latihan perencanaan kegiatan harian. Aktivitas diselingi dengan permainan kreatif untuk menjaga antusiasme peserta.",
      },
      {
        title: "Hasil dan Dampak",
        content:
          "Siswa menunjukkan peningkatan kesadaran akan pentingnya manajemen diri dan perencanaan harian. Mereka juga mampu mengenali bahaya cyberbullying serta pentingnya kesehatan mental. Kegiatan ini menutup rangkaian Airlangga Cakap dengan semangat refleksi, optimisme, dan motivasi untuk menjadi pribadi yang lebih terarah.",
      },
    ],
    location: "Balai Desa Batok, Kecamatan Gemarang, Kota Madiun",
    coordinator: "Velicia Giovani Hartanto (173221025)",
    createdAt: "2025-07-29",
  },

  {
    id: 4,
    slug: "senam-bersama-batok-bbk6",
    title: "SBB (Senam Bersama Batok – BBK 6)",
    category: "Kesehatan",
    status: "Selesai",
    description:
      "Kegiatan senam massal bersama warga Desa Batok, khususnya para lansia, sebagai upaya mendorong pola hidup sehat, membangun kebersamaan, serta mempererat hubungan mahasiswa BBK 6 dengan masyarakat desa.",
    objectives: [
      "Mendorong pola hidup sehat warga desa",
      "Meningkatkan kebugaran fisik, khususnya lansia",
      "Mempererat hubungan antara mahasiswa dan warga",
      "Menumbuhkan kebiasaan olahraga rutin di desa",
    ],
    timeline: "20 Juli 2025",
    participants: "30 Warga (mayoritas lansia)",
    achievements: [
      "Partisipasi aktif 30 warga dalam senam massal",
      "Peningkatan antusiasme warga terhadap pola hidup sehat",
      "Terjalinnya hubungan baik mahasiswa dan warga desa",
    ],
    image: "/asset/program/sbb_bersama.png",
    images:[
      "/asset/program/sbb_1.png",
      "/asset/program/sbb_3.png",
      "/asset/program/sbb_4.png"
    ],
    content: [
      {
        title: "Konsep Kegiatan",
        content:
          "Senam massal di pagi hari yang diikuti warga berbagai usia, dipandu oleh instruktur senam profesional dengan iringan musik ceria untuk menciptakan semangat dan kebersamaan.",
      },
      {
        title: "Manfaat dan Harapan",
        content:
          "Kegiatan ini diharapkan dapat memotivasi warga untuk rutin berolahraga, menjaga kesehatan jasmani, serta mempererat interaksi sosial antarwarga dan mahasiswa.",
      },
      {
        title: "Dampak Sosial",
        content:
          "Selain aspek kesehatan, kegiatan ini memperkuat sinergi antara mahasiswa dan warga, menciptakan suasana desa yang lebih aktif, guyub, dan harmonis.",
      },
    ],
    location: "Lapangan Desa Batok",
    coordinator: "Rizq Anargya Asas (173221054)",
    createdAt: "2025-07-20",
  },

  {
    id: 5,
    slug: "sigizi-sosialisasi-interaktif-gizi",
    title: "SIGIZI (Sosialisasi Interaktif Gizi)",
    category: "Kesehatan",
    status: "Selesai",
    description:
      "Program edukatif yang dikemas secara interaktif untuk meningkatkan pemahaman masyarakat tentang pentingnya gizi seimbang dan perilaku hidup sehat sepanjang siklus hidup.",
    objectives: [
      "Meningkatkan pengetahuan tentang Keluarga Sadar Gizi (KADARZI)",
      "Mengajarkan konsep Isi Piringku sesuai pedoman Kemenkes",
      "Meningkatkan kesadaran terhadap konsumsi Gula, Garam, dan Lemak (GGL)",
      "Mengedukasi masyarakat membaca dan memahami Acuan Label Gizi (ALG)",
      "Memberikan panduan gizi bagi lansia",
      "Meningkatkan kesadaran dan pencegahan stunting pada anak",
    ],
    timeline: "20 Juli 2025 (Setelah program Senam dan SIGAP)",
    participants:
      "Warga Desa Batok, khususnya keluarga dengan balita, remaja, dan lansia",
    achievements: [
      "Peningkatan pemahaman 80% peserta tentang gizi seimbang",
      "Simulasi membaca label kemasan dilakukan oleh 50 peserta",
      "Diskusi aktif terkait porsi makan harian dan batas konsumsi GGL",
      "Antusiasme tinggi peserta lansia dalam sesi gizi lansia",
      "Pengenalan konsep stunting dan cara pencegahannya secara langsung",
    ],
    image: "/asset/program/sigizi_1.png",
    images:[
       "/asset/program/sigizi_2.png",
        "/asset/program/sigizi_3.png",
         "/asset/program/sigizi_4.png"
    ],
    content: [
      {
        title: "Materi dan Edukasi Interaktif",
        content:
          "Materi yang disampaikan meliputi KADARZI, Isi Piringku, GGL, ALG, gizi lansia, dan stunting anak. Peserta diajak berdiskusi dan terlibat langsung dalam simulasi serta kuis interaktif untuk meningkatkan pemahaman.",
      },
      {
        title: "Integrasi dengan Program Lain",
        content:
          "SIGIZI dilaksanakan setelah kegiatan senam sehat dan SIGAP, menjadikan satu hari penuh sebagai momentum edukasi kesehatan fisik dan gizi masyarakat Desa Batok.",
      },
      {
        title: "Suasana Interaktif dan Menyenangkan",
        content:
          "Selama sesi berlangsung, ditambahkan game ringan dan kuis yang mencairkan suasana serta meningkatkan partisipasi aktif warga, menjadikan edukasi gizi sebagai pengalaman yang menyenangkan.",
      },
    ],
    location: "Balai Desa Batok",
    coordinator: "Clarissa Belvana Kusuma W (192221018)",
    createdAt: "2024-07-20",
  },

{
  id: 6,
  slug: "sigap-tanggap-penyelamat",
  title: "SIGAP (Siap Tanggap Aksi Penyelamat)",
  category: "Kesehatan",
  status: "Selesai",
  description:
    "Program interaktif untuk memberikan pengetahuan dan keterampilan pertolongan pertama pada korban tersedak kepada ibu-ibu di Desa Batok, dengan praktik langsung teknik Back Blows, Heimlich Maneuver, dan Chest Thrust.",
  objectives: [
    "Meningkatkan pengetahuan dasar tentang pertolongan pertama pada kasus tersedak",
    "Melatih keterampilan praktis pertolongan pada bayi dan orang dewasa",
    "Meningkatkan kesiapsiagaan ibu-ibu dalam situasi darurat rumah tangga",
    "Menumbuhkan rasa tanggung jawab dan keberanian dalam membantu sesama"
  ],
  timeline: "20 Juli 2025",
  participants: "30 Ibu-Ibu Desa Batok",
  achievements: [
    "Seluruh peserta mampu mempraktikkan 3 teknik utama pertolongan",
    "Peningkatan partisipasi aktif dalam diskusi dan simulasi",
    "Kolaborasi sukses dengan kegiatan senam bersama",
    "Meningkatkan kesadaran masyarakat terhadap pentingnya pertolongan pertama"
  ],
  image: "/asset/program/sigap_1.png",
  images:[
    "/asset/program/sigap_2.png",
    "/asset/program/sigap_3.png",
    "/asset/program/sigap_4.png"
  ],
  content: [
    {
      title: "Konsep Program",
      content:
        "SIGAP merupakan bentuk edukasi masyarakat melalui pendekatan praktis, menyasar ibu-ibu rumah tangga yang menjadi garda terdepan di lingkungan keluarga. Program ini memadukan materi teori dan simulasi nyata dalam suasana yang komunikatif dan menyenangkan.",
    },
    {
      title: "Materi Pelatihan",
      content:
        "Tiga teknik utama yang diajarkan adalah Back Blows, Heimlich Maneuver, dan Chest Thrust. Setiap teknik diperagakan langsung oleh fasilitator dan dipraktikkan oleh peserta dengan model boneka bayi dan orang dewasa.",
    },
    {
      title: "Integrasi Kegiatan",
      content:
        "Kegiatan SIGAP dilaksanakan bersamaan dengan senam pagi sebagai program kerja kesehatan. Hal ini menjadikan suasana lebih santai dan kondusif, serta mempererat hubungan antar peserta melalui semangat kebersamaan.",
    }
  ],
  location: "Balai Desa Batok",
  coordinator: "Elsa Kurnia Ramadhani (132221172)",
  createdAt: "2024-07-10"
},

{
  "id": 7,
  "slug": "belajar-ceria-airlangga",
  "title": "Belajar Ceria Bersama Airlangga",
  "category": "Pendidikan",
  "status": "Selesai",
  "description": "Hari pertama dari program Belajar Ceria Bersama Airlangga yang menyasar murid SDN 04 Batok, menggabungkan pembelajaran Bahasa Inggris yang menyenangkan dan edukasi kesiapsiagaan bencana melalui pendekatan kreatif dan interaktif.",
  "objectives": [
    "Meningkatkan pengenalan kosakata Bahasa Inggris dasar",
    "Menumbuhkan semangat belajar Bahasa Inggris melalui metode menyenangkan",
    "Mendorong siswa untuk mengekspresikan cita-cita secara kreatif",
    "Meningkatkan kesadaran anak tentang risiko dan kesiapsiagaan terhadap bencana, khususnya longsor",
    "Memberikan pemahaman dasar mitigasi bencana melalui pendekatan visual dan analogi sederhana"
  ],
  "timeline": "23 Juli 2025",
  "participants": "45 Siswa SDN 04 Batok",
  "achievements": [
    "Anak-anak antusias mengikuti quiz dan games interaktif berbahasa Inggris",
    "Seluruh peserta mampu menggambarkan cita-cita mereka secara visual",
    "Anak-anak memahami tindakan dasar saat terjadi bencana melalui simulasi ringan",
    "Materi kesiapsiagaan dikemas menyenangkan dan mudah dipahami sesuai usia"
  ],
  "image": "/asset/program/sdn_1.png",
  "images": [
    "/asset/program/sdn_2.png",
    "/asset/program/sdn_3.png",
    "/asset/program/sdn_4.png"
  ],
  "content": [
    {
      "title": "English Fun Day",
      "content": "Sesi pembuka program mengajak siswa untuk mengenal dan mempelajari kosakata Bahasa Inggris melalui latihan soal, kuis, dan permainan kelompok. Kegiatan dirancang interaktif dan menyenangkan agar siswa tidak hanya memahami teori, tapi juga aktif berpartisipasi. Di akhir sesi, siswa diajak menggambarkan impian masa depan mereka sebagai bentuk ekspresi dan latihan visualisasi cita-cita."
    },
    {
      "title": "Edukasi Kesiapsiagaan Bencana",
      "content": "Mengangkat tema mitigasi bencana, khususnya bencana longsor yang rawan terjadi di Desa Batok. Karena ditujukan untuk siswa SD, materi disampaikan dalam bentuk cerita, analogi sederhana, dan perumpamaan yang mudah dimengerti. Peserta dilibatkan dalam simulasi ringan agar memahami tindakan dasar saat terjadi bencana."
    },
    {
      "title": "Pendekatan Kreatif dan Interaktif",
      "content": "Keseluruhan kegiatan dikemas dengan metode pembelajaran aktif, kreatif, dan menyenangkan. Fokus utama adalah membuat anak-anak merasa senang belajar, sekaligus memperoleh pemahaman baru yang berguna untuk masa depan mereka."
    }
  ],
  "location": "SDN 04 Batok, Madiun",
  "coordinator": "Abdullah Muhammad Fasya (171221114) & Devina Anya Susatyo (176221127)",
  "createdAt": "2025-07-29"
},

{
  "id": 8,
  "slug": "batok-preneur-day",
  "title": "Batok Preneur Day: Go Digital, Go Lokal!",
  "category": "Ekonomi",
  "status": "Selesai",
  "description": "Program pendampingan dan sosialisasi bagi pelaku UMKM Desa Batok untuk meningkatkan daya saing produk lokal melalui pemanfaatan teknologi digital dan edukasi sertifikasi halal.",
  "objectives": [
    "Meningkatkan kemampuan pelaku UMKM dalam pemasaran digital",
    "Mendorong UMKM memanfaatkan media sosial sebagai sarana promosi produk",
    "Mengenalkan penggunaan Canva untuk branding produk",
    "Memberikan pemahaman terkait pentingnya sertifikasi halal",
    "Membantu pelaku usaha memahami alur pengajuan dan dokumen sertifikasi halal"
  ],
  "timeline": "22 Juli 2025",
  "participants": "10 Pelaku UMKM Desa Batok",
  "achievements": [
    "Pelaku UMKM memahami strategi pemasaran digital melalui Instagram, Facebook, dan TikTok",
    "Peserta mampu membuat desain branding produk secara mandiri menggunakan Canva",
    "Peningkatan kesadaran tentang pentingnya sertifikasi halal dalam bisnis makanan dan minuman",
    "Pemaparan jelas terkait proses dan dokumen sertifikasi halal"
  ],
  "image": "/asset/program/preneur_1.png",
  "images":[
    "/asset/program/preneur_2.png",
    "/asset/program/preneur_3.png",
    "/asset/program/preneur_4.png",
    "/asset/program/preneur_5.png",
  ],
  "content": [
    {
      "title": "Digital Marketing untuk UMKM",
      "content": "Sesi ini membahas strategi dasar pemasaran digital menggunakan media sosial seperti Instagram, Facebook, dan TikTok. Peserta diberikan panduan praktis untuk meningkatkan eksistensi online dan memperluas jangkauan pasar produk lokal."
    },
    {
      "title": "Desain Branding Produk dengan Canva",
      "content": "Pelatihan singkat mengenai penggunaan Canva sebagai alat bantu desain yang mudah dan praktis untuk membuat logo, kemasan, dan materi promosi. Peserta diajak praktik langsung membuat desain visual produk mereka."
    },
    {
      "title": "Edukasi Sertifikasi Halal",
      "content": "Materi disampaikan mengenai pentingnya label halal sebagai penjamin keamanan dan kepercayaan konsumen. Peserta dibimbing memahami syarat administrasi dan alur pengajuan sertifikasi halal melalui lembaga resmi."
    }
  ],
  "location": "Balai Desa Batok",
  "coordinator": "Rangga Prathama N.H (434221028) & Yesa Alfitriana (142231108)",
  "createdAt": "2025-07-29"
},
{
  "id": 9,
  "slug": "jagoan-sehat",
  "title": "Jagoan Sehat: Edukasi PHBS untuk Anak Sekolah Dasar",
  "category": "Kesehatan",
  "status": "Selesai",
  "description": "Program edukasi interaktif yang dirancang untuk menanamkan kebiasaan Perilaku Hidup Bersih dan Sehat (PHBS) kepada anak-anak Sekolah Dasar melalui kegiatan mencuci tangan 6 langkah dan menggosok gigi dengan benar.",
  "objectives": [
    "Menanamkan kebiasaan mencuci tangan dengan 6 langkah yang benar kepada anak-anak",
    "Mengajarkan cara menggosok gigi yang baik dan benar",
    "Meningkatkan kesadaran anak-anak terhadap pentingnya menjaga kebersihan diri",
    "Memberdayakan anak-anak sebagai agen perubahan dalam menciptakan lingkungan yang sehat"
  ],
  "timeline": "24 Juli 2025",
  "participants": "30 Siswa SD Negeri Batok",
  "achievements": [
    "Anak-anak mampu mempraktikkan mencuci tangan 6 langkah secara mandiri",
    "Peningkatan pemahaman cara menggosok gigi yang benar",
    "Anak-anak aktif berpartisipasi dalam edukasi dengan lagu dan gerakan",
    "Terciptanya suasana belajar yang menyenangkan dan partisipatif melalui media video dan demonstrasi langsung"
  ],
  "image": "/asset/program/jagoan_1.png",
  "images":[
    "/asset/program/jagoan_2.png",
    "/asset/program/jagoan_3.png",
    "/asset/program/jagoan_4.png",
  ],
  "content": [
    {
      "title": "Cuci Tangan 6 Langkah",
      "content": "Sesi ini memperkenalkan dan mempraktikkan teknik mencuci tangan 6 langkah dengan benar. Anak-anak diajak bernyanyi dan mengikuti gerakan sebagai metode belajar yang menyenangkan."
    },
    {
      "title": "Cara Menggosok Gigi yang Benar",
      "content": "Melalui demonstrasi langsung dan media visual, anak-anak diajarkan cara menggosok gigi yang efektif untuk menjaga kesehatan mulut dan gigi."
    },
    {
      "title": "Edukasi Visual dan Partisipatif",
      "content": "Menggunakan pendekatan edukatif seperti video animasi, lagu, dan gerakan interaktif untuk meningkatkan keterlibatan dan pemahaman anak-anak dalam menjaga kebersihan diri."
    }
  ],
  "location": "SD Negeri Batok",
  "coordinator": "Karina Widiasti (132221214)",
  "createdAt": "2025-07-29"
}

];

// Helper functions
export function getPrograms(): Program[] {
  return programsData;
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programsData.find((program) => program.slug === slug);
}

export function getProgramsByCategory(category: string): Program[] {
  return programsData.filter((program) => program.category === category);
}

export function getProgramsByStatus(status: string): Program[] {
  return programsData.filter((program) => program.status === status);
}

export function getFeaturedPrograms(limit: number = 3): Program[] {
  return programsData
    .filter((program) => program.status === "Berlangsung")
    .slice(0, limit);
}

// Default export for the data
export default programsData;
