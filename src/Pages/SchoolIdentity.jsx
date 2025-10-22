// SchoolIdentity.jsx
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataSchoolIdentity from "../Components/Data/DataSchoolIdentity";

const SchoolIdentity = () => {
  const infos = DataSchoolIdentity.tables.flatMap((item) => item.data);

  return (
    <div className="flex flex-col w-full h-full px-5 md:px-10 lg:px-20 py-36 gap-10">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: "Home", href: "/" },
          { label: "Identitas Sekolah" },
        ]}
      />

      <div className="flex flex-col max-w-5xl mx-auto w-full h-full text-center items-center justify-center gap-10 ">
        <h1 className="text-title font-bold">
          {DataSchoolIdentity.title}
        </h1>

        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full">
            {/* Table contents */}
            <tbody className="text-paragraph text-left">
              {infos.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[var(--background_component)]/60 border-[var(--color_text_title)]/20"
                >
                  <td className="border border-[var(--color_text_title)]/50 py-5 px-3 font-semibold">
                    {row.field}
                  </td>
                  <td className="border border-[var(--color_text_title)]/50 py-5 px-3">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Info */}
        <div className="flex w-full p-4 mx-auto justify-between items-center border-t border-[var(--color_text_title)]/30">
          <div className="flex gap-2 text-paragraph">
            <p className="pr-2 border-r border-[var(--color_text_title)]/30">
              <i className="ri-user-fill"></i> {DataSchoolIdentity.author}
            </p>
            <p>
              <i className="ri-calendar-2-fill"></i> {DataSchoolIdentity.date}
            </p>
          </div>
          <i className="ri-share-forward-fill text-header"></i>
        </div>
      </div>
    </div>
  );
};

export default SchoolIdentity;
