import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataAdiwiyata from "../Components/Data/DataAdiwiyata";

const Adiwiyata = ({ isDashboard = false }) => {
  return (
    <div
      className={`flex flex-col w-full h-full px-5 md:px-10 lg:px-20 gap-10 ${
        isDashboard ? "py-0" : "py-36"
      }`}
    >
      {/* Breadcrumb */}
      {!isDashboard && (
        <Breadcrumb
          paths={[{ label: "Home", href: "/" }, { label: "Adiwiyata" }]}
        />
      )}

      {/* Content */}
      <div
        className={`flex mx-auto w-full h-full text-center items-center justify-center gap-10 ${
          isDashboard ? "flex-col md:flex-row max-w-7xl" : "flex-col max-w-5xl"
        }`}
      >
        {/* Gambar + meta hanya di halaman penuh */}
        {!isDashboard && (
          <div className="flex flex-col mx-auto w-full h-full gap-5">
            {/* Gambar */}
            <div className="flex flex-col mx-auto w-full max-w-5xl ">
              <img
                className="items-center w-full h-full object-cover rounded-md shadow-md"
                src={DataAdiwiyata.image}
                alt="foto sekolah"
              />
            </div>

            {/* tanggal update dan icon */}
            <div className="flex w-full p-4 mx-auto justify-between items-center border-b border-[var(--color_text_title)]/30">
              <div className="flex gap-2 text-paragraph">
                <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                  <i className="ri-user-fill"></i> {DataAdiwiyata.author}
                </p>
                <p>{DataAdiwiyata.date}</p>
              </div>
              <i className="ri-share-forward-fill text-header"></i>
            </div>
          </div>
        )}

        {/* Teks */}
        <div className="flex flex-col mx-auto w-full h-full">
          <h1 className="text-title font-bold pb-10">Adiwiyata Sekolah</h1>
          <p className="text-paragraph text-justify whitespace-pre-line">
            {DataAdiwiyata.message}
          </p>

          {/* Galeri 4 foto + teks */}
          {!isDashboard && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {DataAdiwiyata.gallery.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center shadow-md rounded-xl p-4 gap-2 bg-[var(--background_component)]"
                >
                  <img
                    src={item.image}
                    alt={`gallery-${index}`}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
                  <p className="text-paragraph">{item.titleImage}</p>
                  <p className="text-paragraph text-justify">
                    {item.paragraph}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Adiwiyata;
