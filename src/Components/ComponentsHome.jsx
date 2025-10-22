import { Link } from "react-router-dom";

import SchoolHistory from "../Pages/SchoolHistory";
import PrincipalsSpeech from "../Pages/PrincipalsSpeech";
import VisiMisi from "../Pages/VisiMisi";

import ComponentsNews from "./News/ComponentsNews";
import ComponentsContact from "./ComponentsContact";

import DataTeachersStaff from "./Data/DataTeachersStaff";
import DataBestGraduate from "./Data/DataBestGraduate";
import ComponentsTeachersStaff from "./TeachersStaff/ComponentsTeachersStaff";
import ComponentsExtracurricular from "./extracurricular/ComponentsExtracurricular";
import ComponentsBestGraduate from "./BestGraduate/ComponentsBestGraduate";
import ComponentsAcademicAchievement from "./AcademicAchievement/ComponentsAcademicAchievement";



export const ComponentsHome = () => {
  // Mengatur tampilan dashboard siang/malam
  const hour = new Date().getHours();
  const isDay = hour >= 6 && hour < 18;
  const imageSrc = isDay
    ? "afternoon-school.png"
    : "night-school.png";

  // Gabungkan data guru & staff
  const dataGuruStaff = [...DataTeachersStaff.guru, ...DataTeachersStaff.staff];
  const dataSiswa = DataBestGraduate;

  return (
    <div className="flex flex-col w-full h-full mx-auto">
      {/* dashboard */}
      <img
        className="w-full h-screen object-cover object-top transition-opacity duration-5000 ease-in-out z-0"
        src={imageSrc}
        alt={isDay ? "dashboard siang" : "dashboard malam"}
      />

      {/* Selamat datang */}
      <ul className="flex flex-col items-center justify-center py-20 lg:px-20 gap-10">
        <h1 className="text-title font-semibold text-center mb-5">
          SELAMAT DATANG DI WEBSITE <br />
          <strong>(Nama Sekolah)</strong>
        </h1>
        <SchoolHistory isDashboard={true} />
      </ul>

      {/* Sambutan */}
      <ul className="flex flex-col items-center justify-center py-20 lg:px-20 gap-10 bg-[var(--background_component)]">
        <h1
          className="text-center text-title font-bold"
          style={{ color: "var(--color_text_secondary)" }}
        >
          Sambutan Kepala Sekolah
        </h1>
        <PrincipalsSpeech isDashboard={true} />
      </ul>

      {/* Visi Misi */}
      <ul className="flex flex-col items-center justify-center py-20 lg:px-20 gap-10">
        <h1 className="text-center text-title font-bold">Visi & Misi</h1>
        <VisiMisi isDashboard={true} />
      </ul>

      {/* berita */}
      <ul className="flex flex-col items-center justify-center py-20 gap-20 bg-[var(--background_component)]">
        <h1
          className="text-title font-bold"
          style={{ color: "var(--color_text_secondary)" }}
        >
          Berita
        </h1>

        <ComponentsNews isDashboard={true} layout="grid" maxItems={6} />

        <Link
          to="/berita"
          className="px-6 py-2 rounded-md text-button font-semibold btn-secondary"
        >
          Lihat Semua Berita
        </Link>
      </ul>

      {/* prestasi */}
      <ul className="flex flex-col items-center justify-center py-20 gap-20">
        <h1 className="text-title font-bold">Prestasi Sekolah</h1>

        <ComponentsAcademicAchievement
          isDashboard={true}
          layout="grid"
          maxItems={6}
        />

        <Link
          to="/prestasi"
          className="px-6 py-2 rounded-md text-button font-semibold btn-secondary"
        >
          Lihat Semua Prestasi
        </Link>
      </ul>

      {/* ekstrakurikuler */}
      <ul
        id="ekstrakulikuler"
        className="flex flex-col items-center justify-center py-20 gap-10 bg-[var(--background_component)]"
      >
        <h1
          className="text-title font-bold"
          style={{ color: "var(--color_text_secondary)" }}
        >
          Ekstrakurikuler
        </h1>
        <ComponentsExtracurricular />
      </ul>

      {/* guru & staff (gabung jadi 1) */}
      <ul
        id="teachersStaff"
        className="flex flex-col items-center justify-center py-20 gap-20"
      >
        <h1 className="text-center text-title font-bold">
          Pendidik dan Tenaga Kependidikan
        </h1>
        <ComponentsTeachersStaff data={dataGuruStaff} isDashboard={true} />
        <li className="flex w-full items-center justify-center gap-5">
          <Link
            to="/guru"
            className="btn-primary px-8 py-4 rounded-md text-center font-semibold"
          >
            Lihat Semua Pendidik
          </Link>

          <Link
            to="/staff"
            className="btn-primary px-8 py-4 rounded-md text-center font-semibold"
          >
            Lihat Semua Tenaga Kependidikan
          </Link>
        </li>
      </ul>

      {/* Lulusan Terbaik */}
      <section
        id="lulusanterbaik"
        className="flex flex-col items-center justify-center py-20 gap-20"
      >
        <h1 className="text-title font-bold">Lulusan Terbaik</h1>
        <ComponentsBestGraduate data={dataSiswa} isDashboard />
      </section>

      {/* kontak */}
      <ul className="flex flex-col items-center justify-center py-20 gap-10 bg-[var(--background_component)]">
        <ComponentsContact />
      </ul>
    </div>
  );
};

export default ComponentsHome;
