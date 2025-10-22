import { useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import SidebarLearningSchedule from "./SidebarLearningSchedule";
import ComponentsLearningSchedule from "./ComponentsLearningSchedule";
import DataLearningSchedule from "../Data/DataLearningSchedule";

const PageLearningSchedule = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState(null);

  const filteredData = DataLearningSchedule.items.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchLevel = filterLevel ? item.level === filterLevel : true;
    return matchSearch && matchLevel;
  });

  return (
    <div className="flex flex-col items-center py-36 px-5 md:px-10 lg:px-20">
      <Breadcrumb
        paths={[{ label: "Home", href: "/" }, { label: "Jadwal Pembelajaran" }]}
      />

      <div className="flex flex-col w-full max-w-5xl justify-between sm:flex-row py-10 gap-10">
        {/* Sidebar */}
        <div className="w-full sm:w-1/3">
          <SidebarLearningSchedule
            onSearch={setSearchTerm}
            onFilterLevel={setFilterLevel}
          />
        </div>

        {/* Card Grid */}
        <div className="w-full sm:w-2/3">
          <h1 className="text-title font-bold text-center mb-10">
            Jadwal Pembelajaran
          </h1>
          <ComponentsLearningSchedule data={filteredData} />

          {/* Meta Info */}
          <div className="flex w-full p-4 mt-10 mx-auto justify-between items-center border-t border-[var(--color_text_title)]/30">
            <div className="flex gap-2 text-paragraph">
              <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                <i className="ri-user-fill"></i> {DataLearningSchedule.author}{" "}
              </p>
              <p>
                <i className="ri-calendar-2-fill"></i>{" "}
                {DataLearningSchedule.date}
              </p>
            </div>
            <i className="ri-share-forward-fill text-header"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLearningSchedule;
