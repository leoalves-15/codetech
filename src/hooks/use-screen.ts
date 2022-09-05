import { useState, useEffect } from "react";

export const useScreen = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [screen, setScreen] = useState<number>(0);

  const handleResize = () => {
    setScreen(window.innerWidth);
    setIsMobile(window.innerWidth <= 800);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return { isMobile, screen };
};
