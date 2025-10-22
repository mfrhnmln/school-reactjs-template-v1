import { useEffect, useState, useCallback } from "react";

const ComponentsTeachersStaff = ({ data = [] }) => {
  const total = data.length;

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

  useEffect(() => {
    const handleResize = () => setMaxVisible(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = useCallback(() => {
    setIndex((prevIndex) => (prevIndex + 1) % total);
  }, [total]);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const visibleTeachersStaff = Array.from({ length: maxVisible }, (_, i) => data[(index + i) % total]);

  return (
    <div className="flex flex-wrap justify-center gap-5 relative group">
      {visibleTeachersStaff.map((item, idx) => (
        <div
          key={`${item.id}-${idx}`}
          className="flex flex-col w-52 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-all"
        >
          <div className="relative">
            <img
              className="w-full h-64 object-cover"
              src={item.image}
              alt={`photo-${item.id}`}
            />
          </div>
          <div className="flex flex-col w-full h-full items-center justify-center gap-3 p-5 bg-[var(--background_component)]">
            <p className="text-subtitle font-bold">{item.name}</p>
            <p className="text-paragraph">{item.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComponentsTeachersStaff;
