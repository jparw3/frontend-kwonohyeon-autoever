import { useEffect } from "react";
import { scrollToTop } from "@/shared/utils/scroll-to-top";
import styles from "@/shared/header/components/MobileMenu.module.scss";
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className={`${styles.mobile_menu} ${isOpen ? styles.show : ""}`}>
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
