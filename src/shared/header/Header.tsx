import { useState, useEffect } from "react";
import styles from "@/shared/header/Header.module.scss";
import DesktopMenu from "@/shared/header/components/DesktopMenu";
import MobileMenu from "@/shared/header/components/MobileMenu";
import HamburgerButton from "@/shared/header/components/HamburgerButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
