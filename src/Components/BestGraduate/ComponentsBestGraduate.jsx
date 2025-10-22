import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const ComponentsBestGraduate = ({ data = [], isDashboard = false }) => {
  const total = data.length;

  // Fungsi responsif jumlah card
  const getVisibleCount = () => {
    const width = window.innerWidth;
    if (width <= 500) return 1;
    if (width <= 768) return 2;
    if (width <= 1150) return 3;
    if (width <= 1360) return 4;
    return 5;
  };

  const [index, setIndex] = useState(0);
  const [maxVisible, setMaxVisible] = useState(getVisibleCount());

  // Update jumlah card saat resize
  useEffect(() => {
    const handleResize = () => setMaxVisible(getVisibleCount());
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Tombol navigasi
  const handleNext = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setIndex((prevIndex) => (prevIndex - 1 + total) % total);
  }, [total]);

  // Auto slide hanya di dashboard
  useEffect(() => {
    if (!isDashboard) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext, isDashboard]);

  // Data yang ditampilkan
  const visibleGraduates = isDashboard
    ? Array.from({ length: maxVisible }, (_, i) => data[(index + i) % total])
    : data;

  // Breadcrumb
  const location = useLocation();
  const isGraduatePage = location.pathname.includes("lulusan");

  return (
    <div
      className={`relative group flex flex-col px-5 lg:px-20 ${
        isDashboard ? "my-0" : "mt-48"
      }`}
    >
      {!isDashboard && (
        <Breadcrumb
          paths={[
            { label: "Home", href: "/" },
            { label: isGraduatePage ? "Lulusan Terbaik" : "Lulusan" },
          ]}
        />
      )}

      {/* Card Lulusan */}
      <div
        className={`flex flex-wrap justify-center gap-5 ${
          isDashboard ? "py-0" : "py-10"
        }`}
      >
        {visibleGraduates.map((item, idx) => (
          <Link
            key={`${item.id}-${idx}`}
            to={`/detail/lulusan/${encodeURIComponent(item.name)}`}
          >
            <div className="flex flex-col w-52 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-all">
              <div className="relative">
                <img
                  className="w-full h-64 object-cover"
                  src={item.image}
                  alt={`graduate-${item.id}`}
                />
              </div>
              <div className="flex flex-col w-full h-full items-center justify-center gap-2 p-5 bg-[var(--background_component)] text-paragraph text-center">
                <p
                  className="text-subtitle font-bold"
                  style={{ color: "var(--color_text_secondary)" }}
                >
                  {item.name}
                </p>
                <p className="">{item.status}</p>
                <p className="">NEM: {item.nem}</p>
                <p className="">Masuk ke {item.sma}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Tombol Navigasi hanya di dashboard */}
      {isDashboard && (
        <>
          <button
            onClick={handlePrev}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color_text_secondary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color_text_title)")
            }
            className="hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--background)] px-4 py-2 rounded-full shadow-xl z-10 transition text-header"
          >
            <i className="ri-arrow-left-s-line hover:scale-120"></i>
          </button>

          <button
            onClick={handleNext}
             onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color_text_secondary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color_text_title)")
            }
            className="hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 bg-[var(--background)] px-4 py-2 rounded-full shadow-xl z-10 transition text-header"
          >
            <i className="ri-arrow-right-s-line hover:scale-120"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default ComponentsBestGraduate;
