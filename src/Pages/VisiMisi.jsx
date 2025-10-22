import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataVisiMisi from "../Components/Data/DataVisiMisi";

const VisiMisi = ({ isDashboard = false }) => {
  return (
    <div
      className={`flex flex-col w-full h-full px-5 md:px-10 lg:px-20 gap-10 ${
        isDashboard ? "py-0" : "py-36"
      }`}
    >
      {/* Breadcrumb */}
      {!isDashboard && (
        <Breadcrumb
          paths={[{ label: "Home", href: "/" }, { label: "Visi & Misi" }]}
        />
      )}

      {/* Content */}
      <div
        className={`flex mx-auto w-full h-full text-center items-start justify-center ${
          isDashboard
            ? "flex-col md:flex-row max-w-7xl gap-20"
            : "flex-col max-w-5xl gap-10"
        }`}
      >
        {/* Gambar Logo */}
        {!isDashboard && (
          <div className="flex flex-col mx-auto w-full h-full">
            {/* Gambar */}
            <div className="flex flex-col mx-auto">
              <img
                className="w-full max-w-[30rem] mx-auto object-contain rounded-md"
                src={DataVisiMisi.image}
                alt={DataVisiMisi.title}
              />
            </div>

            {/* last update + share icon */}
            <div className="flex w-full p-4 mx-auto justify-between items-center border-b border-[var(--color_text_title)]/30">
              <div className="flex gap-2 text-paragraph">
                <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                  <i className="ri-user-fill"></i> {DataVisiMisi.author}
                </p>
                <p>{DataVisiMisi.date}</p>
              </div>
              <i className="ri-share-forward-fill text-header"></i>
            </div>
          </div>
        )}

        {/* Visi */}
        <div
          className={`flex flex-col gap-5 ${
            isDashboard ? "w-full md:w-1/2" : "w-full"
          }`}
        >
          <p className="text-title font-bold text-center">Visi</p>
          <p className="text-paragraph text-center">{DataVisiMisi.visi}</p>
        </div>

        {/* Misi */}
        <div
          className={`flex flex-col gap-5 ${
            isDashboard ? "w-full md:w-1/2" : "w-full"
          }`}
        >
          <p className="text-title font-bold text-center">Misi</p>
          <div className="flex flex-col text-paragraph text-left gap-2">
            {DataVisiMisi.misi.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;
