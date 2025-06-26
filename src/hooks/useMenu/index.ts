import { useState, useCallback } from "react";

export const useMenu = (initialState = false) => {
  const [isMenuOpen, setIsMenuOpen] = useState(initialState);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    setMenuOpen: setIsMenuOpen,
  };
};
