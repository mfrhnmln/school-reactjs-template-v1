import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import DataNews from "../Data/DataNews";
import DataAgenda from "../Data/DataAgenda";
import DataAcademicAchievement from "../Data/DataAcademicAchievement";
import DataExtracurricularAchievements from "../Data/DataExtracurricularAchievements";
import { normalizeData } from "../../utils/helper";

// Gabungan semua data, sudah dinormalisasi
const FallbackMadingData = [
  ...normalizeData(DataNews),
  ...normalizeData(DataAgenda),
  ...normalizeData(DataAcademicAchievement),
  ...normalizeData(DataExtracurricularAchievements),
];

const ComponentsMadingNews = ({ newsList }) => {
  const source =
    Array.isArray(newsList) && newsList.length ? newsList : FallbackMadingData;

  // sort berdasarkan tanggal terbaru (Date object)
  const sortedNews = [...source].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date - a.date; // langsung Date object
  });

  const [index, setIndex] = useState(0);
  const total = sortedNews.length;

  // ambil jumlah item sesuai ukuran layar
  const getItemsPerPage = () => {
    if (window.innerWidth < 640) return 1; // sm
    if (window.innerWidth < 1024) return 2; // md
    return 3; // lg
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // update saat resize
  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setIndex((prev) => (prev + itemsPerPage) % total);
  }, [total, itemsPerPage]);

  const handlePrev = useCallback(() => {
    setIndex((prev) => (prev - itemsPerPage + total) % total);
  }, [total, itemsPerPage]);

  // auto next setiap 10 detik
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 10000);
    return () => clearInterval(interval);
  }, [handleNext]);

  // ambil item sesuai index
  const visibleItems = Array.from(
    { length: itemsPerPage },
    (_, i) => sortedNews[(index + i) % total]
  );

  return (
    <div className="relative flex flex-col w-full h-full justify-between">
      {/* grid responsif */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-20 mx-auto">
        {visibleItems.map((item) => {
          const previewText = [item.openingContent, ...(item.paragraphs || [])]
            .filter(Boolean)
            .join(" ")
            .trim();

          // format tanggal (sudah Date object dari normalizeData)
          const formattedDate =
            item.date instanceof Date && !isNaN(item.date)
              ? item.date.toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
              : "";

          return (
            <div
              key={item.slug}
              className="group flex flex-col shadow-xl overflow-hidden transition-all duration-300 ease-in-out bg-[var(--background_component)] rounded-xl"
            >
              {/* Image */}
              <img
                className="w-full h-[20rem] group-hover:scale-110 transform transition-transform duration-500 ease-in-out object-cover"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="flex flex-col h-full gap-3 p-5 bg-[var(--background)]">
                <div className="flex flex-col gap-3">
                  <p className="text-subtitle font-bold">
                    {item.title?.length > 50
                      ? item.title.slice(0, 50) + "..."
                      : item.title}
                  </p>

                  <p className="text-paragraph hidden sm:block">
                    {previewText.length > 100
                      ? previewText.slice(0, 100) + "..."
                      : previewText}
                  </p>

                  <Link
                    to={`/${item.route}/${item.slug}`}
                    className="text-paragraph cursor-pointer"
                    style={{ color: "var(--color_text_primary)" }}
                  >
                    Read more <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </div>

                <div className="mt-10 border-t border-[var(--color_text_title)]/20">
                  <div className="flex justify-between items-center py-2">
                    <p className="text-paragraph">
                      <i className="ri-user-fill"></i> {item.author}
                    </p>
                    <p className="text-paragraph hidden sm:block">
                      {formattedDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* tombol navigasi kiri */}
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-[var(--background)]/70 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <i className="ri-arrow-left-s-line text-xl"></i>
        </button>

        {/* tombol navigasi kanan */}
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-[var(--background)]/70 p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <i className="ri-arrow-right-s-line text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default ComponentsMadingNews;
