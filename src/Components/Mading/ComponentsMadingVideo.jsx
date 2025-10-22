import { useEffect, useRef, useState } from "react";
import { getYoutubeEmbedUrl } from "../../utils/youtube.js";

const ComponentsMadingVideo = ({ src, onVideoEnd }) => {
  const iframeRef = useRef(null);
  const [apiReady, setApiReady] = useState(false);
  const embedUrl = getYoutubeEmbedUrl(src);

  // ✅ Muat API YouTube hanya sekali
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      return;
    }

    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(scriptTag);

    window.onYouTubeIframeAPIReady = () => {
      setApiReady(true);
    };
  }, []);

  // ✅ Inisialisasi player hanya setelah API siap
  useEffect(() => {
    if (!apiReady || !embedUrl) return;

    let player = new window.YT.Player(iframeRef.current, {
      events: {
        onStateChange: (event) => {
          // 🎯 Deteksi video selesai
          if (event.data === window.YT.PlayerState.ENDED) {
            onVideoEnd?.();
          }
        },
      },
    });

    return () => {
      if (player && player.destroy) player.destroy();
    };
  }, [apiReady, embedUrl, onVideoEnd]);

  if (!embedUrl) return <p className="text-title">Video tidak valid</p>;

  return (
    <div className="relative flex w-full h-full justify-center items-center">
      <iframe
        ref={iframeRef}
        src={`${embedUrl}?enablejsapi=1&autoplay=1&controls=1&modestbranding=1`}
        title="YouTube video"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        className="w-[90vw] h-[60vh] rounded-lg shadow-lg border-0"
      />
    </div>
  );
};

export default ComponentsMadingVideo;
