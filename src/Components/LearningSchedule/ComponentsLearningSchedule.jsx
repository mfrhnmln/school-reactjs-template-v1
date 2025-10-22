import { useState } from "react";

const ComponentsLearningSchedule = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Grid Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg shadow-md overflow-hidden transition cursor-pointer"
            onClick={() => setSelectedImage(item.image)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[15rem] object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="font-semibold text-subtitle">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50 bg-[var(--background)]/80 shadow-2xl"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[80%]"
            onClick={(e) => e.stopPropagation()} // agar klik di gambar tidak menutup
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ComponentsLearningSchedule;
