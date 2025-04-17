import { useEffect, useState } from "react";
import styles from "@/shared/floating-button/ScrollToTopButton.module.scss";
import ArrowUpIcon from "@/assets/icons/ArrowUpIcon";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      className={styles.wrapper}
      onClick={scrollToTop}
      aria-label="상단으로"
    >
      <ArrowUpIcon className={styles.icon} />
    </button>
  );
}
