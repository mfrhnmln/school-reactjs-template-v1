import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataLogo from "../Components/Data/DataLogo";

const Logo = ({ isDashboard = false }) => {
  return (
    <div
      className={`flex flex-col w-full h-full px-5 md:px-10 lg:px-20 gap-10 ${
        isDashboard ? "py-0" : "py-36"
      }`}
    >
      {/* Breadcrumb */}
      {!isDashboard && (
        <Breadcrumb
          paths={[{ label: "Home", href: "/" }, { label: "Logo Sekolah" }]}
        />
      )}

      {/* Content */}
      <div
        className={`flex mx-auto w-full h-full text-center items-center justify-center gap-10 ${
          isDashboard
            ? "flex-col md:flex-row max-w-7xl"
            : "flex-col max-w-5xl"
        }`}
      >
        {/* Gambar Logo */}
        <div className="flex flex-col mx-auto w-full h-full">
            {/* Gambar */}
            <div className="flex flex-col mx-auto">
              <img
              className="w-full max-w-[30rem] mx-auto object-contain rounded-md"
              src={DataLogo.image}
              alt="logo sekolah"
            />
          </div>

          {/* tanggal update dan icon */}
          {!isDashboard && (
            <div className="flex w-full p-4 mx-auto justify-between items-center border-b border-[var(--color_text_title)]/30">
              <div className="flex gap-2 text-paragraph">
                <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                  <i className="ri-user-fill"></i> {DataLogo.author}
                </p>
                <p>{DataLogo.date}</p>
              </div>
              <i className="ri-share-forward-fill text-header"></i>
            </div>
          )}
        </div>

        {/* Penjelasan Logo */}
        <div className="flex flex-col mx-auto w-full h-full">
          {isDashboard ? (
            <p className="text-paragraph text-justify whitespace-pre-line">
              {DataLogo.message}
            </p>
          ) : (
            <>
              <h1 className="text-title font-bold pb-10">Logo Sekolah</h1>
              <p className="text-paragraph text-justify whitespace-pre-line">
                {DataLogo.message}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logo;
