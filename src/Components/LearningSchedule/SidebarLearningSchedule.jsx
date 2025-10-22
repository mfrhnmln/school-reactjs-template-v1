import { useState } from "react";

const SidebarLearningSchedule = ({ onSearch, onFilterLevel }) => {
  const [search, setSearch] = useState("");
  const [activeLevel, setActiveLevel] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value);
  };

  const handleFilter = (level) => {
    setActiveLevel(level);
    onFilterLevel(level);
  };

  return (
    <aside className="w-full flex flex-col gap-10 sticky top-30 sm:h-[calc(100vh-5rem)]">
      {/* SEARCH */}
      <div>
        <h3 className="font-bold text-subtitle mb-6 border-b-2 border-[var(--color_text_secondary)] w-fit">
          SEARCH
        </h3>
        <input
          id="search"
          type="text"
          placeholder="contoh: (9-B)"
          value={search}
          onChange={handleSearch}
          className="w-full p-2 border border-[var(--color_text_title)]/30 rounded text-paragraph"
        />
      </div>

      {/* FILTER KELAS */}
      <div>
        <h3 className="font-bold text-subtitle mb-2 border-b-2 border-[var(--color_text_secondary)] w-fit">
          FILTER KELAS
        </h3>
        <div className="flex flex-col gap-2 text-paragraph">
          <button
            onClick={() => handleFilter(null)}
            className="text-left p-2 rounded hover:underline"
            style={{
              color:
                activeLevel === null
                  ? "var(--color_text_secondary)"
                  : "inherit",
            }}
          >
            Semua
          </button>
          <button
            onClick={() => handleFilter(7)}
            className="text-left p-2 rounded hover:underline"
            style={{
              color:
                activeLevel === 7 ? "var(--color_text_secondary)" : "inherit",
            }}
          >
            Kelas 7
          </button>
          <button
            onClick={() => handleFilter(8)}
            className="text-left p-2 rounded hover:underline"
            style={{
              color:
                activeLevel === 8 ? "var(--color_text_secondary)" : "inherit",
            }}
          >
            Kelas 8
          </button>
          <button
            onClick={() => handleFilter(9)}
            className="text-left p-2 rounded hover:underline"
            style={{
              color:
                activeLevel === 9 ? "var(--color_text_secondary)" : "inherit",
            }}
          >
            Kelas 9
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SidebarLearningSchedule;
