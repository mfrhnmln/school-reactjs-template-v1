// Normalisasi tanggal (dd-mm-yyyy → Date object)
export const fixDate = (dateStr) => {
  if (!dateStr) return null;
  const cleaned = dateStr.trim().replace(/[–—]/g, "-");

  // format dd-mm-yyyy
  if (/^\d{2}-\d{2}-\d{4}$/.test(cleaned)) {
    const [day, month, year] = cleaned.split("-");
    return new Date(Number(year), Number(month) - 1, Number(day)); // ✅ Date
  }

  const d = new Date(cleaned);
  return isNaN(d) ? null : d;
};

// Normalisasi seluruh data agar item.date jadi Date object
export const normalizeData = (data) =>
  (Array.isArray(data) ? data : []).map((item) => ({
    ...item,
    date: fixDate(item.date),
  }));

// Ambil tahun unik dari data
export const getUniqueYears = (data) => {
  return [
    ...new Set(
      data
        .map((item) => {
          if (!item.date) return null;
          return item.date instanceof Date && !isNaN(item.date)
            ? item.date.getFullYear()
            : null;
        })
        .filter(Boolean)
    ),
  ].sort((a, b) => b - a);
};

// Filter berdasarkan tahun & pencarian
export const filterByYearAndSearch = (data, year, query) => {
  const norm = (s) => (s || "").toLowerCase();

  return data.filter((item) => {
    const itemYear =
      item.date instanceof Date && !isNaN(item.date)
        ? item.date.getFullYear()
        : null;

    const yearOk = year ? String(itemYear) === String(year) : true;

    const haystack = [
      item.title,
      item.openingContent,
      ...(item.paragraphs || []),
      item.author,
    ]
      .map(norm)
      .join(" ");

    const searchOk = query ? haystack.includes(norm(query)) : true;

    return yearOk && searchOk;
  });
};

// Update query params di URL
export const updateParams = (searchParams, setSearchParams, key, value) => {
  const params = new URLSearchParams(searchParams);
  if (value) params.set(key, value);
  else params.delete(key);
  setSearchParams(params, { replace: true });
};
