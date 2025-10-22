import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataStudentList from "../Components/Data/DataStudentList";

const StudentList = () => {
  return (
    <div className="flex flex-col w-full h-full px-5 md:px-10 lg:px-20 py-36">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[{ label: "Home", href: "/" }, { label: "Daftar Siswa" }]}
      />

      {/* Content */}
      <div className="flex flex-col mx-auto w-full h-full max-w-5xl">
        {/* Judul */}
        <h1 className="text-title font-bold  my-10 text-center">
          {DataStudentList.title}
        </h1>

        {/* Tabel per kelas */}
        <div className=" flex flex-col gap-12">
          {DataStudentList.tables.map((table, idx) => (
            <div key={idx} className="w-full">
              <h2 className="text-title font-semibold mb-5">{table.kelas}</h2>

              <div className="overflow-x-auto w-full">
                <table className="w-full">
                  {/* header table */}
                  <thead className="bg-[var(--background_component)] text-subtitle text-center">
                    <tr>
                      <th className="border border-[var(--color_text_title)]/50 py-5">
                        Kelas
                      </th>
                      <th className="border border-[var(--color_text_title)]/50 py-5">
                        Siswa Pria
                      </th>
                      <th className="border border-[var(--color_text_title)]/50 py-5">
                        Siswa Wanita
                      </th>
                      <th className="border border-[var(--color_text_title)]/50 py-5">
                        Jumlah
                      </th>
                    </tr>
                  </thead>

                  {/* table contents */}
                  <tbody className="text-paragraph text-center">
                    {table.data.map((row, i) => (
                      <tr
                        key={i}
                        className={`hover:bg-[var(--background_component)]/60 border-[var(--color_text_title)]/20
                        ${
                          row.kelas.includes("Jumlah Keseluruhan")
                            ? "bg-[var(--background_component)] font-semibold"
                            : ""
                        }
                      `}
                      >
                        <td className="border py-4">{row.kelas}</td>
                        <td className="border py-4">{row.pria}</td>
                        <td className="border py-4">{row.wanita}</td>
                        <td className="border py-4">{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Info meta */}
        <div className="flex w-full p-4 mx-auto justify-between items-center border-b border-[var(--color_text_title)]/30 mt-10">
          <div className="flex gap-2 text-paragraph">
            <p className="pr-2 border-r border-[var(--color_text_title)]/30">
              <i className="ri-user-fill"></i> {DataStudentList.author}
            </p>
            <p>
              <i className="ri-calendar-2-fill"></i> {DataStudentList.date}
            </p>
          </div>
          <i className="ri-share-forward-fill text-header"></i>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
