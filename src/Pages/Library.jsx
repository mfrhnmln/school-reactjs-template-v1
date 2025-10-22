import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataLibrary from "../Components/Data/DataLibrary";

const Library = () => {
  return (
    <div className="flex flex-col w-full h-full px-5 md:px-10 lg:px-20 py-36">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: "Home", href: "/" },
          { label: "Jadwal Pelayanan Sekolah" },
        ]}
      />

      {/* Content */}
      <div className="flex flex-col mx-auto w-full h-full max-w-5xl gap-10">
        {DataLibrary.map((item, idx) => (
          <div key={idx} className="flex flex-col w-full h-full">
            {/* Title */}
            <h1 className="text-title font-bold py-10 text-center">
              {item.title}
            </h1>

            {/* Foto */}
            <div className="flex flex-col">
              <img
                className="w-full h-[30rem] object-cover rounded-md shadow-md"
                src={item.image}
                alt={item.title}
              />
            </div>

            {/* Tanggal update dan icon */}
            <div className="flex w-full p-4 justify-between items-center border-b border-[var(--color_text_title)]/30 text-paragraph">
              <div className="flex gap-2">
                <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                  <i className="ri-user-fill"></i> {item.author}
                </p>
                <p>
                  <i className="ri-calendar-2-fill"></i> {item.date}
                </p>
              </div>
              <i className="ri-share-forward-fill text-header"></i>
            </div>

            {/* Tabel Jadwal */}
            <div className="overflow-x-auto mt-5">
              <table className="w-full">
                {/* header table */}
                <thead className="bg-[var(--background_component)] text-subtitle text-center">
                  <tr>
                    <th className="border border-[var(--color_text_title)]/50 py-5">
                      Hari
                    </th>
                    <th className="border border-[var(--color_text_title)]/50 py-5">
                      Buka
                    </th>
                    <th className="border border-[var(--color_text_title)]/50 py-5">
                      Istirahat
                    </th>
                    <th className="border border-[var(--color_text_title)]/50 py-5">
                      Tutup
                    </th>
                  </tr>
                </thead>

                {/* table contents */}
                <tbody className="text-paragraph text-center">
                  {item.table.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-[var(--background_component)]/60 border-[var(--color_text_title)]/20"
                    >
                      <td className="border border-[var(--color_text_title)]/50 py-5">
                        {row.hari}
                      </td>
                      <td className="border border-[var(--color_text_title)]/50 py-5">
                        {row.buka}
                      </td>
                      <td className="border border-[var(--color_text_title)]/50 py-5">
                        {row.istirahat}
                      </td>
                      <td className="border border-[var(--color_text_title)]/50 py-5">
                        {row.tutup}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div>
              <h2 className="text-subtitle font-bold py-10 text-center">
                {item.teamTitle}
              </h2>

              {/* Foto */}
              <div className="flex flex-col">
                <img
                  className="w-full h-[30rem] object-cover rounded-md shadow-md"
                  src={item.teamImage}
                  alt={item.teamTitle}
                />
              </div>

              {/* Tanggal update dan icon */}
              <div className="flex w-full p-4 justify-between items-center border-b border-[var(--color_text_title)]/30 text-paragraph">
                <div className="flex gap-2">
                  <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                    <i className="ri-user-fill"></i> {item.author}
                  </p>
                  <p>
                    <i className="ri-calendar-2-fill"></i> {item.date}
                  </p>
                </div>
                <i className="ri-share-forward-fill text-header"></i>
              </div>
              
              <div className="mt-10">
                <p>{item.description}</p>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
