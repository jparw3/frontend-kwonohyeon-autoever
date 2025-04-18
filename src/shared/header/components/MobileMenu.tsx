import { useEffect } from "react";
import { scrollToTop } from "@/shared/utils/scroll-to-top";
import styles from "@/shared/header/components/MobileMenu.module.scss";
import { useUI } from "@/contexts/UIContext";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const { isMobileMenuOpen } = useUI();

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className={`${styles.mobile_menu} ${isMobileMenuOpen ? styles.show : ""}`}
    >
      <nav className={styles.mobile_nav}>
        <a
          href="https://wiblebiz.kia.com/Guide"
          className={styles.mobile_menu_item}
          onClick={onClose}
        >
          서비스 소개
        </a>
        <a
          className={styles.mobile_menu_item}
          onClick={() => {
            onClose();
            scrollToTop();
          }}
        >
          자주 묻는 질문
        </a>
        <a
          href="https://wiblebiz.kia.com/News"
          className={styles.mobile_menu_item}
          onClick={onClose}
        >
          새소식
        </a>
        <a
          href="https://wiblebiz.kia.com/Counsel"
          className={styles.mobile_menu_item}
          onClick={onClose}
        >
          상담문의
        </a>
      </nav>
    </div>
  );
}
