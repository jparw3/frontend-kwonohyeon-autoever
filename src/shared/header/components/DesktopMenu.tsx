import styles from "@/shared/header/components/DesktopMenu.module.scss";
import { scrollToTop } from "@/shared/utils/scroll-to-top";

export default function DesktopMenu() {
  return (
    <nav className={styles.menu}>
      <a href="https://wiblebiz.kia.com/Guide" className={styles.menu_item}>
        서비스 소개
      </a>
      <a className={styles.menu_item} onClick={scrollToTop}>
        자주 묻는 질문
      </a>
      <a href="https://wiblebiz.kia.com/News" className={styles.menu_item}>
        새소식
      </a>
      <a href="https://wiblebiz.kia.com/Counsel" className={styles.menu_item}>
        상담문의
      </a>
    </nav>
  );
}
