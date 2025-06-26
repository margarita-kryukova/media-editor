import styles from "./index.module.scss";
import { getImagePath } from "../../shared/helpers/getImagePath";

interface IHeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<IHeroSectionProps> = ({ title, description }) => {
  const heroBgImage = `url(${getImagePath("images/hero-bg.jpg")})`;

  return (
    <section
      className={styles.hero}
      style={{ "--hero-bg-image": heroBgImage } as React.CSSProperties}
    >
      <div className={styles.hero__container}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>{title}</h1>
          <p className={styles.hero__desc}>{description}</p>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
