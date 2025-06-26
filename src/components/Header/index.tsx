import React, { useEffect, useRef } from "react";
import { FocusOn } from "react-focus-on";
import styles from "./index.module.scss";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Button from "../../shared/ui/Button";
import Nav from "./components/Nav";
import { NAVIGATION_DATA } from "../../shared/constants/data";

interface IHeaderProps {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({ isMenuOpen, setMenuOpen }) => {
  const isMobile = useMediaQuery(767, "max");
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setMenuOpen(false);
    }
  }, [isMobile, isMenuOpen, setMenuOpen]);

  useEffect(() => {
    if (isMenuOpen && isMobile) {
      burgerRef.current?.focus();
    }
  }, [isMenuOpen, isMobile]);

  const headerContent = (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <div
          className={`${styles.header__nav} ${
            isMenuOpen ? styles["header__nav_open"] : ""
          }`}
          aria-hidden={!isMenuOpen && isMobile ? "true" : "false"}
        >
          <Nav list={NAVIGATION_DATA} isVisible={isMenuOpen || !isMobile} />
        </div>

        <Button text="Войти" />
        <button
          ref={burgerRef}
          className={`${styles.header__burger} ${
            isMenuOpen ? styles["header__burger_open"] : ""
          }`}
          onClick={() => setMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
        >
          <span className={styles["header__burger-line"]}></span>
          <span className={styles["header__burger-line"]}></span>
          <span className={styles["header__burger-line"]}></span>
        </button>
      </div>
    </header>
  );

  if (isMenuOpen && isMobile) {
    return (
      <FocusOn
        onEscapeKey={() => setMenuOpen(false)}
        shards={[]}
        autoFocus={false}
        returnFocus={false}
      >
        {headerContent}
      </FocusOn>
    );
  }

  return headerContent;
};

export default Header;
