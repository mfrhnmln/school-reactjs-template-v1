import { useState } from "react";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataSarana from "../Components/Data/DataSarana";

const Sarana = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col w-full h-full items-center px-5 md:px-10 lg:px-20 py-36">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[{ label: "Home", href: "/" }, { label: "Sarana & Prasarana" }]}
      />

      {/* Content */}
      <div className="flex flex-col mx-auto w-full h-full text-center items-center justify-center gap-10  max-w-5xl">
        {/* Judul */}
        <h1 className="text-title font-bold text-center mt-10">
          {DataSarana.title}
        </h1>

        {/* TABEL */}
        <div className="overflow-x-auto w-full">
          <table className="w-full">
            {/* header table */}
            <thead className="bg-[var(--background_component)] text-subtitle text-center">
              <tr>
                <th className="border border-[var(--color_text_title)]/50 py-5">
                  Fasilitas
                </th>
                <th className="border border-[var(--color_text_title)]/50 py-5">
                  Jumlah
                </th>
              </tr>
            </thead>

            {/* table contents */}
            <tbody className="text-paragraph text-center">
              {DataSarana.items.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[var(--background_component)]/60 border-[var(--color_text_title)]/20"
                >
                  <td className="border border-[var(--color_text_title)]/50 py-5">
                    {item.fasilitas}
                  </td>
                  <td className="border border-[var(--color_text_title)]/50 py-5">
                    {item.jumlah}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex w-full p-4 mx-auto justify-between items-center border-b border-[var(--color_text_title)]/30">
            <div className="flex gap-2 text-paragraph">
              <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                <i className="ri-user-fill"></i> {DataSarana.author}
              </p>
              <p>
                <i className="ri-calendar-2-fill"></i> {DataSarana.date}
              </p>
            </div>
            <i className="ri-share-forward-fill text-header"></i>
          </div>
        </div>

        {/* GALERI FOTO */}
        <div className="flex flex-col gap-10">
          {DataSarana.items.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              {/* Title per fasilitas */}
              <h2 className="text-subtitle font-bold">{item.fasilitas}</h2>

              {/* Foto-foto */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {item.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${item.fasilitas} ${i + 1}`}
                    className="w-full h-40 object-cover rounded-lg shadow cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal preview gambar */}
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

export default Sarana;
