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
      </header>
      <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
