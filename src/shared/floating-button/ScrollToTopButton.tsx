import ArrowUpIcon from "@/assets/icons/ArrowUpIcon";
import { scrollToTop } from "@/shared/utils/scroll-to-top";
import styles from "@/shared/floating-button/ScrollToTopButton.module.scss";
import { useUI } from "@/contexts/UIContext";

export default function ScrollToTopButton() {
  const { isScrollTopVisible } = useUI();

  if (!isScrollTopVisible) return null;

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
