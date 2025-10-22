import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({
  activeYear = "",
  years = [],
  searchText = "",
  onSearchChange,
  onYearChange,
  onClearFilters,
}) => {
  const [value, setValue] = useState(searchText);
  const location = useLocation();

  useEffect(() => {
    setValue(searchText);
  }, [searchText]);

  // kategori di sini = navigasi antar halaman
  const categories = [
    { path: "/berita", label: "Berita Sekolah" },
    { path: "/agenda", label: "Agenda Sekolah" },
    { path: "/prestasi/akademik", label: "Prestasi Akademik" },
    { path: "/prestasi/ekstrakurikuler", label: "Prestasi Ekstrakurikuler" },
  ];

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    onSearchChange?.(value);
  };

  return (
    <aside className="w-full flex flex-col gap-5 sticky top-25 sm:h-[calc(100vh-5rem)]">
      {/* SEARCH */}
      <div>
        <h3 className="font-bold text-subtitle mb-5 border-b-2 border-[var(--color_text_secondary)] w-fit">
          SEARCH
        </h3>
        <form onSubmit={handleSubmitSearch} className="flex">
          <input
            type="text"
            className="text-paragraph border border-[var(--color_text_title)]/30 px-3 py-2 w-full"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onBlur={() => onSearchChange?.(value)}
          />
          <button
            type="submit"
            className="text-button px-4 cursor-pointer"
            style={{ background: "var(--background_primary)" }}
          >
            Search
          </button>
        </form>
        {(searchText || activeYear) && (
          <button
            className="mt-2 underline text-helper"
            onClick={() => onClearFilters?.()}
          >
            Reset filters
          </button>
        )}
      </div>

      <div className="flex gap-5 sm:flex-col">
        {/* CATEGORY → navigator antar halaman */}
        <div>
          <h3 className="font-bold text-subtitle mb-5 border-b-2 border-[var(--color_text_secondary)] w-fit">
            CATEGORY
          </h3>
          <ul className="text-paragraph flex flex-col gap-5 sm:gap-2">
            {categories.map((cat) => (
              <li key={cat.path}>
                <Link
                  to={cat.path}
                  className="hover:underline"
                  style={{
                    color: location.pathname.startsWith(cat.path)
                      ? "var(--color_text_secondary)"
                      : "inherit",
                  }}
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ARCHIVES → filter tahun */}
        <div>
          <h3 className="font-bold text-subtitle mb-5 border-b-2 border-[var(--color_text_secondary)] w-fit">
            ARCHIVES
          </h3>
          <ul className="text-paragraph flex flex-col gap-5 sm:gap-2">
            <li>
              <button
                onClick={() => onYearChange?.("")}
                className="text-left hover:underline"
                style={{
                  color:
                    activeYear === ""
                      ? "var(--color_text_secondary)"
                      : "inherit",
                }}
              >
                Semua Tahun
              </button>
            </li>
            {years.map((y) => (
              <li key={y}>
                <button
                  onClick={() => onYearChange?.(y)}
                  className="text-left hover:underline"
                  style={{
                    color:
                      activeYear === String(y)
                        ? "var(--color_text_secondary)"
                        : "inherit",
                  }}
                >
                  {y}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
