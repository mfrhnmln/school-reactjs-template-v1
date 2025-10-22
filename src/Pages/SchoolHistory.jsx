import { Link } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import { useTruncatedMessage } from "../utils/useTruncatedMessage";

import DataHistory from "../Components/Data/DataHistory";

const SchoolHistory = ({ isDashboard = false }) => {
  const truncatedMessage = useTruncatedMessage(DataHistory.message);

  return (
    <div
      className={`flex flex-col w-full h-full px-5 md:px-10 lg:px-20 gap-10 ${
        isDashboard ? "py-0" : "py-36"
      }`}
    >
      {/* Breadcrumb */}
      {!isDashboard && (
        <Breadcrumb
          paths={[{ label: "Home", href: "/" }, { label: "Sejarah Sekolah" }]}
        />
      )}

      {/* Content */}
      <div
        className={`flex mx-auto w-full h-full text-center items-center justify-center gap-10 ${
          isDashboard ? "flex-col md:flex-row max-w-7xl" : "flex-col max-w-5xl"
        }`}
      >
        {/* Foto & tanggal + icon share */}
        {!isDashboard && (
          <div className="flex flex-col mx-auto w-full h-full gap-5">
            {/* Foto */}
            <div className="flex flex-col mx-auto max-w-3xl">
              <img
                className="items-center w-full h-full object-cover rounded-md shadow-md"
                src={DataHistory.image}
                alt="foto sekolah"
              />
            </div>

            {/* tanggal update dan icon */}
            <div className="flex w-full p-4 mx-auto justify-between items-center border-b border-[var(--color_text_title)]/30">
              <div className="flex gap-2 text-paragraph">
                <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                  <i className="ri-user-fill"></i> {DataHistory.author}
                </p>
                <p>{DataHistory.date}</p>
              </div>
              <i className="ri-share-forward-fill text-header"></i>
            </div>
          </div>
        )}

        {/* Teks Sejarah */}
        <div className="flex flex-col mx-auto w-full h-full">
          {isDashboard ? (
            <p className="text-paragraph text-justify whitespace-pre-line">
              {truncatedMessage}...
              <Link
                to="/sejarah-sekolah"
                className="text-[var(--color_info)]/80 hover:underline hover:text-[var(--color_info)] ml-2"
              >
                Read more
              </Link>
            </p>
          ) : (
            <div className="flex flex-col gap-10">
              <h1 className="text-title font-bold">Sejarah Sekolah</h1>
              <p className="text-paragraph text-justify whitespace-pre-line">
                {DataHistory.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SchoolHistory;
