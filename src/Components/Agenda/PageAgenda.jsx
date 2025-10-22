import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Sidebar from "../Function/Sidebar";
import ComponentsAgenda from "./ComponentsAgenda";
import DataAgenda from "../Data/DataAgenda";
import {
  normalizeData,
  getUniqueYears,
  filterByYearAndSearch,
  updateParams,
} from "../../utils/helper";

const PageAgenda = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q") || "";
  const selectedYear = searchParams.get("year") || "";

  const NormalizedAgenda = useMemo(() => normalizeData(DataAgenda), []);

  const years = useMemo(
    () => getUniqueYears(NormalizedAgenda),
    [NormalizedAgenda]
  );

  const filteredAgenda = useMemo(
    () => filterByYearAndSearch(NormalizedAgenda, selectedYear, q),
    [selectedYear, q, NormalizedAgenda]
  );

  return (
    <div className="flex flex-col items-center py-36 px-5 md:px-10 lg:px-20">
      <Breadcrumb paths={[{ label: "Home", href: "/" }, { label: "Agenda" }]} />

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

        {/* Lisbt agenda */}
        <section className="w-full sm:w-2/3">
          <ComponentsAgenda
            layout="list"
            isDashboard={false}
            agendaList={filteredAgenda}
          />
        </section>
      </div>
    </div>
  );
};

export default PageAgenda;
