import type { INavItem } from "../NavItem";
import NavItem from "../NavItem";
import styles from "./index.module.scss";

interface INav {
  list: INavItem[];
  isVisible?: boolean;
}

const Nav: React.FC<INav> = ({ list, isVisible = true }) => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      {list.map((item) => (
        <NavItem {...item} key={item.value} isVisible={isVisible} />
      ))}
    </ul>
  </nav>
);

export default Nav;
