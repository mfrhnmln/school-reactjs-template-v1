import Breadcrumb from "./Breadcrumb/Breadcrumb";

// Import semua dataset
import DataExtracurricular from "./Data/DataExtracurricular";
import DataAdiwiyata from "./Data/DataAdiwiyata";
import DataAcademicAchievement from "./Data/DataAcademicAchievement";

const GalleryAll = () => {
  // Gabungkan semua data galeri yang ingin ditampilkan
  const galleries = [
    {
      title: "Foto-foto Ekstrakurikuler",
      name: "Ekstrakurikuler",
      images: DataExtracurricular.flatMap((item) => item.moreImages || []),
    },
    {
      title: "Foto-foto Adiwiyata",
      name: "Adiwiyata",
      images: DataAdiwiyata.gallery?.map((item) => item.image) || [],
    },
    {
      title: "Foto-foto Prestasi Akademik",
      name: "Prestasi Akademik",
      images: DataAcademicAchievement.gallery?.map((item) => item.image) || [],
    },
  ];

  return (
    <div className="flex flex-col px-5 items-center mt-48">
      <Breadcrumb
        paths={[
          { label: "Home", href: "/" },
          { label: "Galeri Sekolah" },
        ]}
      />

      <h1 className="text-title font-bold text-center mt-10">
        Galeri Sekolah
      </h1>

      {/* Loop semua kategori galeri */}
      {galleries.map((gallery, idx) => (
        <div key={idx} className="w-full max-w-5xl my-10">
          {/* Judul galeri */}
          <h2 className="text-header font-semibold mb-4">
            {gallery.title}
          </h2>

          {/* Grid foto */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.images.length > 0 ? (
              gallery.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${gallery.name} ${index + 1}`}
                  className="w-full h-40 object-cover rounded-xl shadow-md"
                />
              ))
            ) : (
              <p className="text-paragraph">Belum ada foto.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryAll;
