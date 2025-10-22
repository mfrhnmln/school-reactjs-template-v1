import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import DataExtracurricular from "../Data/DataExtracurricular";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const DetailExtracurricular = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // ambil detail berdasarkan slug
  const detail = DataExtracurricular.items.find((item) => item.slug === slug);

  const [selectedImage, setSelectedImage] = useState(null);

  if (!detail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Ekstrakurikuler tidak ditemukan.</p>
      </div>
    );
  }

  const images = detail.moreImages || [];
  const previewImages = images.slice(0, 9);
  const remaining = images.length - 9;

  return (
    <div className="flex flex-col px-5 items-center py-36">
      {/* Breadcrumb */}
      <Breadcrumb paths={[{ label: "Home", href: "/" }, { label: slug }]} />

      <div className="flex flex-col w-full max-w-3xl justify-between items-center py-10 gap-10">
        {/* Gambar utama */}
        <img
          src={detail.image}
          alt={detail.name}
          className="rounded-xl object-contain shadow-md cursor-pointer"
          onClick={() => setSelectedImage(detail.image)}
        />

        {/* Nama & deskripsi */}
        <div className="flex flex-col w-full h-full text-paragraph gap-4">
          <h1 className="text-title font-bold text-center">{detail.name}</h1>

          {/* Jadwal */}
          {detail.schedule && detail.schedule.length > 0 && (
            <div>
              <h2 className="text-title font-semibold text-center mb-4">
                Jadwal Kegiatan
              </h2>

              <div className="overflow-x-auto w-full">
                <table className="w-full">
                  {/* header table */}
                  <thead className="bg-[var(--background_component)] text-subtitle text-center">
                    <tr>
                      <th className="border border-[var(--color_text_title)]/50 py-5">
                        Hari
                      </th>
                      <th className="border border-[var(--color_text_title)]/50 py-5">
                        Ekstrakurikuler
                      </th>
                      <th className="border border-[var(--color_text_title)]/50 py-5">
                        Jadwal
                      </th>
                    </tr>
                  </thead>

                  {/* table contents */}
                  <tbody className="text-paragraph text-center">
                    {detail.schedule.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[var(--background_component)]/20 border-[var(--color_text_title)]/20"
                      >
                        <td className="border py-4">
                          {row.hari}
                        </td>
                        <td className="border py-4">
                          {row.nama}
                        </td>
                        <td className="border py-4">
                          {row.jadwal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="text-paragraph text-justify mt-5">
            {detail.description}
          </p>

          <h1 className="text-title font-bold text-center mt-10">
            Foto Kegiatan
          </h1>
        </div>

        {/* Galeri preview */}
        {images.length > 0 && (
          <div className="grid grid-cols-3 gap-4 w-full">
            {previewImages.map((img, index) => {
              if (index === 8 && images.length > 9) {
                return (
                  <div
                    key={index}
                    className="relative cursor-pointer"
                    onClick={() => navigate(`/galeri/ekstrakurikuler/${slug}`)}
                  >
                    <img
                      src={img}
                      alt={`${detail.name} ${index + 1}`}
                      className="w-full h-40 object-cover rounded-xl shadow-md"
                    />
                    <div className="absolute inset-0 bg-[var(--color_text_title)]/60 flex items-center justify-center rounded-xl">
                      <span
                        className="text-date"
                        style={{ color: "var(--color_text_button)" }}
                      >
                        +{remaining}
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <img
                  key={index}
                  src={img}
                  alt={`${detail.name} ${index + 1}`}
                  className="w-full h-40 object-cover rounded-xl shadow-md cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Modal untuk gambar besar */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="w-[80%] max-h-[80%] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default DetailExtracurricular;
