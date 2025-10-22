import React from "react";
import ComponentsBestGraduate from "../Components/BestGraduate/ComponentsBestGraduate";
import DataBestGraduate from "../Components/Data/DataBestGraduate";

const BestGraduate = () => {
  // kalau mau semua langsung tampil:
  const dataGraduate = DataBestGraduate;

  // kalau mau filter tertentu, misalnya tahun:
  // const dataGraduate = DataBestGraduate.filter((item) => item.year === "2024");

  return <ComponentsBestGraduate data={dataGraduate} isDashboard={false} />;
};

export default BestGraduate;
