import { useState } from "react";
import styles from "@/shared/header/Header.module.scss";
import DesktopMenu from "@/shared/header/components/DesktopMenu";
import MobileMenu from "@/shared/header/components/MobileMenu";
import HamburgerButton from "@/shared/header/components/HamburgerButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
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
      <MobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
}
