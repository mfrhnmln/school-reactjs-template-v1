import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Sidebar from "../Function/Sidebar";
import ComponentsExtracurricularAchievements from "./ComponentsExtracurricularAchievements";
import DataExtracurricularAchievements from "../Data/DataExtracurricularAchievements";
import { normalizeData, getUniqueYears, filterByYearAndSearch, updateParams } from "../../utils/helper";


const PageExtracurricularAchievements = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q") || "";
  const selectedYear = searchParams.get("year") || "";

  // Normalize data (kalau ada date pakai fixDate)
  const NormalizedAchievements = useMemo(() => normalizeData(DataExtracurricularAchievements), []);;


  // Ambil tahun unik
  const years = useMemo(
    () => getUniqueYears(NormalizedAchievements),
    [NormalizedAchievements]
  );

  // Filter data
  const filteredAchievements = useMemo(
    () => filterByYearAndSearch(NormalizedAchievements, selectedYear, q),
    [selectedYear, q, NormalizedAchievements]
  );

  return (
    <div className="flex flex-col px-5 items-center py-36 md:px-10 lg:px-20">
      <Breadcrumb
        paths={[{ label: "Home", href: "/" }, { label: "Prestasi Ekstrakurikuler" }]}
      />

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

        {/* List prestasi */}
        <section className="w-full sm:w-2/3">
          <ComponentsExtracurricularAchievements
            layout="list"
            isDashboard={false}
            extracurricularAchievementsList={filteredAchievements}
          />
        </section>
      </div>
    </div>
  );
};

export default PageExtracurricularAchievements;
