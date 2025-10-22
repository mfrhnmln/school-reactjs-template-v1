import { useEffect } from "react";

const ComponentsMadingVideoLocal = ({ src, onVideoEnd }) => {
  useEffect(() => {
    // fallback maksimal 5 menit kalau video terlalu lama
    const timeout = setTimeout(() => onVideoEnd?.(), 300000);
    return () => clearTimeout(timeout);
  }, [onVideoEnd]);

  if (!src) return <p className="text-title">Video tidak ditemukan</p>;

  return (
    <div className="relative flex w-full h-full justify-center items-center">
      <video
        src={src}
        autoPlay
        controls
        onEnded={onVideoEnd}
        className="w-[90vw] h-full rounded-lg border-0"
      >
        Browser Anda tidak mendukung tag video.
      </video>
    </div>
  );
};

export default ComponentsMadingVideoLocal;
