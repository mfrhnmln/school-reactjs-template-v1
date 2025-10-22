import { useState, useEffect } from "react";

export const useTruncatedMessage = (message) => {
  const [truncated, setTruncated] = useState("");

  useEffect(() => {
    const updateMessage = () => {
      const width = window.innerWidth;
      let result = message;

      if (width <= 768) {
        result = message.slice(0, 300);
      } else if (width <= 1024) {
        result = message.slice(0, 400);
      } else {
        result = message.slice(0, 520);
      }

      setTruncated(result);
    };

    updateMessage();
    window.addEventListener("resize", updateMessage);
    return () => window.removeEventListener("resize", updateMessage);
  }, [message]);

  return truncated;
};
