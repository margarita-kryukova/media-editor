import styles from "./index.module.scss";

export interface INavItem {
  href: string;
  value: string;
  isVisible?: boolean;
}

const NavItem: React.FC<INavItem> = ({ href, value, isVisible = true }) => (
  <li className={styles.item}>
    <a
      href={href}
      className={styles.item__link}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
    >
      {value}
    </a>
  </li>
);

export default NavItem;
