import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Sidebar from "../Function/Sidebar";
import ComponentsNews from "./ComponentsNews";
import DataNews from "../Data/DataNews";
import {
  normalizeData,
  getUniqueYears,
  filterByYearAndSearch,
  updateParams,
} from "../../utils/helper";

const PageNews = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q") || "";
  const selectedYear = searchParams.get("year") || "";

  // Normalize data (kalau ada date pakai fixDate)
  const NormalizedAcademicAchievements = useMemo(
    () => normalizeData(DataNews),
    []
  );

  // Ambil tahun unik
  const years = useMemo(
    () => getUniqueYears(NormalizedAcademicAchievements),
    [NormalizedAcademicAchievements]
  );

  // Filter data
  const filteredNews = useMemo(
    () =>
      filterByYearAndSearch(NormalizedAcademicAchievements, selectedYear, q),
    [selectedYear, q, NormalizedAcademicAchievements]
  );

  return (
    <div className="flex flex-col items-center py-36 px-5 md:px-10 lg:px-20">
      <Breadcrumb paths={[{ label: "Home", href: "/" }, { label: "Berita" }]} />

      <div className="flex flex-col w-full max-w-5xl justify-between sm:flex-row py-10 gap-10">
        {/* Sidebar filter */}
        <div className="w-full sm:w-1/3">
          <Sidebar
            years={years}
            activeYear={selectedYear}
            searchText={q}
            onSearchChange={(value) =>
              updateParams(searchParams, setSearchParams, "q", value)
            }
            onYearChange={(year) =>
              updateParams(searchParams, setSearchParams, "year", year)
            }
            onClearFilters={() => setSearchParams({}, { replace: true })}
          />
        </div>

        {/* List berita */}
        <section className="w-full sm:w-2/3">
          <ComponentsNews
            layout="list"
            isDashboard={false}
            newsList={filteredNews}
          />
        </section>
      </div>
    </div>
  );
};

export default PageNews;
