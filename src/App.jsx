// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import UserLayout from "./UserLayout";
import ScrollToHash from "./Components/Function/ScrollToHash";
import ScrollToTop from "./Components/Function/ScrollToTop";

// dashboard
import Home from "./Components/ComponentsHome";

// profil sekolah
import Logo from "./Pages/Logo";
import VisiMisi from "./Pages/VisiMisi";
import Adiwiyata from "./Pages/Adiwiyata";
import SchoolSlogan from "./Pages/SchoolSlogan";
import SchoolHistory from "./Pages/SchoolHistory";
import SchoolIdentity from "./Pages/SchoolIdentity";
import PrincipalsSpeech from "./Pages/PrincipalsSpeech";
import MpkStructure from "./Pages/StructureMpk";
import OsisStructure from "./Pages/StructureOsis";
import SchoolStructure from "./Pages/StructureSchool";
import SchoolCommittee from "./Pages/StructureCommittee";
import BestGraduate from "./Pages/BestGraduate";
import DetailBestGraduate from "./Components/BestGraduate/DetailBestGraduate";
import PageTeachersStaff from "./Components/TeachersStaff/PageTeacherStaff";

// berita
import News from "./Pages/News";
import DetailNews from "./Components/News/DetailNews";
import Agenda from "./Pages/Agenda";
import DetailAgenda from "./Components/Agenda/DetailAgenda";
import AcademicAchievement from "./Pages/AcademicAchievement";
import DetailAcademicAchievement from "./Components/AcademicAchievement/DetailAcademicAchievement";
import ExtracurricularAchievements from "./Pages/ExtracurricularAchievements";
import DetailExtracurricularAchievements from "./Components/ExtracurricularAchievements/DetailExtracurricularAchievements";

//list dan Galeri ekstrakurikuler
import DetailExtracurricular from "./Components/Extracurricular/DetailExtracurricular";
import GalleryExtracurricular from "./Components/GalleryExtracurricular";

// kurikulim
import LearningSchedule from "./Pages/LearningSchedule";
import AcademicCalendar from "./Pages/AcademicCalendar";
import TataUsaha from "./Pages/TataUsaha";
import Library from "./Pages/Library";

// kesiswaan
import StudentList from "./Pages/StudentList";
import ExtracurricularSchedule from "./Pages/ExtracurricularSchedule";
import Counseling from "./Pages/Counseling";

// humas
import CommitteeCooperation from "./Pages/CommitteeCollaboration";
import CommunityHealthCollaboration from "./Pages/CommunityHealthCollaboration";



import Sarana from "./Pages/Sarana";
import Prasarana from "./Pages/Prasarana";
import SchoolMedicalRoom from "./Pages/SchoolMedicalRoom";
import HealthyCanteen from "./Pages/HealthyCanteen";
import Mading from "./Pages/Mading";

import Galeri from "./Pages/Galeri";

function App() {
  return (
    <>
      <>
        <ScrollToTop />
        <ScrollToHash />
        <div className="flex flex-col min-h-screen">
          {/* <Header /> */}
          <main className="flex-grow">
            <Routes>
              <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                {/* profil */}
                <Route
                  path="/sambutan-kepala-sekolah"
                  element={<PrincipalsSpeech />}
                />
                <Route path="/sejarah-sekolah" element={<SchoolHistory />} />
                <Route path="/identitas-sekolah" element={<SchoolIdentity />} />
                <Route path="/visi-&-misi" element={<VisiMisi />} />
                <Route path="/logo-sekolah" element={<Logo />} />
                <Route
                  path="/slogan-&-motto-sekolah"
                  element={<SchoolSlogan />}
                />
                <Route path="/adiwiyata" element={<Adiwiyata />} />

                {/* struktur organisasi */}
                <Route
                  path="/struktur/organisasi-sekolah"
                  element={<SchoolStructure />}
                />
                <Route
                  path="/struktur/organisasi/komite-sekolah"
                  element={<SchoolCommittee />}
                />
                <Route
                  path="/struktur/organisasi/osis"
                  element={<OsisStructure />}
                />
                <Route
                  path="/struktur/organisasi/mpk"
                  element={<MpkStructure />}
                />

                {/* guru dan staff */}
                <Route path="/guru" element={<PageTeachersStaff />} />
                <Route path="/staff" element={<PageTeachersStaff />} />

                {/* lulusan terbaik */}
                <Route path="/lulusan" element={<BestGraduate />} />
                <Route
                  path="/detail/lulusan/:name"
                  element={<DetailBestGraduate />}
                />

                {/* detail ektrakurikuler */}
                <Route
                  path="/ekstrakurikuler/:slug"
                  element={<DetailExtracurricular />}
                />
                <Route
                  path="/galeri/ekstrakurikuler/:slug"
                  element={<GalleryExtracurricular />}
                />

                {/* berita */}
                <Route path="/berita" element={<News />} />
                <Route path="/berita/:slug" element={<DetailNews />} />

                {/* agenda */}
                <Route path="/agenda" element={<Agenda />} />
                <Route path="/agenda/:slug" element={<DetailAgenda />} />

                {/* prestasi akademik siswa/i */}
                <Route
                  path="/prestasi/akademik"
                  element={<AcademicAchievement />}
                />
                <Route
                  path="/prestasi/akademik/:slug"
                  element={<DetailAcademicAchievement />}
                />

                {/* prestasi ekstrakurikuler siswa/i */}
                <Route
                  path="/prestasi/ekstrakurikuler"
                  element={<ExtracurricularAchievements />}
                />
                <Route
                  path="/prestasi/ekstrakurikuler/:slug"
                  element={<DetailExtracurricularAchievements />}
                />

                {/* Kurikulum */}
                <Route
                  path="/jadwal/pembelajaran"
                  element={<LearningSchedule />}
                />
                <Route
                  path="/kalender-akademik"
                  element={<AcademicCalendar />}
                />
                <Route path="/tata-usaha" element={<TataUsaha />} />
                <Route path="/perpustakaan" element={<Library />} />

                {/* Kesiswaan */}
                <Route path="/daftar-murid" element={<StudentList />} />
                <Route
                  path="/jadwal/ekstrakurikuler"
                  element={<ExtracurricularSchedule />}
                />
                <Route path="/bk" element={<Counseling />} />

                {/* Kesiswaan */}
                <Route
                  path="/kerjasama-komite-sekolah"
                  element={<CommitteeCooperation />}
                />
                <Route
                  path="/kerjasama-puskesmas"
                  element={<CommunityHealthCollaboration />}
                />

                {/* sarana prasarana */}
                <Route path="/sarana" element={<Sarana />} />
                <Route path="/prasarana" element={<Prasarana />} />
                <Route path="/kantin-sehat" element={<HealthyCanteen />} />
                <Route path="/uks" element={<SchoolMedicalRoom />} />

                {/* galeri */}
                <Route path="/galeri" element={<Galeri />} />
              </Route>
              <Route path="/mading" element={<Mading />} />
            </Routes>
          </main>
          {/* <Footer /> */}
        </div>
      </>
    </>
  );
}

export default App;
