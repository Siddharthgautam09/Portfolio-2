import { useEffect, useState } from "react";

export function useBgBlur(threshold = 0.25) {
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const triggerPoint = window.innerHeight * threshold;
      setBlur(scrolled > triggerPoint);
    };

    handleScroll(); // check once on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return blur;
}
