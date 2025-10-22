import React from "react";
import { Link } from "react-router-dom";
import DataExtracurricular from "../Data/DataExtracurricular";

const ComponentsExtracurricular = () => {
  return (
    <div className="w-full max-w-7xl px-5 lg:px-20 py-10">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {DataExtracurricular.items.map((item) => (
          <Link
            to={`/ekstrakurikuler/${item.slug}`}
            key={item.id}
            className="bg-[var(--background)] w-full rounded-2xl shadow-md overflow-hidden hover:scale-105 hover:shadow-xl transition flex flex-col"
          >
            {/* Gambar */}
            <div className="w-full h-60 bg-[var(--background_component)]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Nama Ekskul */}
            <div className="p-4 flex flex-col items-center justify-center">
              <h1 className="font-semibold text-paragraph text-lg">
                {item.name}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComponentsExtracurricular;
