import styles from "@/shared/header/components/MobileMenu.module.scss";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  return (
    <div className={`${styles.mobile_menu} ${isOpen ? styles.show : ""}`}>
      <nav className={styles.mobile_nav}>
        <a
          href="https://wiblebiz.kia.com/Guide"
          className={styles.mobile_menu_item}
        >
          서비스 소개
        </a>
        <a className={styles.mobile_menu_item}>자주 묻는 질문</a>
        <a
          href="https://wiblebiz.kia.com/News"
          className={styles.mobile_menu_item}
        >
          새소식
        </a>
        <a
          href="https://wiblebiz.kia.com/Counsel"
          className={styles.mobile_menu_item}
        >
          상담문의
        </a>
      </nav>
    </div>
  );
}
