import React, { useEffect } from "react";

export default function ComponentsInstagramEmbed({ url }) {
  useEffect(() => {
    // cek apakah script Instagram sudah ada
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // jika sudah ada, re-render embed
      window.instgrm?.Embeds?.process();
    }
  }, [url]);

  return (
    <div className="flex justify-center my-5">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "8px",
          boxShadow: "0 0 1px rgba(0,0,0,0.5), 0 2px 10px rgba(0,0,0,0.15)",
          margin: "auto",
          maxWidth: "540px",
          minWidth: "326px",
          width: "100%",
        }}
      ></blockquote>
    </div>
  );
}
