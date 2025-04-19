import DesktopMenu from "@/shared/header/components/DesktopMenu";
import MobileMenu from "@/shared/header/components/MobileMenu";
import HamburgerButton from "@/shared/header/components/HamburgerButton";
import styles from "@/shared/header/Header.module.scss";
import { useUI } from "@/contexts/UIContext";

export default function Header() {
  const { isScrolled, isMobileMenuOpen, setIsMobileMenuOpen } = useUI();

  return (
    <>
      <header
        className={`${styles.wrapper} ${isScrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.header_container}>
          <img
            className={styles.logo}
            src={"/logos/kia-biz.svg"}
            alt="기아 비즈 로고"
            />
          <DesktopMenu />
          <HamburgerButton
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
        </div>
      </header>
      <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
