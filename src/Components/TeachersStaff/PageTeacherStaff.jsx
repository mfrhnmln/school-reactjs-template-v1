import { useLocation } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import DataTeachersStaff from "../Data/DataTeachersStaff";

const PageTeachersStaff = () => {
  const location = useLocation();
  const isStaffPage = location.pathname.includes("staff");

  const data = isStaffPage ? DataTeachersStaff.staff : DataTeachersStaff.guru;
  const frameData = DataTeachersStaff.groupPhoto.find((item) =>
    isStaffPage ? item.name.includes("Staff") : item.name.includes("Guru")
  );

  return (
    <div className="flex flex-col w-full h-full px-5 md:px-10 py-36">
      <Breadcrumb
        paths={[
          { label: "Home", href: "/" },
          { label: isStaffPage ? "Staff" : "Guru" },
        ]}
      />

      <div className="flex flex-col mx-auto w-full h-full text-center items-center justify-center gap-5 max-w-5xl py-10">
        {/* Foto Frame */}
        {frameData && (
          <div className="flex flex-col justify-center w-full">
            <img
              src={frameData.image}
              alt={frameData.name}
              className="rounded-lg shadow-lg"
            />
          </div>
        )}
        <div className="flex w-full p-4 mx-auto justify-between items-center border-b border-[var(--color_text_title)]/30">
          <div className="flex gap-2 text-paragraph">
            <p className="pr-2 border-r border-[var(--color_text_title)]/30">
              <i className="ri-user-fill"></i> {DataTeachersStaff.author}
            </p>
            <p>
              <i className="ri-calendar-2-fill"></i> {DataTeachersStaff.date}
            </p>
          </div>

          <i className="ri-share-forward-fill text-header"></i>
        </div>

        <h1 className="text-title py-10">
          Daftar {isStaffPage ? "Tenaga Kependidikan" : "Pendidik"} SMP Negeri 35 Bandung
        </h1>

        {/* Tabel Daftar Guru/Staff */}
        <div className="w-full">
          <table className="w-full">
            {/* header table */}
            <thead className="bg-[var(--background_component)] text-subtitle text-center">
              <tr>
                <th className="border-y border-[var(--color_text_title)]/50 py-5">
                  No
                </th>
                <th className="border-y border-[var(--color_text_title)]/50 py-5">
                  Nama
                </th>
                <th className="border-y border-[var(--color_text_title)]/50 py-5">
                  Status
                </th>
              </tr>
            </thead>

            {/* table contents */}
            <tbody className="text-paragraph text-center">
              {data.map((item, idx) => (
                <tr
                  key={`${item.id}-${idx}`}
                  className="hover:bg-[var(--background_component)]/60 border-[var(--color_text_title)]/20"
                >
                  <td className="border-y border-[var(--color_text_title)]/50 py-5">
                    {idx + 1}
                  </td>
                  <td className="border-y border-[var(--color_text_title)]/50 py-5">
                    {item.name}
                  </td>
                  <td className="border-y border-[var(--color_text_title)]/50 py-5">
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PageTeachersStaff;
