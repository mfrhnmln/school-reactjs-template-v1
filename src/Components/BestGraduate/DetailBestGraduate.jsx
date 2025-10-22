import { useParams } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import DataBestGraduate from "../Data/DataBestGraduate";

const DetailBestGraduate = () => {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  // Cari data sesuai nama
  const detail = DataBestGraduate.find((item) => item.name === decodedName);

  if (!detail) {
    return (
      <div className="min-h-screen text-title flex items-center justify-center">
        <p>Data lulusan terbaik tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-5 items-center py-48">
      {/* Breadcrumb */}
      <Breadcrumb
        paths={[
          { label: "Home", href: "/" },
          { label: "Lulusan Terbaik", href: "/lulusan" },
          { label: detail.name },
        ]}
      />

      {/* Konten Detail */}
      <div className="flex flex-col w-full max-w-3xl justify-between items-center py-10 gap-10">
        <img
          src={detail.image}
          alt={detail.name}
          className="w-full rounded-xl object-cover shadow-md max-w-xl"
        />

        <ul className="flex flex-col w-full h-full items-center justify-center gap-4">
          <h1 className="text-title font-bold text-center">{detail.name}</h1>
          <p className="text-subtitle">{detail.status}</p>
          <p className="text-paragraph">NEM: {detail.nem}</p>
          <p className="text-paragraph">Masuk ke {detail.sma}</p>
        </ul>
      </div>
    </div>
  );
};

export default DetailBestGraduate;
