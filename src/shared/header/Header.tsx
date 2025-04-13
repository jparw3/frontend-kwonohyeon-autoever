import { useState } from "react";
import styles from "@/shared/header/Header.module.scss";
import KiaBizLogo from "/public/logos/kia-biz.svg";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={KiaBizLogo} alt="기아 비즈 로고" />
        <nav className={styles.menu}>
          <a href="https://wiblebiz.kia.com/Guide" className={styles.menu_item}>
            서비스 소개
          </a>
          <a className={styles.menu_item}>자주 묻는 질문</a>
          <a href="https://wiblebiz.kia.com/News" className={styles.menu_item}>
            새소식
          </a>
          <a
            href="https://wiblebiz.kia.com/Counsel"
            className={styles.menu_item}
          >
            상담문의
          </a>
        </nav>
        <button
          className={`${styles.hamburger} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`${styles.mobile_menu} ${
          isMobileMenuOpen ? styles.show : ""
        }`}
      >
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
    </>
  );
}
