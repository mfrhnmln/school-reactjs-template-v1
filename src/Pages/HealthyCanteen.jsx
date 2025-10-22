import Breadcrumb from "../Components/Breadcrumb/Breadcrumb";
import DataHealthyCanteen from "../Components/Data/DataHealthyCanteen";

const HealthyCanteen = () => {
  return (
    <div className="flex flex-col w-full h-full px-5 md:px-10 lg:px-20 py-36">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[{ label: "Home", href: "/" }, { label: "Kerjasama Komite" }]}
      />

      {/* Content */}
      <div className="flex flex-col w-full max-w-5xl mx-auto h-full text-center items-center justify-center gap-8 ">
        {/* Foto utama */}
        <div className="flex flex-col">
          <div className="py-10">
            <img
              className="w-full h-full object-cover rounded-md shadow-md"
              src={DataHealthyCanteen.mainImage}
              alt={DataHealthyCanteen.title}
            />
          </div>
          {/* tanggal update dan icon */}
          <div className="flex w-full p-4 mx-auto justify-between items-center border-b border-[var(--color_text_title)]/30">
            <div className="flex gap-2 text-paragraph">
              <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                <i className="ri-user-fill"></i>{" "}
                {DataHealthyCanteen.author}
              </p>
              <p>
                <i className="ri-calendar-2-fill"></i>{" "}
                {DataHealthyCanteen.date}
              </p>
            </div>
            <i className="ri-share-forward-fill text-header"></i>
          </div>
          {/* Judul */}
          <h1 className="text-title font-bold py-10">
            {DataHealthyCanteen.title}
          </h1>
          <p className="text-paragraph text-justify whitespace-pre-line">
            {DataHealthyCanteen.mainDescription}
          </p>
        </div>

        {/* Foto kegiatan */}
        <div className="flex flex-col gap-12 w-full">
          {DataHealthyCanteen.activities.map((act, i) => (
            <div key={i} className="flex flex-col gap-6 items-start">
              <img
                src={act.image}
                alt={`kegiatan-${i + 1}`}
                className="w-full h-full max-w-[30rem] max-h-[30rem] object-cover rounded-lg shadow-md"
              />
              <p className="text-paragraph text-sm text-justify">
                {act.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthyCanteen;
