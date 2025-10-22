import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import DataAgenda from "../Data/DataAgenda";

const DetailAgenda = () => {
  const { slug } = useParams();
  const detail = DataAgenda.find((item) => item.slug === slug);

  if (!detail) {
    return (
      <div className="min-h-screen text-title flex items-center justify-center">
        <p>Agenda tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-36 px-5 md:px-10 lg:px-20">
      <Breadcrumb
        paths={[
          { label: "Home", href: "/" },
          { label: "Agenda", href: "/agenda" },
          { label: `${detail.title}` },
        ]}
      />

      <div className="flex flex-col w-full max-w-4xl justify-between items-center py-10 gap-10">
        <div className="w-full">
          <img
            src={detail.image}
            alt={detail.title}
            className="w-full max-h-[28rem] rounded-md object-contain hover:scale-110  transform transition-transform duration-500 ease-in-out"
          />

          {/* tanggal upload */}
          <div className="flex w-full p-4 mx-auto justify-between items-center border-b border-[var(--color_text_title)]/30">
            <div className="flex gap-2 text-paragraph">
              <p className="pr-2 border-r border-[var(--color_text_title)]/30">
                <i className="ri-user-fill"></i> {detail.author}
              </p>
              <p>
                <i className="ri-calendar-2-fill"></i> {detail.date}
              </p>
            </div>
            <i className="ri-share-forward-fill text-header"></i>
          </div>
        </div>

        <div className="flex flex-col w-full h-full text-paragraph gap-2">
          <h1 className="text-title font-bold text-center mb-5">
            {detail.title}
          </h1>

          {/* opening content */}
          {detail.openingContent && <p>{detail.openingContent}</p>}

          {/* paragraphs */}
          {detail.paragraphs?.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailAgenda;
