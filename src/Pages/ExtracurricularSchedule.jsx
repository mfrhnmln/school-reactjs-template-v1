import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataExtracurricular from "../Components/Data/DataExtracurricular";

const ExtracurricularSchedule = () => {
  const schedules = DataExtracurricular.items.flatMap((item) => item.schedule);

  return (
    <div className="flex flex-col w-full h-full px-5 md:px-10 lg:px-20 py-36">
      <Breadcrumb
        paths={[
          { label: "Home", href: "/" },
          { label: "Jadwal Ekstrakurikuler" },
        ]}
      />

      <div className="flex mx-auto w-full h-full text-center items-center justify-center gap-5 flex-col max-w-5xl">
        <h1 className="text-title font-bold mt-10 mb-5">
          {DataExtracurricular.title}
        </h1>

        <div className="overflow-x-auto w-full">
          <table className="w-full">
            {/* header table */}
            <thead className="bg-[var(--background_component)] text-subtitle text-center">
              <tr>
                <th className="border border-[var(--color_text_title)]/50 py-5">
                  Ekstrakurikuler
                </th>
                <th className="border border-[var(--color_text_title)]/50 py-5">
                  Hari
                </th>
                <th className="border border-[var(--color_text_title)]/50 py-5">
                  Jadwal
                </th>
              </tr>
            </thead>

            {/* table contents */}
            <tbody className="text-paragraph text-center">
              {schedules.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[var(--background_component)]/60 border-[var(--color_text_title)]/20"
                >
                  <td className="border border-[var(--color_text_title)]/50 py-5">
                    {row.nama}
                  </td>
                  <td className="border border-[var(--color_text_title)]/50 py-5">
                    {row.hari}
                  </td>
                  <td className="border border-[var(--color_text_title)]/50 py-5">
                    {row.jadwal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex w-full p-4 mx-auto justify-between items-center border-t border-[var(--color_text_title)]/30">
          <div className="flex gap-2 text-paragraph">
            <p className="pr-2 border-r border-[var(--color_text_title)]/30">
              <i className="ri-user-fill"></i> {DataExtracurricular.author}
            </p>
            <p>
              <i className="ri-calendar-2-fill"></i> {DataExtracurricular.date}
            </p>
          </div>
          <i className="ri-share-forward-fill text-header"></i>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularSchedule;
