import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataSlogan from "../Components/Data/DataSlogan";

const SchoolSlogan = ({ isDashboard = false }) => {
  return (
    <div
      className={`flex flex-col w-full h-full px-5 md:px-10 lg:px-20 gap-10 ${
        isDashboard ? "py-0" : "py-36"
      }`}
    >
      {/* Breadcrumb */}
      {!isDashboard && (
        <Breadcrumb
          paths={[
            { label: "Home", href: "/" },
            { label: "Slogan & Motto Sekolah" },
          ]}
        />
      )}

      {/* Content */}
      <div
        className={`flex mx-auto w-full h-full text-center items-start justify-center gap-10 ${
          isDashboard
            ? "flex-col md:flex-row md:flex-wrap max-w-7xl"
            : "flex-col max-w-5xl"
        }`}
      >
        {/* Gambar */}
        {!isDashboard && (
          <div className="flex flex-col mx-auto w-full h-full">
            {/* Gambar */}
            <div className="flex flex-col mx-auto ">
              <img
                className="w-full max-w-[30rem] mx-auto object-contain rounded-md"
                src={DataSlogan.image}
                alt="logo sekolah"
              />
            </div>

            {/* last update + share icon */}
            <div className="flex w-full mx-auto p-4 justify-between items-center border-b border-[var(--color_text_title)]/30">
              <div className="flex gap-2 text-paragraph">
                <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                  <i className="ri-user-fill"></i> {DataSlogan.author}
                </p>
                <p>{DataSlogan.date}</p>
              </div>
              <i className="ri-share-forward-fill text-header"></i>
            </div>
          </div>
        )}

        {/* Slogan */}
        <div
          className={`flex flex-col gap-3 ${isDashboard ? "w-1/2" : "w-full"}`}
        >
          <p className="text-title font-bold text-center mb-5">
            Slogan Sekolah
          </p>
          <div className="flex flex-col text-paragraph text-left gap-2">
            {DataSlogan.slogan.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>

        {/* Motto */}
        <div
          className={`flex flex-col gap-3 py-10 ${
            isDashboard ? "w-1/2" : "w-full"
          }`}
        >
          <p className="text-title font-bold text-center mb-5">Motto Sekolah</p>
          <div className="flex flex-col text-paragraph text-left gap-2">
            {DataSlogan.motto.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>

        {/* Yel-yel */}
        <div
          className={`flex flex-col gap-3 py-10 ${
            isDashboard ? "w-1/2" : "w-full"
          }`}
        >
          <p className="text-title font-bold text-center mb-5">
            Yel-yel Sekolah
          </p>
          <div className="flex flex-col text-paragraph text-left gap-2">
            {DataSlogan.yelyel.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>

        {/* Mars */}
        <div className={`flex flex-col gap-3 py-10 ${isDashboard ? "w-1/2" : "w-full"}`}>
          <p className="text-title font-bold text-center mb-5">Mars Sekolah</p>
          <p className="text-paragraph font-bold text-center">
            {DataSlogan.marsAuthor}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10">
            <div className="flex flex-col w-1/2 text-paragraph text-left whitespace-pre-line gap-2">
              {DataSlogan.mars.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>

            {/* Video Mars */}
            <div className="flex w-1/2 items-center justify-center aspect-video">
              <iframe
                className="w-full max-w-3xl h-[25rem] rounded-md shadow-md"
                src={DataSlogan.marsVideo}
                title="Mars Sekolah"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolSlogan;
