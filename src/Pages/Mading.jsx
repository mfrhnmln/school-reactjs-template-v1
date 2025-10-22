import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Header from "../Components/Header/Header";
import ComponentsMadingNews from "../Components/Mading/ComponentsMadingNews";
import ComponentsMadingVideo from "../Components/Mading/ComponentsMadingVideo";
import ComponentsMadingVideoLocal from "../Components/Mading/ComponentsMadingVideoLocal";
import ComponentsMadingImg from "../Components/Mading/ComponentsMadingImg";
import DataVideos from "../Components/Mading/DataVideos";

const Mading = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  // Memoize slides to avoid recreation on every render
  const slides = useMemo(
    () => [
      { type: "mading" },
      { type: "video", src: "https://www.youtube.com/watch?v=B_8bbKn3amE" },
      ...DataVideos.map((v) => ({ type: "video-local", src: v.src })),
      { type: "image", src: "/school_animation.png" },
    ],
    []
  );

  // Memoize functions so they don't change on each render
  const handleNext = useCallback(
    () => setCurrentIndex((prev) => (prev + 1) % slides.length),
    [slides]
  );

  const handlePrev = useCallback(
    () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length),
    [slides]
  );

  useEffect(() => {
    const currentSlide = slides[currentIndex];
    if (timerRef.current) clearTimeout(timerRef.current);

    if (currentSlide.type === "mading" || currentSlide.type === "image") {
      timerRef.current = setTimeout(() => handleNext(), 180000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentIndex, slides, handleNext]);

  // render sesuai type
  const renderSlide = () => {
    const slide = slides[currentIndex];

    switch (slide.type) {
      case "mading":
        return <ComponentsMadingNews />;
      case "video":
        return (
          <ComponentsMadingVideo src={slide.src} onVideoEnd={handleNext} />
        );
      case "video-local":
        return (
          <ComponentsMadingVideoLocal src={slide.src} onVideoEnd={handleNext} />
        );
      case "image":
        return <ComponentsMadingImg src={slide.src} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen transition-all"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Header />

      <main className="flex flex-col min-h-screen items-center justify-center w-full relative py-20">
        {renderSlide()}

        {/* tombol manual */}
        <div className="flex justify-center gap-5 mt-5">
          <button onClick={handlePrev} className="btn-default">
            <i className="ri-arrow-left-s-line text-xl"></i>
          </button>
          <button onClick={handleNext} className="btn-default">
            <i className="ri-arrow-right-s-line text-xl"></i>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Mading;
