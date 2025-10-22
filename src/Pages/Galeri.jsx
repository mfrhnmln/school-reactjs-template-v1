import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";

// Import semua dataset
import DataExtracurricular from "../Components/Data/DataExtracurricular";
import DataAdiwiyata from "../Components/Data/DataAdiwiyata";
import DataAcademicAchievement from "../Components/Data/DataAcademicAchievement";
import DataExtracurricularAchievements from "../Components/Data/DataExtracurricularAchievements";
import DataAgenda from "../Components/Data/DataAgenda";
import DataNews from "../Components/Data/DataNews";
import DataPrincipalsSpeech from "../Components/Data/DataPrincipalsSpeech";
import DataTeachersStaff from "../Components/Data/DataTeachersStaff";
import DataBestGraduate from "../Components/Data/DataBestGraduate";

const GalleryAll = () => {
  // Normalisasi data ke format { title, name, images }
  const galleries = [
    {
      title: "Foto Kepala Sekolah",
      name: "Kepala Sekolah",
      images: [
        DataPrincipalsSpeech.imageDashboard,
        DataPrincipalsSpeech.imagePage,
      ],
    },
    {
      title: "Pendidik dan Tenaga Kependidikan",
      name: "Pendidik dan Tenaga Kependidikan",
      images: DataTeachersStaff.guru.map((guru) => guru.image),
    },
    {
      title: "Lulusan Terbaik",
      name: "Best Graduate",
      images: DataBestGraduate.map((grad) => grad.image),
    },

    // Ekstrakurikuler → dipisah per item
    ...DataExtracurricular.items.map((item) => ({
      title: `Foto-foto ${item.name}`,
      name: item.name,
      images: item.moreImages || [],
    })),

    
    {
      title: "Foto-foto Prestasi Akademik",
      name: "Prestasi Akademik",
      images: DataAcademicAchievement.map((item) => item.image),
    },

    {
      title: "Foto-foto Prestasi Ekstrakurikuler",
      name: "Prestasi Ekstrakurikuler",
      images: DataExtracurricularAchievements.map((item) => item.image),
    },

    {
      title: "Foto-foto Agenda Sekolah",
      name: "Agenda",
      images: DataAgenda.map((item) => item.image),
    },

    {
      title: "Foto-foto Berita Sekolah",
      name: "Berita",
      images: DataNews.map((item) => item.image),
    },

    {
      title: "Foto-foto Adiwiyata",
      name: "Adiwiyata",
      images: DataAdiwiyata.gallery?.map((item) => item.image) || [],
    },
  ];

  return (
    <div className="flex flex-col px-5 items-center py-36">
      <Breadcrumb
        paths={[{ label: "Home", href: "/" }, { label: "Galeri Sekolah" }]}
      />

      <h1 className="text-title font-bold text-center mt-10">Galeri Sekolah</h1>

      {/* Loop semua kategori galeri */}
      {galleries.map(
        (gallery, idx) =>
          gallery.images.length > 0 && (
            <div key={idx} className="w-full max-w-5xl my-10">
              {/* Judul galeri */}
              <h2 className="text-header font-semibold mb-4">
                {gallery.title}
              </h2>

              {/* Grid foto */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {gallery.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${gallery.name} ${index + 1}`}
                    className="w-full h-80 object-cover rounded-xl shadow-md"
                  />
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default GalleryAll;
