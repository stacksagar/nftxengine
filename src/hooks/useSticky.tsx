import { useEffect, useState } from "react";

export default function useSticky(header_height?: number) {
  const [scrollTop] = useState(header_height || 100);
  const [sticky, setSticky] = useState(false);
  const [isGone, setIsGone] = useState(false);

  const stickyHeader = (): void => {
    if (window.scrollY > scrollTop) {
      setIsGone(true);
    } else {
      setIsGone(false);
    }
    if (window.scrollY > scrollTop + 30) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);

    return (): void => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return {
    sticky,
    isGone,
  };
}
