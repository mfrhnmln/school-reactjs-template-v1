import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataCounseling from "../Components/Data/DataCounseling";

const Counseling = () => {
  return (
    <div className="flex flex-col w-full h-full px-5 md:px-10 lg:px-20 py-36">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[{ label: "Home", href: "/" }, { label: "Struktur Organisasi Sekolah" }]}
      />

      {/* Content */}
      <div className="flex mx-auto w-full h-full text-center items-center justify-center gap-10 flex-col max-w-5xl">
        {/* Foto + meta */}
        <div className="flex flex-col mx-auto w-full h-full gap-5">
          <h1 className="text-title font-bold py-10">
            {DataCounseling.title}
          </h1>
          {/* Foto */}
          <div className="flex flex-col">
            <img
              className="items-center w-full h-full object-cover rounded-md shadow-md"
              src={DataCounseling.image}
              alt={DataCounseling.title}
            />
          </div>

          {/* tanggal update dan icon */}
          <div className="flex w-full p-4 mx-auto justify-between items-center border-b border-[var(--color_text_title)]/30">
            <div className="flex gap-2 text-paragraph">
              <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                <i className="ri-user-fill"></i> {DataCounseling.author}
              </p>
              <i className="ri-calendar-2-fill"></i> {DataCounseling.date}
            </div>
            <i className="ri-share-forward-fill text-header"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
