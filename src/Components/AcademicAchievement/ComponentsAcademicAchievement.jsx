import { Link } from "react-router-dom";
import FallbackAcademicAchievements from "../Data/DataAcademicAchievement";
import { normalizeData } from "../../utils/helper";

// fallback sudah normalisasi otomatis
const FallbackAcademicAchievementsData = normalizeData(FallbackAcademicAchievements);


const ComponentsAcademicAchievement = ({
  academicAchievementList,
  maxItems = 20,
  layout = "grid",
}) => {
  const source =
    Array.isArray(academicAchievementList) && academicAchievementList.length
      ? academicAchievementList
      : FallbackAcademicAchievementsData;

  // Urutkan berdasarkan tanggal terbaru
  const sortedAcademicAchievement = [...source].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // Batasi jumlah item berdasarkan maxItems
  const AcademicAchievementList = sortedAcademicAchievement.slice(0, maxItems);

  return (
     <div
      className={
        layout === "grid"
          ? "grid grid-cols-2 lg:grid-cols-3 justify-center gap-5 px-5 md:px-10 lg:px-20 lg:max-w-7xl"
          : "flex flex-col w-full justify-center gap-10"
      }
    >
      {AcademicAchievementList.map((item) => {
        // gabungkan semua paragraph jadi satu string
        const previewText = (item.paragraphs || []).join(" ").trim();

        // format tanggal (sekarang pasti Date object)
        const formattedDate = item.date
          ? item.date.toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })
          : "";

        return (
          <div
            key={item.slug}
            className={`group flex flex-col h-full shadow-xl overflow-hidden transition-all duration-300 ease-in-out bg-[var(--background_component)] 
              ${
                layout === "grid" ? "w-full rounded-xl " : "w-full rounded-xl"
              }`}
          >
            {/* gambar */}
            <img
              className={` transform transition-transform duration-500 ease-in-out ${
                layout === "grid"
                  ? "w-full h-[14rem] group-hover:scale-110"
                  : "w-full max-h-[30rem] group-hover:scale-105"
              } object-cover`}
              src={item.image}
              alt={item.title}
              loading="lazy"
            />

            <div className="flex flex-col h-full gap-3 p-5 bg-[var(--background)]">
              {/* content */}
              <div className="flex flex-col gap-3">
                <p className="text-subtitle font-bold">
                  {layout === "grid" && item.title?.length > 50
                    ? item.title.slice(0, 50) + "..."
                    : item.title}
                </p>

                <p className="text-paragraph hidden sm:block">
                  {layout === "grid"
                    ? previewText.length > 100
                      ? previewText.slice(0, 100) + "..."
                      : previewText
                    : previewText.length > 200
                    ? previewText.slice(0, 200) + "..."
                    : previewText}
                </p>

                {/* Tombol read more */}
                <Link
                  to={`/${item.route}/${item.slug}`}
                  className="text-paragraph cursor-pointer"
                  style={{ color: "var(--color_text_primary)" }}
                >
                  Read more<i className="ri-arrow-right-s-line"></i>
                </Link>
              </div>

              {/* penulis dan tanggal */}
              <div className="mt-10 border-t border-[var(--color_text_title)]/20">
                <div className="flex justify-between items-center py-2">
                  <p className="text-paragraph">
                    <i className="ri-user-3-fill pr-1"></i>
                    {item.author}
                  </p>
                  <p className="text-paragraph hidden sm:block">
                    <i className="ri-calendar-2-fill pr-1"></i>
                    {formattedDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentsAcademicAchievement;
