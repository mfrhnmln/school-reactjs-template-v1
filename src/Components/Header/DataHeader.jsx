const DataHeader = [
  // prifil sekolah
  {
    title: "Profil Sekolah", //kelembagaan
    path: "#",
    dropdown: [
      { title: "Sambutan Kepala Sekolah", path: "/sambutan-kepala-sekolah" },
      { title: "Sejarah", path: "/sejarah-sekolah" },
      { title: "Identitas Sekolah", path: "/identitas-sekolah" },
      { title: "Visi & Misi", path: "/visi-&-misi" },
      { title: "Logo Sekolah", path: "/logo-sekolah" },
      { title: "Slogan", path: "/slogan-&-motto-sekolah" },
      { title: "Adiwiyata", path: "/adiwiyata" },
      {
        title: "Struktur Organisasi",
        path: "/#",
        dropdown: [
          { title: "Sekolah", path: "/struktur/organisasi-sekolah" },
          {
            title: "Komite Sekolah",
            path: "/struktur/organisasi/komite-sekolah",
          },
          { title: "Osis", path: "/struktur/organisasi/osis" },
          { title: "MPK", path: "/struktur/organisasi/mpk" },
        ],
      },
      {
        title: "Pendidik dan Tenaga Kependidikan",
        path: "/#teachersStaff",
        dropdown: [
          { title: "Pendidik", path: "/guru" },
          { title: "Tenaga Kependidikan", path: "/staff" },
        ],
      },
      { title: "Lulusan Terbaik", path: "/#lulusanterbaik" },
    ],
  },

  // berita
  {
    title: "Berita",
    path: "#",
    dropdown: [
      { title: "Berita Sekolah", path: "/berita" },
      { title: "Agenda Sekolah", path: "/agenda" },
      { title: "Prestasi Akademik", path: "/prestasi/akademik" },
      { title: "Prestasi Ekstrakurikuler", path: "/prestasi/ekstrakurikuler" },
    ],
  },

  // Kurikulum
  {
    title: "Kurikulim",
    path: "#",
    dropdown: [
      { title: "Jadwal Pembelajaran", path: "/jadwal/pembelajaran" },
      { title: "kalender Akademik", path: "/kalender-akademik" },
      { title: "Tata Usaha", path: "/tata-usaha" },
      { title: "Perpustakaan", path: "/perpustakaan" },
    ],
  },

  // Kesiswaan
  {
    title: "Kesiswaan",
    path: "#",
    dropdown: [
      { title: "Daftar Murid", path: "/daftar-murid" },
      { title: "Ekstrakulikuler", path: "/#ekstrakulikuler" },
      { title: "Jadwal Ekstrakurikuler", path: "/jadwal/ekstrakurikuler" },
      { title: "Bimbingan Konseling", path: "/bk" },
    ],
  },


  // Humas
  {
    title: "Humas",
    path: "/#",
    dropdown: [
      {
        title: "Kerjasama dengan Komite Sekolah",
        path: "/Kerjasama-Komite-Sekolah",
      },
      { title: "Kerjasama dengan Puskesmas", path: "/Kerjasama-Puskesmas" },
    ],
  },

  // srana prasarana
  {
    title: "Sarana Prasarana",
    path: "/#",
    dropdown: [
      { title: "Sarana", path: "/sarana" },
      { title: "Prasarana", path: "/prasarana" },
      { title: "Kantin Sehat", path: "/kantin-sehat" },
      { title: "Usaha Kesehatan Sekolah", path: "/uks" },
      { title: "Majalah Digital", path: "/mading" },
      {
        title: "e-Perpustakaan-1",
        path: "https://mfrhnmln.github.io/library-reactjs-template-1/",
        external: true,
      },
      {
        title: "e-Perpustakaan-2",
        path: "https://mfrhnmln.github.io/library-reactjs-template-2/",
        external: true,
      },
    ],
  },

  // galeri
  {
    title: "Galeri",
    path: "/galeri",
    dropdown: [],
  },

  // kontak
  {
    title: "Kontak",
    path: "/#kontak",
    dropdown: [],
  },
];

export default DataHeader;
